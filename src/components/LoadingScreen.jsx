import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onFinish }) {

    const messages = [
        "Initializing Intelligence Layer...",
        "Connecting Neural Nodes...",
        "Synchronizing Backend Systems...",
        "Optimizing User Interface...",
        "Establishing Secure Connection...",
        "Finalizing Setup...",
        "Finalizing Startup...",
        "Welcome."
    ];

    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {

        async function initializeSystem() {

            try {

                // Wake backend
                await fetch(
                    "https://portfolio-website-1-swpq.onrender.com/health"
                );

            } catch (error) {

                console.log(error);

            }
        }

        initializeSystem();

        const interval = setInterval(() => {

            setCurrentMessage((prev) => {

                if (prev < messages.length - 1) {
                    return prev + 1;
                }

                clearInterval(interval);

                setTimeout(() => {

                    onFinish();

                }, 800);

                return prev;

            });

        }, 1800);

        return () => clearInterval(interval);

    }, []);

    return (
      <section className="fixed inset-0 z-9999 bg-background flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-[140px]" />

          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/10 rounded-full blur-[140px]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6">
          {/* Rotating Ring */}
          <div className="relative w-32 h-32 mx-auto mb-14">
            <div className="absolute inset-0 rounded-full border border-primary/20" />

            <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" />

            <div className="absolute inset-4 rounded-full border border-secondary/20" />
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-headline font-bold uppercase tracking-tighter mb-6 text-on-surface"
          >
            Archit{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary">
              PORTFOLIO
            </span>
          </motion.h1>

          {/* Dynamic Messages */}
          <div className="h-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-on-surface-variant tracking-[0.15em] uppercase text-sm md:text-base"
              >
                {messages[currentMessage]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
}