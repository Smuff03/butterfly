import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Sprout, Leaf, Shovel, Compass, LayoutGrid, Flower2,
    ShieldCheck, Clock, Wallet, GraduationCap, ArrowRight, Phone, MessageCircle, Star,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { SITE, waLink, telLink } from "../lib/site";
import { SERVICES, KOKEDAMA, GALLERY, TESTIMONIALS, WHY_US, TRUST } from "../lib/content";

const iconMap = { Sprout, Leaf, Shovel, Compass, LayoutGrid, FlowerPot: Flower2 };

export default function Home() {
    const heroBg =
        "https://static.prod-images.emergentagent.com/jobs/14bafe2b-690f-402f-9fc1-f5926ba32620/images/e82bf30f6b75770fb6ac04f9daf8deb4f1a63d6f6f92050980bfe64970bb3124.png";

    return (
        <div data-testid="page-home">
            {/* HERO */}
            <section className="relative min-h-[92vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Lush indoor garden"
                        className="w-full h-full object-cover kenburns"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-[#F9F8F6]" />
                </div>

                <motion.div
                    aria-hidden
                    className="absolute top-[18%] right-[8%] w-24 h-24 rounded-full bg-brand-secondary/30 blur-2xl"
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    aria-hidden
                    className="absolute bottom-[22%] left-[6%] w-32 h-32 rounded-full bg-brand-primary/25 blur-3xl"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-sm uppercase tracking-[0.25em] text-white/90 font-medium mb-5"
                    >
                        Navi Mumbai · Since years of passion
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.9 }}
                        className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-4xl"
                    >
                        Bring nature <em className="text-brand-secondary not-italic">closer</em> to your life.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.9 }}
                        className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed"
                    >
                        Thoughtful gardening, landscaping & handcrafted Kokedama — designed for your home by a BSc Agriculture expert.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="/contact"
                            data-testid="hero-consultation-btn"
                            className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-4 font-medium transition-colors shadow-lg shadow-brand-primary/20"
                        >
                            Get Free Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            data-testid="hero-whatsapp-btn"
                            href={waLink()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-brand-primary rounded-full px-8 py-4 font-medium border border-white/40 backdrop-blur"
                        >
                            <MessageCircle className="w-5 h-5" /> WhatsApp Now
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* TRUST BAR */}
            <section className="py-10 bg-brand-surfaceAlt/70 border-y border-brand-primary/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {TRUST.map((t, i) => (
                        <Reveal key={t} delay={i * 0.08}>
                            <div className="flex items-center gap-3 text-brand-ink2">
                                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                                <span className="text-sm sm:text-base font-medium">{t}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10" id="services-preview">
                <Reveal>
                    <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-4">What we do</p>
                    <h2 className="font-heading text-4xl sm:text-5xl max-w-2xl text-brand-ink leading-tight">
                        Services that make your space <em className="text-brand-primary not-italic">breathe</em>.
                    </h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14">
                    {SERVICES.map((s, i) => {
                        const Icon = iconMap[s.icon] || Leaf;
                        return (
                            <Reveal key={s.slug} delay={i * 0.06}>
                                <div
                                    data-testid={`service-card-${s.slug}`}
                                    className="group relative bg-white rounded-3xl border border-brand-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-7">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="w-10 h-10 rounded-full bg-brand-primary/10 grid place-items-center text-brand-primary">
                                                <Icon className="w-5 h-5" />
                                            </span>
                                            <h3 className="font-heading text-2xl text-brand-ink">{s.title}</h3>
                                        </div>
                                        <p className="text-brand-ink2 leading-relaxed text-[15px]">{s.short}</p>
                                        <Link
                                            to="/contact"
                                            data-testid={`service-enquire-${s.slug}`}
                                            className="inline-flex items-center gap-2 mt-5 text-brand-primary font-medium hover:gap-3 transition-all"
                                        >
                                            Enquire Now <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* KOKEDAMA HIGHLIGHT */}
            <section className="relative py-24 sm:py-32 bg-brand-primary text-white overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0.5px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                    <Reveal>
                        <p className="text-sm uppercase tracking-[0.25em] text-brand-secondary font-semibold mb-4">
                            {KOKEDAMA.tagline}
                        </p>
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                            {KOKEDAMA.title}
                        </h2>
                        <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-lg">
                            {KOKEDAMA.description}
                        </p>
                        <ul className="mt-8 space-y-3 text-white/90">
                            {KOKEDAMA.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-3">
                                    <Leaf className="w-5 h-5 mt-0.5 text-brand-secondary" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-9 inline-flex items-center gap-2 text-sm bg-white/10 border border-white/20 rounded-full px-4 py-2">
                            <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                            Limited handmade stock available this month
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/shop"
                                data-testid="kokedama-order-btn"
                                className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-brand-surfaceAlt rounded-full px-8 py-4 font-medium"
                            >
                                Order Now <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href={waLink("Hi! I'd like to order a Kokedama.")}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="kokedama-whatsapp-btn"
                                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 rounded-full px-8 py-4 font-medium"
                            >
                                <MessageCircle className="w-5 h-5" /> WhatsApp
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, -14, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={KOKEDAMA.main}
                                    alt="Kokedama moss ball"
                                    loading="lazy"
                                    className="w-full h-[520px] object-cover"
                                />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                className="hidden sm:block absolute -bottom-10 -left-8 w-56 h-56 rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-brand-primary"
                            >
                                <img src={KOKEDAMA.detail} alt="Kokedama detail" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10">
                <Reveal>
                    <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-4">Why choose us</p>
                    <h2 className="font-heading text-4xl sm:text-5xl text-brand-ink max-w-2xl leading-tight">
                        Expertise that shows. Care that stays.
                    </h2>
                </Reveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-14">
                    {WHY_US.map((w, i) => {
                        const icons = [GraduationCap, Compass, Clock, Wallet];
                        const Icon = icons[i];
                        return (
                            <Reveal key={w.t} delay={i * 0.08}>
                                <div className="p-8 rounded-3xl bg-brand-surfaceAlt h-full">
                                    <span className="w-12 h-12 rounded-full bg-brand-primary text-white grid place-items-center mb-5">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <h3 className="font-heading text-2xl text-brand-ink mb-2">{w.t}</h3>
                                    <p className="text-brand-ink2 leading-relaxed">{w.d}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* GALLERY SNEAK PEEK */}
            <section className="py-24 sm:py-32 bg-brand-surfaceAlt/60 border-y border-brand-primary/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">
                    <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
                        <Reveal>
                            <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-4">Recent work</p>
                            <h2 className="font-heading text-4xl sm:text-5xl text-brand-ink leading-tight max-w-2xl">
                                A peek into gardens we've grown.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <Link
                                to="/gallery"
                                data-testid="home-view-gallery-btn"
                                className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all"
                            >
                                View full gallery <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Reveal>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                        {GALLERY.slice(0, 4).map((g, i) => (
                            <Reveal key={i} delay={i * 0.06}>
                                <div className="group aspect-[3/4] overflow-hidden rounded-3xl">
                                    <img
                                        src={g.url}
                                        alt={g.cat}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10">
                <Reveal>
                    <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-4">Kind words</p>
                    <h2 className="font-heading text-4xl sm:text-5xl text-brand-ink max-w-2xl leading-tight">
                        Loved by plant parents across Navi Mumbai.
                    </h2>
                </Reveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                    {TESTIMONIALS.slice(0, 3).map((t, i) => (
                        <Reveal key={t.name} delay={i * 0.08}>
                            <div className="bg-brand-surfaceAlt p-9 rounded-3xl h-full flex flex-col">
                                <div className="flex gap-1 mb-4 text-brand-primary">
                                    {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-brand-ink2 leading-relaxed italic">"{t.text}"</p>
                                <div className="mt-6">
                                    <p className="font-heading text-xl text-brand-ink">{t.name}</p>
                                    <p className="text-sm text-brand-ink2/80">{t.role}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary" />
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 10% 10%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
                        backgroundSize: "42px 42px, 60px 60px",
                    }}
                />
                <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
                    <Reveal>
                        <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[1.05]">
                            Let's create your green space.
                        </h2>
                        <p className="text-white/85 mt-5 text-lg max-w-2xl mx-auto">
                            Share your space, your lifestyle, your budget. We'll design the rest.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a
                                href={telLink()}
                                data-testid="final-call-btn"
                                className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary hover:bg-brand-surfaceAlt rounded-full px-8 py-4 font-medium"
                            >
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="final-whatsapp-btn"
                                className="inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:brightness-110 text-white rounded-full px-8 py-4 font-medium"
                            >
                                <MessageCircle className="w-4 h-4" /> WhatsApp
                            </a>
                            <Link
                                to="/contact"
                                data-testid="final-contact-btn"
                                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white/10 rounded-full px-8 py-4 font-medium"
                            >
                                Contact Form <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-white/70 mt-6 text-sm">
                            Or email us at <a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                        </p>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
