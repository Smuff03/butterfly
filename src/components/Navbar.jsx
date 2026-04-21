import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, waLink } from "../lib/site";

const LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/shop", label: "Shop" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-[#F9F8F6]/85 backdrop-blur-xl border-b border-[#2e7d32]/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
                <Link
                    to="/"
                    data-testid="navbar-logo"
                    className="flex items-center gap-2 group"
                >
                    <span className="w-9 h-9 rounded-full bg-brand-primary grid place-items-center text-white shadow-sm">
                        <Leaf className="w-4 h-4" />
                    </span>
                    <span className="font-heading text-[22px] leading-none text-brand-ink">
                        Butterfly <span className="text-brand-primary">Lawn</span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className={({ isActive }) =>
                                `text-[15px] tracking-wide transition-colors ${isActive
                                    ? "text-brand-primary font-medium"
                                    : "text-brand-ink2 hover:text-brand-primary"
                                }`
                            }
                            end={l.to === "/"}
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        data-testid="navbar-whatsapp-btn"
                        href={waLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
                    >
                        WhatsApp Now
                    </a>
                </div>

                <button
                    data-testid="navbar-mobile-toggle"
                    className="lg:hidden p-2 rounded-full text-brand-ink"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-white border-t border-brand-primary/10"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {LINKS.map((l) => (
                                <NavLink
                                    key={l.to}
                                    to={l.to}
                                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                                    className={({ isActive }) =>
                                        `text-lg py-1 ${isActive ? "text-brand-primary font-medium" : "text-brand-ink2"
                                        }`
                                    }
                                    end={l.to === "/"}
                                >
                                    {l.label}
                                </NavLink>
                            ))}
                            <a
                                data-testid="navbar-mobile-whatsapp"
                                href={waLink()}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 bg-brand-primary text-white text-center rounded-full py-3 font-medium"
                            >
                                WhatsApp Now
                            </a>
                            <a
                                href={`tel:${SITE.phoneTel}`}
                                data-testid="navbar-mobile-call"
                                className="border border-brand-primary text-brand-primary text-center rounded-full py-3 font-medium"
                            >
                                Call {SITE.phoneDisplay}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
