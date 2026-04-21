import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { PRODUCTS } from "../lib/content";
import { SITE, waLink } from "../lib/site";
import { MessageCircle, X } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Shop() {
    const [openItem, setOpenItem] = useState(null);
    const [form, setForm] = useState({ name: "", phone: "", notes: "" });
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.phone.trim()) {
            toast.error("Please enter your name and phone number.");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${API}/enquiry`, {
                name: form.name,
                phone: form.phone,
                product: openItem.name,
                notes: form.notes || null,
            });
            toast.success(`Enquiry sent for ${openItem.name}. We'll call you soon.`);
            setForm({ name: "", phone: "", notes: "" });
            setOpenItem(null);
        } catch (err) {
            toast.error("Couldn't send enquiry. Please try WhatsApp instead.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <PageShell title="Shop">
            <Toaster richColors position="top-center" />
            <section className="pt-16 pb-10 max-w-7xl mx-auto px-6 sm:px-10">
                <Reveal>
                    <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-5">
                        Shop
                    </p>
                    <h1 className="font-heading text-5xl sm:text-6xl leading-[1.05] text-brand-ink max-w-3xl">
                        Plants, pots & <em className="text-brand-primary not-italic">Kokedama</em>.
                    </h1>
                    <p className="mt-5 text-brand-ink2 text-lg max-w-2xl">
                        Handpicked from our own nursery. Enquire to buy — we'll confirm stock, pricing and delivery personally.
                    </p>
                </Reveal>
            </section>

            <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {PRODUCTS.map((p, i) => (
                    <Reveal key={p.name} delay={i * 0.05}>
                        <div
                            data-testid={`product-card-${i}`}
                            className="group bg-white rounded-3xl border border-brand-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img src={p.image} alt={p.name} loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                {p.tag && (
                                    <span className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                                        {p.tag}
                                    </span>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="font-heading text-2xl text-brand-ink">{p.name}</h3>
                                <p className="text-brand-ink2 mt-1">{p.price}</p>
                                <div className="flex gap-2 mt-5">
                                    <button
                                        onClick={() => setOpenItem(p)}
                                        data-testid={`enquire-btn-${i}`}
                                        className="flex-1 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full py-3 font-medium text-sm"
                                    >
                                        Enquire to Buy
                                    </button>
                                    <a
                                        href={waLink(`Hi! I'd like to order: ${p.name}`)}
                                        target="_blank"
                                        rel="noreferrer"
                                        data-testid={`product-whatsapp-${i}`}
                                        className="w-12 grid place-items-center rounded-full bg-brand-whatsapp text-white"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </section>

            {/* Enquiry Modal */}
            {openItem && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm grid place-items-center p-4"
                    onClick={() => setOpenItem(null)}>
                    <div
                        data-testid="enquiry-modal"
                        className="bg-white rounded-3xl w-full max-w-md p-7 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpenItem(null)}
                            className="absolute top-4 right-4 text-brand-ink2 hover:text-brand-primary"
                            aria-label="Close"
                            data-testid="enquiry-modal-close"
                        ><X className="w-5 h-5" /></button>
                        <h3 className="font-heading text-3xl text-brand-ink">Enquire — {openItem.name}</h3>
                        <p className="text-brand-ink2 mt-2 text-sm">{openItem.price}. We'll call you within a day.</p>
                        <form onSubmit={submit} className="mt-6 space-y-4">
                            <input
                                data-testid="enquiry-name-input"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                placeholder="Your name"
                                className="w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none"
                                required
                            />
                            <input
                                data-testid="enquiry-phone-input"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                placeholder="Phone number"
                                className="w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none"
                                required
                            />
                            <textarea
                                data-testid="enquiry-notes-input"
                                value={form.notes}
                                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                                placeholder="Notes (optional) — quantity, delivery area, etc."
                                rows={3}
                                className="w-full border border-brand-primary/20 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-brand-primary/40 focus:outline-none resize-none"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                data-testid="enquiry-submit-btn"
                                className="w-full bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full py-3.5 font-medium disabled:opacity-60"
                            >
                                {loading ? "Sending…" : "Send Enquiry"}
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-brand-ink2/80 text-center">
                            Or directly WhatsApp us at <span className="font-medium">{SITE.phoneDisplay}</span>
                        </p>
                    </div>
                </div>
            )}
        </PageShell>
    );
}
