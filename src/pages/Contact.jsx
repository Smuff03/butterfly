import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { SITE, waLink, telLink } from "../lib/site";
import { SERVICES } from "../lib/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
            toast.error("Please fill name, phone and message.");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${API}/contact`, {
                name: form.name.trim(),
                email: form.email.trim() || null,
                phone: form.phone.trim(),
                service: form.service || null,
                message: form.message.trim(),
            });
            toast.success("Thanks! We'll reach out within a day.");
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
        } catch (err) {
            toast.error("Couldn't send. Please WhatsApp us instead.");
        } finally {
            setLoading(false);
        }
    };

    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    <iframe
        title="Butterfly Lawn location"
        src={mapSrc}
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
    />

    return (
        <PageShell title="Contact">
            <Toaster richColors position="top-center" />
            <section className="pt-16 pb-10 max-w-7xl mx-auto px-6 sm:px-10">
                <Reveal>
                    <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-5">
                        Let's talk
                    </p>
                    <h1 className="font-heading text-5xl sm:text-6xl leading-[1.05] text-brand-ink max-w-3xl">
                        Tell us about your <em className="text-brand-primary not-italic">space</em>.
                    </h1>
                    <p className="mt-5 text-brand-ink2 text-lg max-w-2xl">
                        A free consultation. No pressure. We'll reach out with honest advice tailored to you.
                    </p>
                </Reveal>
            </section>

            <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24 grid lg:grid-cols-5 gap-8">
                {/* FORM */}
                <Reveal className="lg:col-span-3">
                    <form
                        onSubmit={submit}
                        data-testid="contact-form"
                        className="bg-white border border-brand-primary/10 rounded-3xl p-7 sm:p-10 shadow-sm"
                    >
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="text-xs uppercase tracking-wider text-brand-ink2 font-semibold">Your name</label>
                                <input
                                    data-testid="contact-name-input"
                                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="mt-2 w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none"
                                    placeholder="Neha Sharma" required
                                />
                            </div>
                            <div>
                                <label className="text-xs uppercase tracking-wider text-brand-ink2 font-semibold">Phone</label>
                                <input
                                    data-testid="contact-phone-input"
                                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="mt-2 w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none"
                                    placeholder="+91 98765 43210" required
                                />
                            </div>
                            <div>
                                <label className="text-xs uppercase tracking-wider text-brand-ink2 font-semibold">Email (optional)</label>
                                <input
                                    data-testid="contact-email-input"
                                    type="email"
                                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="mt-2 w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="text-xs uppercase tracking-wider text-brand-ink2 font-semibold">Service of interest</label>
                                <select
                                    data-testid="contact-service-select"
                                    value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                                    className="mt-2 w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none bg-white"
                                >
                                    <option value="">Choose one (optional)</option>
                                    {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                                    <option value="Other">Something else</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="text-xs uppercase tracking-wider text-brand-ink2 font-semibold">Tell us about your space</label>
                            <textarea
                                data-testid="contact-message-input"
                                rows={5}
                                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="mt-2 w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none resize-none"
                                placeholder="I have a 6×4 balcony in Vashi and I'd love some low-maintenance green…"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            data-testid="contact-submit-btn"
                            className="mt-7 inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full px-8 py-4 font-medium disabled:opacity-60"
                        >
                            {loading ? "Sending…" : (<>Send Message <Send className="w-4 h-4" /></>)}
                        </button>
                    </form>
                </Reveal>

                {/* DETAILS */}
                <Reveal delay={0.1} className="lg:col-span-2">
                    <div className="bg-brand-primary text-white rounded-3xl p-8 sm:p-10">
                        <h3 className="font-heading text-3xl">Reach us directly</h3>
                        <ul className="mt-7 space-y-5">
                            <li className="flex gap-4">
                                <span className="w-10 h-10 shrink-0 rounded-full bg-white/10 grid place-items-center">
                                    <MapPin className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/60">Address</p>
                                    <p className="text-white/90 mt-1 leading-relaxed">{SITE.address}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-10 h-10 shrink-0 rounded-full bg-white/10 grid place-items-center">
                                    <Phone className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/60">Phone</p>
                                    <a href={telLink()} className="text-white/90 mt-1 block hover:text-brand-secondary" data-testid="contact-phone-link">
                                        {SITE.phoneDisplay}
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="w-10 h-10 shrink-0 rounded-full bg-white/10 grid place-items-center">
                                    <Mail className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/60">Email</p>
                                    <a href={`mailto:${SITE.email}`} className="text-white/90 mt-1 block hover:text-brand-secondary" data-testid="contact-email-link">
                                        {SITE.email}
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <a
                            href={waLink()}
                            target="_blank" rel="noreferrer"
                            data-testid="contact-whatsapp-btn"
                            className="mt-8 inline-flex items-center justify-center gap-2 w-full bg-brand-whatsapp hover:brightness-110 text-white rounded-full px-6 py-3.5 font-medium"
                        >
                            <MessageCircle className="w-5 h-5" /> WhatsApp Now
                        </a>
                    </div>

                    <div className="mt-6 rounded-3xl overflow-hidden border border-brand-primary/10 shadow-sm">
                        <iframe
                            title="Butterfly Lawn location"
                            src={mapSrc}
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            data-testid="contact-map-iframe"
                        />
                    </div>
                </Reveal>
            </section>
        </PageShell>
    );
}
