"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { fadeUp, viewport } from "@/lib/animations";

const ease = [0.16, 1, 0.3, 1];

const STATS = [
    { value: 80, suffix: "+", label: "Years of Legacy" },
    { value: 4500, suffix: "+", label: "MT Steel Supplied" },
    { value: 6, suffix: "", label: "Govt. Bodies Served" },
    { value: 100, suffix: "MT", label: "JSW Target Smashed" },
];

const MILESTONES = [
    { year: "1940s", line: "Chickpet, Bengaluru — trading roots before independence." },
    { year: "1960s", line: "120 agents. ITC, Britannia, Parle G. A wheat empire." },
    { year: "2018", line: "Entered steel. JSW dealership secured in 2 years." },
    { year: "2020", line: "100 MT vs 40 MT target. JSW Shoppe Connect Honoree." },
    { year: "Today", line: "6 govt. bodies. Karnataka, South India & Goa." },
];

export default function AboutPreview() {
    return (
        <section
            className="relative overflow-hidden bg-off-white py-20 md:py-24 lg:py-28"
            aria-labelledby="about-heading"
        >
            {/* Subtle gold grid texture top-right */}
            <div
                className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-[0.025]"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg,#C9A961 0,#C9A961 1px,transparent 1px,transparent 36px),repeating-linear-gradient(90deg,#C9A961 0,#C9A961 1px,transparent 1px,transparent 36px)",
                }}
            />

            <Container>
                {/* ── TOP: label + headline + subline ── */}
                <div className="max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.5, ease }}
                        className="font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-gold"
                    >
                        Our Story · Three Generations
                    </motion.p>

                    <motion.h2
                        id="about-heading"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.65, ease, delay: 0.07 }}
                        className="mt-4 font-display font-bold leading-[1.04] tracking-tight text-charcoal"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        80 years. 3 generations.{" "}
                        <span className="italic text-gold">Zero compromises.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.6, ease, delay: 0.14 }}
                        className="mt-4 font-body text-base leading-relaxed text-charcoal/55 md:text-lg"
                    >
                        Trust takes decades to build. Ours started before independence.
                    </motion.p>
                </div>

                {/* ── MIDDLE: stats row + milestone timeline ── */}
                <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:mt-14">

                    {/* Left — 4 stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.65, ease, delay: 0.1 }}
                        className="grid grid-cols-2 gap-px border border-charcoal/10 bg-charcoal/10"
                    >
                        {STATS.map(({ value, suffix, label }) => (
                            <div key={label} className="flex flex-col bg-white px-6 py-6 md:px-7 md:py-7">
                                <span
                                    className="font-display font-bold leading-none text-charcoal"
                                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}
                                >
                                    <AnimatedCounter value={value} suffix={suffix} />
                                </span>
                                <span className="mt-2 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/40">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right — vertical milestone timeline */}
                    <div className="flex flex-col justify-center">
                        {MILESTONES.map((m, i) => (
                            <motion.div
                                key={m.year}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={viewport}
                                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                                className="group relative flex items-start gap-4 pb-6 last:pb-0"
                            >
                                {/* Vertical connector line */}
                                {i < MILESTONES.length - 1 && (
                                    <div
                                        className="absolute left-[28px] top-7 w-px bg-gold/20"
                                        style={{ height: "calc(100% - 4px)" }}
                                        aria-hidden="true"
                                    />
                                )}

                                {/* Year badge */}
                                <div className="relative z-10 flex h-[56px] w-[56px] shrink-0 items-center justify-center border border-gold/30 bg-white">
                                    <span className="font-display text-[11px] font-bold italic text-gold">
                                        {m.year}
                                    </span>
                                </div>

                                {/* Line */}
                                <div className="flex-1 pt-3.5">
                                    <p className="font-body text-sm leading-snug text-charcoal/65 md:text-[15px]">
                                        {m.line}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── BOTTOM: founder quote + CTA ── */}
                <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-charcoal/8 pt-10 md:flex-row md:items-end lg:mt-14">

                    <motion.blockquote
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.6, ease }}
                        className="max-w-lg"
                    >
                        <div className="mb-3 h-px w-8 bg-gold" aria-hidden="true" />
                        <p className="font-display text-lg italic leading-relaxed text-charcoal/65 md:text-xl">
                            "18 hours a day, every site, every contractor. That reputation built itself."
                        </p>
                        <footer className="mt-3 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                            — Amit Gupta, Director
                        </footer>
                    </motion.blockquote>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewport}
                        transition={{ duration: 0.5, ease, delay: 0.15 }}
                        className="shrink-0"
                    >
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-3 border-b border-charcoal/20 pb-1 font-body text-sm font-semibold uppercase tracking-[0.2em] text-charcoal transition-all duration-300 hover:border-gold hover:text-gold"
                        >
                            Full Story
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                        </Link>
                    </motion.div>
                </div>

            </Container>
        </section>
    );
}