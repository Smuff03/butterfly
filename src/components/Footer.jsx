import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { SITE, waLink } from "../lib/site";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="bg-brand-ink text-white/85 pt-20 pb-10 mt-20"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 grid md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-5">
                        <span className="w-10 h-10 rounded-full bg-brand-secondary grid place-items-center">
                            <Leaf className="w-5 h-5 text-brand-ink" />
                        </span>
                        <span className="font-heading text-2xl text-white">Butterfly Lawn</span>
                    </div>
                    <p className="max-w-md text-white/70 leading-relaxed">
                        Gardening, landscaping & Kokedama from the heart of Navi Mumbai. Led by
                        Neha Padwal (BSc Agriculture) — bringing nature closer, one home at a time.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-heading text-xl mb-4">Explore</h4>
                    <ul className="space-y-2 text-white/70">
                        <li><Link to="/about" className="hover:text-brand-secondary">About</Link></li>
                        <li><Link to="/services" className="hover:text-brand-secondary">Services</Link></li>
                        <li><Link to="/shop" className="hover:text-brand-secondary">Shop</Link></li>
                        <li><Link to="/gallery" className="hover:text-brand-secondary">Gallery</Link></li>
                        <li><Link to="/contact" className="hover:text-brand-secondary">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-heading text-xl mb-4">Reach us</h4>
                    <ul className="space-y-3 text-white/70 text-sm">
                        <li className="flex gap-3"><MapPin className="w-4 h-4 mt-1 text-brand-secondary" /><span>{SITE.address}</span></li>
                        <li className="flex gap-3 items-center"><Phone className="w-4 h-4 text-brand-secondary" /><a href={`tel:${SITE.phoneTel}`} className="hover:text-white">{SITE.phoneDisplay}</a></li>
                        <li className="flex gap-3 items-center"><Mail className="w-4 h-4 text-brand-secondary" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
                    </ul>
                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="footer-whatsapp-btn"
                        className="inline-block mt-5 bg-brand-whatsapp hover:brightness-110 text-white rounded-full px-5 py-2.5 text-sm font-medium"
                    >
                        WhatsApp Now
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/50">
                <p>© {new Date().getFullYear()} Butterfly Lawn & Landscape Enterprises. All rights reserved.</p>
                <p className="italic">“Bring nature closer to your life.”</p>
            </div>
        </footer>
    );
}
