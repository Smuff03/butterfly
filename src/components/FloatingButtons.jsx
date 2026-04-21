import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { waLink } from "../lib/site";

export default function FloatingButtons() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 500);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <a
                data-testid="floating-whatsapp-btn"
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 z-40 bg-brand-whatsapp hover:brightness-110 text-white rounded-full p-4 shadow-2xl shadow-emerald-600/30 flex items-center gap-2 group"
            >
                <MessageCircle className="w-6 h-6" />
                <span className="hidden group-hover:inline text-sm font-medium pr-1">
                    Chat with us
                </span>
                <span className="absolute inset-0 rounded-full animate-ping bg-brand-whatsapp/40 -z-10" />
            </a>

            <AnimatePresence>
                {show && (
                    <motion.button
                        data-testid="scroll-top-btn"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        aria-label="Scroll to top"
                        className="fixed bottom-6 left-6 z-40 bg-white border border-brand-primary/20 text-brand-primary rounded-full p-3 shadow-md hover:bg-brand-primary hover:text-white transition-colors"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
