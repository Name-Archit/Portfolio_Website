from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from dotenv import load_dotenv
from groq import Groq

import os
from datetime import datetime, timezone


# =========================
# Load Environment Variables
# =========================

load_dotenv(override=True)

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY not found in .env file")

client = Groq(api_key=api_key)


# =========================
# Create FastAPI App
# =========================

app = FastAPI()


# =========================
# Allow React Frontend Access
# =========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================
# Load Summary File
# =========================

def load_summary(summary_path: str) -> str:

    try:

        with open(summary_path, "r", encoding="utf-8") as file:
            return file.read().strip()

    except Exception as e:

        print(f"Error reading summary file: {e}")
        return ""


summary = load_summary("Me/Summary.txt")


# =========================
# AI Personality / Context
# =========================

name = "Archit Niranjan"

system_prompt = f"""
You are acting as {name}.

You are answering questions on {name}'s personal portfolio website.

Topics include:
- projects
- skills
- experience
- career
- technology
- competitive programming
- AI
- finance

Your personality:
- professional
- modern
- confident
- concise
- conversational

Rules:
- Keep responses natural and readable
- Prefer short paragraphs
- Avoid overly long answers
- Avoid markdown tables
- Do not over-format responses
- Speak like a premium AI assistant

If you don't know something:
- say so politely
- suggest asking Archit directly

If the user's question is unclear:
- politely ask them to rephrase

=========================
PROFILE CONTEXT
=========================

{summary}

Always stay in character as {name}.
"""


# =========================
# Request Model
# =========================

class ChatRequest(BaseModel):
    message: str
    history: list = []


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: str = Field(min_length=3, max_length=320)
    message: str = Field(min_length=1, max_length=5000)


# =========================
# Chat Function
# =========================

def chat(message, history=None):

    if history is None:
        history = []

    messages = [
        {
            "role": "system",
            "content": system_prompt
        }
    ]

    # Only keep recent history
    for msg in history[-4:]:

        role = msg.get("role")
        content = msg.get("content")

        if role and content:

            messages.append({
                "role": role,
                "content": content
            })

    # Latest user message
    messages.append({
        "role": "user",
        "content": message
    })

    try:

        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=messages,
            temperature=0.4,
            max_tokens=400
        )

        raw_text = response.choices[0].message.content

        return raw_text.strip()

    except Exception as e:

        print("ERROR:", str(e))

        return (
            "I'm having trouble responding right now. "
            "Please try again in a few seconds."
        )


# =========================
# Routes
# =========================

@app.get("/")
def home():

    return {
        "message": "AI Backend Running"
    }


@app.get("/health")
def health():

    return {
        "status": "alive"
    }


@app.post("/chat")
def chat_api(req: ChatRequest):

    response = chat(
        req.message,
        req.history
    )

    return {
        "response": response
    }


@app.post("/contact")
def contact_api(req: ContactRequest):
    try:
        from pymongo import MongoClient

        mongo_uri = os.getenv("MONGODB_URI")
        if not mongo_uri:
            raise HTTPException(
                status_code=503,
                detail="Message storage is not configured yet. Please email me directly.",
            )

        client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
        client.admin.command("ping")
        database_name = os.getenv("MONGODB_DATABASE", "portfolio")
        collection_name = os.getenv("MONGODB_COLLECTION", "contact_messages")
        result = client[database_name][collection_name].insert_one({
            "name": req.name.strip(),
            "email": req.email.strip(),
            "message": req.message.strip(),
            "created_at": datetime.now(timezone.utc),
        })
        client.close()
    except Exception as error:
        print(f"Contact message storage failed: {error}")
        if isinstance(error, HTTPException):
            raise
        raise HTTPException(
            status_code=500,
            detail="Your message could not be saved right now. Please try again or email me directly.",
        ) from error

    return {"id": str(result.inserted_id), "message": "Your message was received and saved."}
