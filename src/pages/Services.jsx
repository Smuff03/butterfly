import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { SERVICES } from "../lib/content";
import { waLink } from "../lib/site";

export default function Services() {
    return (
        <PageShell title="Services">
            <section className="pt-16 pb-10 max-w-7xl mx-auto px-6 sm:px-10">
                <Reveal>
                    <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-5">
                        Everything Green
                    </p>
                    <h1 className="font-heading text-5xl sm:text-6xl leading-[1.05] text-brand-ink max-w-3xl">
                        Services crafted for the way <em className="text-brand-primary not-italic">you</em> live.
                    </h1>
                    <p className="mt-5 text-brand-ink2 text-lg max-w-2xl">
                        From one-time makeovers to long-term care — thoughtful, honest, and tailored to your space.
                    </p>
                </Reveal>
            </section>

            <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24 space-y-20">
                {SERVICES.map((s, i) => (
                    <Reveal key={s.slug}>
                        <div
                            data-testid={`service-detail-${s.slug}`}
                            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-lg group">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-brand-secondary font-semibold mb-3">
                                    0{i + 1} — For {s.for}
                                </p>
                                <h2 className="font-heading text-4xl sm:text-5xl text-brand-ink leading-tight">
                                    {s.title}
                                </h2>
                                <p className="mt-5 text-brand-ink2 text-lg leading-relaxed">{s.long}</p>
                                <p className="mt-3 text-brand-ink2 leading-relaxed">{s.short}</p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        to="/contact"
                                        data-testid={`services-enquire-${s.slug}`}
                                        className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-7 py-3.5 font-medium"
                                    >
                                        Enquire Today <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href={waLink(`Hi! I'd like to know more about ${s.title}.`)}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`services-whatsapp-${s.slug}`}
                                        className="inline-flex items-center gap-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-full px-7 py-3.5 font-medium transition-colors"
                                    >
                                        <MessageCircle className="w-4 h-4" /> WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </section>
        </PageShell>
    );
}
