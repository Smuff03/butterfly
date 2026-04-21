import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PageShell({ children, title }) {
    useEffect(() => {
        if (title) document.title = `${title} — Butterfly Lawn & Landscape`;
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [title]);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pt-20"
        >
            {children}
        </motion.main>
    );
}
