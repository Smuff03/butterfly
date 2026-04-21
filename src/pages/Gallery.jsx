import { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { GALLERY } from "../lib/content";

const CATS = ["All", "Balcony Gardens", "Indoor Setups", "Kokedama", "Green Walls", "Before / After"];

export default function Gallery() {
    const [active, setActive] = useState("All");
    const filtered = useMemo(
        () => (active === "All" ? GALLERY : GALLERY.filter((g) => g.cat === active)),
        [active]
    );

    return (
        <PageShell title="Gallery">
            <section className="pt-16 pb-8 max-w-7xl mx-auto px-6 sm:px-10">
                <Reveal>
                    <p className="text-sm uppercase tracking-[0.25em] font-semibold text-brand-secondary mb-5">
                        Our work
                    </p>
                    <h1 className="font-heading text-5xl sm:text-6xl leading-[1.05] text-brand-ink max-w-3xl">
                        Gardens we've grown.
                    </h1>
                </Reveal>

                <div className="mt-10 flex flex-wrap gap-2">
                    {CATS.map((c) => (
                        <button
                            key={c}
                            onClick={() => setActive(c)}
                            data-testid={`gallery-filter-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            className={`rounded-full px-5 py-2 text-sm font-medium border transition-colors ${active === c
                                    ? "bg-brand-primary text-white border-brand-primary"
                                    : "bg-white text-brand-ink2 border-brand-primary/20 hover:border-brand-primary"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-24">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                    {filtered.map((g, i) => (
                        <Reveal key={`${g.url}-${i}`} delay={(i % 6) * 0.05}>
                            <div className="group aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl relative">
                                <img
                                    src={g.url}
                                    alt={g.cat}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.1s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    {g.cat}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
