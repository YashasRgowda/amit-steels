"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Hammer,
    Layers,
    CircleDot,
    Building2,
    Package,
} from "lucide-react";
import Container from "@/components/common/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { PRODUCTS } from "@/lib/constants";

// Map product slug to its representative icon
const ICON_MAP = {
    "tmt-bars": Hammer,
    "ms-steel": Layers,
    "steel-tubes": CircleDot,
    "structural-steel": Building2,
    cement: Package,
};

export default function Products() {
    return (
        <section
            id="products"
            className="relative bg-soft-gray py-20 md:py-28 lg:py-32"
            aria-labelledby="products-heading"
        >
            <Container>
                {/* ── Header ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={stagger}
                    className="max-w-3xl"
                >
                    <motion.p
                        variants={fadeUp}
                        className="mb-6 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold md:text-sm"
                    >
                        What We Distribute
                    </motion.p>
                    <motion.h2
                        id="products-heading"
                        variants={fadeUp}
                        className="font-display font-bold leading-[1.05] tracking-tight text-charcoal"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                    >
                        Materials that <span className="italic text-gold">shape</span> infrastructure.
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal/65 md:text-lg"
                    >
                        From thermo-mechanically treated bars to structural profiles and premium cement — we supply the materials behind Karnataka's most ambitious builds.
                    </motion.p>
                </motion.div>

                {/* ── Product Grid ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={stagger}
                    className="mt-12 grid grid-cols-1 gap-px border border-charcoal/10 bg-charcoal/10 md:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3"
                >
                    {PRODUCTS.map((product, i) => {
                        const Icon = ICON_MAP[product.slug] || Layers;
                        // First card (TMT) spans 2 cols on tablet for visual hierarchy
                        const isFeatured = i === 0;
                        return (
                            <motion.article
                                key={product.slug}
                                variants={fadeUp}
                                className={`group relative cursor-default overflow-hidden bg-off-white p-8 transition-colors duration-500 hover:bg-deep-navy md:p-10 lg:p-12 ${isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                                    }`}
                            >
                                {/* Animated gold corner bracket — top right */}
                                <div
                                    className="pointer-events-none absolute right-0 top-0 h-12 w-12 overflow-hidden"
                                    aria-hidden="true"
                                >
                                    <div className="absolute right-0 top-0 h-0 w-px bg-gold transition-all duration-500 group-hover:h-12" />
                                    <div className="absolute right-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
                                </div>

                                <Icon
                                    size={28}
                                    className="text-gold/80 transition-colors duration-500 group-hover:text-gold"
                                    strokeWidth={1.4}
                                    aria-hidden="true"
                                />

                                <h3 className="mt-6 font-display text-xl font-bold leading-tight text-charcoal transition-colors duration-500 group-hover:text-off-white md:text-2xl lg:text-3xl">
                                    {product.category}
                                </h3>

                                <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/60 transition-colors duration-500 group-hover:text-off-white/70 md:text-base">
                                    {product.description}
                                </p>

                                {/* Brand chips */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {product.brands.map((brand) => (
                                        <span
                                            key={brand}
                                            className="inline-flex items-center border border-charcoal/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-charcoal/55 transition-colors duration-500 group-hover:border-gold/40 group-hover:text-gold md:text-xs"
                                        >
                                            {brand}
                                        </span>
                                    ))}
                                </div>

                                {/* Reveal-in "Inquire" link on hover */}
                                <div className="mt-8 inline-flex -translate-x-2 items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-gold">
                                    <span>Inquire</span>
                                    <ArrowUpRight size={14} aria-hidden="true" />
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}