import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Chat() {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    async function sendMessage() {

        if (!message.trim()) return;

        const userMessage = message;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: userMessage
            }
        ]);

        setMessage("");
        setLoading(true);

        try {

            const response = await fetch(
                "https://portfolio-website-1-swpq.onrender.com/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: userMessage
                    })
                }
            );

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    text: data.response
                }
            ]);

        } catch (error) {

            console.error(error);

setMessages((prev) => [
    ...prev,
    {
        role: "assistant",
        text: "I might be busy right now. Please try again in a few seconds."
    }
]);

        } finally {

            setLoading(false);

        }
    }

    function handleKeyDown(e) {

        if (e.key === "Enter") {
            sendMessage();
        }
    }

    useEffect(() => {

    if (chatContainerRef.current) {

        chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;

    }

}, [messages, loading]);

    return (

        <section className="relative pt-0 pb-20 px-6 overflow-hidden -mt-20">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]" />

                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px]" />

            </div>

            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <p className="text-sm tracking-[0.4em] uppercase text-on-surface-variant mb-4">
                        AI_INTERFACE
                    </p>

                    <h2 className="text-5xl md:text-7xl font-headline uppercase tracking-tight">

                        Ask_
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                            Anything_About_Me
                        </span>

                    </h2>

                </motion.div>

                {/* Chat Container */}
                <div className="glass-panel border border-primary/10 rounded-3xl overflow-hidden neon-glow">

                    {/* Header */}
                    <div className="border-b border-primary/10 px-8 py-6 flex items-center justify-between">

                        <div>

                            <h3 className="font-headline text-xl uppercase tracking-[0.2em] text-primary">
                                ARCHIT_AI
                            </h3>

                            <p className="text-sm text-on-surface-variant mt-1">
                                Interactive Intelligence System
                            </p>

                        </div>

                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />

                    </div>

                    {/* Messages */}
                    <div
    ref={chatContainerRef}
    className="h-100 overflow-y-auto p-8 space-y-8"
>

                        {messages.length === 0 && (

                            <div className="h-full flex items-center justify-center">

                                <div className="text-center">

                                    <p className="text-on-surface-variant tracking-[0.3em] uppercase text-sm mb-4">
                                        SYSTEM_READY
                                    </p>

                                    <p className="text-on-surface-variant/70">
                                        Ask about projects, skills, experience, or technology.
                                    </p>

                                </div>

                            </div>

                        )}

                        {messages.map((msg, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${
                                    msg.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >

                                <div
                                    className={`max-w-[75%] px-6 py-5 rounded-2xl border leading-8 tracking-wide whitespace-pre-line wrap-break-word text-[15px] ${
                                        msg.role === "user"
                                            ? "bg-primary text-black border-primary shadow-[0_0_30px_rgba(0,210,255,0.25)]"
                                            : "glass-panel border-primary/10 text-on-surface"
                                    }`}
                                >
                                    {msg.text}
                                </div>

                            </motion.div>

                        ))}

                        {loading && (

                            <div className="text-primary tracking-widest uppercase text-sm animate-pulse">
                                Thinking...
                            </div>

                        )}                        

                    </div>                    

                    {/* Input */}
                    <div className="border-t border-primary/10 p-6 flex gap-4">

                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask something..."
                            className="flex-1 bg-background border border-primary/10 rounded-xl px-5 py-4 text-on-surface outline-none focus:border-primary transition-all"
                        />

                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="px-8 py-4 bg-linear-to-r from-primary-container to-primary text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,210,255,0.5)]"
                        >
                            Send
                        </button>

                    </div>

                </div>

            </div>

        </section>

    );
}