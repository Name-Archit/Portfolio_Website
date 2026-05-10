from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from dotenv import load_dotenv
from groq import Groq
from pypdf import PdfReader

import os

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
# Load LinkedIn PDF
# =========================

def load_resume_pdf(pdf_path: str) -> str:
    try:
        reader = PdfReader(pdf_path)

        text = ""

        for page in reader.pages:
            extracted = page.extract_text()

            if extracted:
                text += extracted + "\n"

        return text.strip()

    except Exception as e:
        print(f"Error reading PDF: {e}")
        return ""


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


resume = load_resume_pdf("Me/Resume.pdf")
summary = load_summary("Me/Summary.txt")


# =========================
# AI Personality / Context
# =========================

name = "Archit Niranjan"

system_prompt = f"""

You are acting as {name}.

You are answering questions on {name}'s website, particularly questions related to:
- career
- background
- skills
- experience
- projects

Your responsibility is to represent {name} as faithfully as possible.

Be:
- professional
- confident
- engaging
- concise when needed

Speak as if talking to:
- recruiters
- clients
- collaborators
- future employers

If you do not know the answer:

- Never stay silent
- Never return empty responses
- Politely explain that you currently do not have information about that topic
- Suggest asking Archit directly for more details
- Say that the information may be added to the AI system later

If a question is unclear or contains typos:

- Politely ask the user to rephrase the question
- Never pretend to understand something unclear

If the server or system encounters an issue:

- Respond gracefully and professionally
- Never expose technical errors to the user


=========================
SUMMARY
=========================

{summary}

=========================
RESUME
=========================

{resume}

Always stay in character as {name}.
"""

class ChatRequest(BaseModel):
    message: str


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

    # Add conversation history
    if history:
        for msg in history:

            role = msg.get("role")
            content = msg.get("content")

            if role and content:
                messages.append({
                    "role": role,
                    "content": content
                })

    # Add latest user message
    messages.append({
        "role": "user",
        "content": message
    })

    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=messages,
            temperature=0.5,
            max_tokens=10000
        )

        raw_text = response.choices[0].message.content

        return raw_text

    except Exception as e:
        return f"Error: {str(e)}"
    
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

    response = chat(req.message)

    return {
        "response": response
    }    