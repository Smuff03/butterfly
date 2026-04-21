import { Link } from "react-router-dom";
import { GraduationCap, Sprout, HeartHandshake, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { SITE, waLink } from "../lib/site";

export default function About() {
    return (
        <PageShell title="About Neha">
            <section className="relative py-20 sm:py-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 items-center">
                    <Reveal>
                        <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-5">
                            Our Story
                        </p>
                        <h1 className="font-heading text-5xl sm:text-6xl leading-[1.05] text-brand-ink">
                            A life rooted in <em className="text-brand-primary not-italic">plants</em>.
                        </h1>
                        <p className="mt-6 text-brand-ink2 leading-relaxed text-lg">
                            Hi, I'm Neha Padwal — founder of Butterfly Lawn & Landscape Enterprises.
                            With a BSc in Agriculture and years of hands-on experience, I turned my
                            lifelong passion for greenery into a mission: to make plant parenthood simple,
                            beautiful and genuinely joyful for every home.
                        </p>
                        <p className="mt-4 text-brand-ink2 leading-relaxed text-lg">
                            From a single handmade Kokedama to full balcony makeovers, every project begins
                            with one belief — that nature belongs inside our everyday lives.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/4505176/pexels-photo-4505176.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Neha Padwal working with plants"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-6 -right-6 bg-brand-primary text-white rounded-2xl p-5 shadow-xl hidden sm:block">
                                <p className="font-heading text-3xl">BSc</p>
                                <p className="text-sm text-white/80">Agriculture</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="py-20 bg-brand-surfaceAlt/60 border-y border-brand-primary/10">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 grid md:grid-cols-3 gap-8">
                    {[
                        { Icon: GraduationCap, t: "Trained Agronomist", d: "Formal BSc Agriculture education translates into science-backed plant care." },
                        { Icon: Sprout, t: "Hands-on Passion", d: "Every plant we recommend, we've personally grown, tested and trusted." },
                        { Icon: HeartHandshake, t: "Our Mission", d: "Bring greenery into homes, offices and lives — one thoughtful plant at a time." },
                    ].map(({ Icon, t, d }, i) => (
                        <Reveal key={t} delay={i * 0.08}>
                            <div className="bg-white p-8 rounded-3xl border border-brand-primary/10 h-full">
                                <span className="w-12 h-12 rounded-full bg-brand-primary/10 grid place-items-center text-brand-primary mb-5">
                                    <Icon className="w-5 h-5" />
                                </span>
                                <h3 className="font-heading text-2xl text-brand-ink mb-2">{t}</h3>
                                <p className="text-brand-ink2 leading-relaxed">{d}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="py-20 max-w-4xl mx-auto px-6 sm:px-10 text-center">
                <Reveal>
                    <h2 className="font-heading text-4xl sm:text-5xl text-brand-ink leading-tight">
                        Ready to bring nature home?
                    </h2>
                    <p className="mt-4 text-brand-ink2 text-lg">
                        Book a free 15-minute consultation. We'll listen, assess your space and send tailored recommendations.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" data-testid="about-consultation-btn"
                            className="inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-4 font-medium">
                            Book Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href={waLink()} target="_blank" rel="noreferrer" data-testid="about-whatsapp-btn"
                            className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-full px-8 py-4 font-medium transition-colors">
                            WhatsApp {SITE.phoneDisplay}
                        </a>
                    </div>
                </Reveal>
            </section>
        </PageShell>
    );
}
