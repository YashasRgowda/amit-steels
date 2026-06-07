"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { PRODUCTS } from "@/lib/constants";

// Map each product slug to its image in /public/images/products/
const PRODUCT_IMAGES = {
    "tmt-bars": "/images/products/tmt-bars.png",
    "ms-steel": "/images/products/ms-steel.png",
    "steel-tubes": "/images/products/steel-tubes.png",
    "structural-steel": "/images/products/structural-steel.png",
    "cement": "/images/products/cement.png",
    "binding-wire": "/images/products/binding-wire.png",
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
                        Materials that{" "}
                        <span className="italic text-gold">shape</span> infrastructure.
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal/65 md:text-lg"
                    >
                        From thermo-mechanically treated bars to structural profiles and
                        premium cement — we supply the materials behind Karnataka's most
                        ambitious builds.
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
                        const imgSrc = PRODUCT_IMAGES[product.slug];
                        // First card spans 2 cols on tablet for visual hierarchy
                        const isFeatured = i === 0;

                        return (
                            <motion.article
                                key={product.slug}
                                variants={fadeUp}
                                className={[
                                    "group relative flex flex-col overflow-hidden bg-off-white transition-colors duration-500 hover:bg-deep-navy",
                                    isFeatured ? "md:col-span-2 lg:col-span-1" : "",
                                ].join(" ")}
                            >
                                {/* ── Product image ── */}
                                <div className="relative h-52 w-full overflow-hidden md:h-56">
                                    <Image
                                        src={imgSrc}
                                        alt={product.category}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        priority={i === 0}
                                    />
                                    {/* Dark scrim — more visible on hover so text stays readable */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-deep-navy/10 to-transparent transition-opacity duration-500 group-hover:opacity-80"
                                        aria-hidden="true"
                                    />

                                    {/* Category label pinned to bottom-left of image */}
                                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 pt-12">
                                        <h3
                                            className="font-display font-bold leading-tight text-white drop-shadow-sm"
                                            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
                                        >
                                            {product.category}
                                        </h3>
                                    </div>
                                </div>

                                {/* ── Card body ── */}
                                <div className="flex flex-1 flex-col p-6 md:p-7">
                                    <p className="font-body text-sm leading-relaxed text-charcoal/60 transition-colors duration-500 group-hover:text-off-white/70 md:text-base">
                                        {product.description}
                                    </p>

                                    {/* Brand chips */}
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {product.brands.map((brand) => (
                                            <span
                                                key={brand}
                                                className="inline-flex items-center border border-charcoal/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-charcoal/55 transition-colors duration-500 group-hover:border-gold/40 group-hover:text-gold md:text-xs"
                                            >
                                                {brand}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Inquire link — slides in on hover */}
                                    <div className="mt-6 inline-flex -translate-x-2 items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-transparent transition-all duration-500 group-hover:translate-x-0 group-hover:text-gold">
                                        <span>Inquire</span>
                                        <ArrowUpRight size={14} aria-hidden="true" />
                                    </div>
                                </div>

                                {/* Animated gold corner bracket — top right */}
                                <div
                                    className="pointer-events-none absolute right-0 top-0 h-12 w-12 overflow-hidden"
                                    aria-hidden="true"
                                >
                                    <div className="absolute right-0 top-0 h-0 w-px bg-gold transition-all duration-500 group-hover:h-12" />
                                    <div className="absolute right-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}