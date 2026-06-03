"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Sparkles,
    Handshake,
    Hammer,
    Award,
    ArrowRight,
} from "lucide-react";
import Container from "@/components/common/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";

/**
 * Four chapters in the Gupta family commercial lineage.
 * Each chapter is scannable in 5 seconds — era, label, single line of context.
 * Together they tell a 90-year story of trust without forcing the visitor to read paragraphs.
 */
const CHAPTERS = [
    {
        era: "1940s",
        label: "Chickpet Origins",
        context:
            "In pre-independence Bengaluru, the Gupta family begins trading from the city's historic commercial heart.",
        icon: Sparkles,
    },
    {
        era: "Heritage",
        label: "Beyond Commerce",
        context:
            "Family ties extended to a former Chief Minister of Karnataka — a legacy of trust beyond transaction.",
        icon: Handshake,
    },
    {
        era: "2018",
        label: "Steel & Cement",
        context:
            "Amit Gupta enters the iron and steel market. JSW dealership earned within two years.",
        icon: Hammer,
    },
    {
        era: "Today",
        label: "Karnataka's Choice",
        context:
            "JSW Shoppe Connect Honoree. Six government bodies. Karnataka, South India, and Goa.",
        icon: Award,
    },
];

// Beam-draw variant — draws the gold connecting line left-to-right across the timeline
const beamDraw = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
};

// Chapter dot scale-in — staggered across the beam
const dotPop = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

// Chapter card reveal — fade + lift
const chapterCard = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

// Parent timeline stagger — coordinates beam → dots → cards
const timelineStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 1.0, // wait for beam to mostly draw before chapters pop
        },
    },
};

export default function AboutPreview() {
    return (
        <section
            className="relative overflow-hidden bg-off-white py-20 md:py-28 lg:py-32"
            aria-labelledby="about-heading"
        >
            <Container>
                {/* ── Section header ── */}
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
                        Our Story · Three Generations
                    </motion.p>
                    <motion.h2
                        id="about-heading"
                        variants={fadeUp}
                        className="font-display font-bold leading-[1.05] tracking-tight text-charcoal"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                    >
                        A legacy built on <span className="italic text-gold">trust</span>.
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal/65 md:text-lg"
                    >
                        From pre-independence Chickpet to Karnataka's most discerning builders — disciplined commerce, passed down generation by generation.
                    </motion.p>
                </motion.div>

                {/* ── Timeline ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={timelineStagger}
                    className="relative mt-16 md:mt-20 lg:mt-24"
                >
                    {/* ─────────────────────────────────────────────────────── */}
                    {/* Desktop / Tablet layout (md+): horizontal timeline       */}
                    {/* ─────────────────────────────────────────────────────── */}
                    <div className="hidden md:block">
                        <div className="relative grid grid-cols-4 gap-6 lg:gap-8">
                            {/* Animated gold beam — connects all 4 chapter dots */}
                            <motion.div
                                variants={beamDraw}
                                className="absolute left-[12.5%] right-[12.5%] top-[26px] h-px origin-left bg-gradient-to-r from-gold/40 via-gold to-gold/40"
                                aria-hidden="true"
                            />

                            {CHAPTERS.map((chapter) => {
                                const Icon = chapter.icon;
                                return (
                                    <div key={chapter.label} className="flex flex-col items-center text-center">
                                        {/* Dot marker */}
                                        <motion.div
                                            variants={dotPop}
                                            className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/30 bg-off-white shadow-[0_0_0_4px_rgba(250,250,247,1)]"
                                            aria-hidden="true"
                                        >
                                            <div className="flex h-3 w-3 items-center justify-center rounded-full bg-gold">
                                                <div className="h-1 w-1 rounded-full bg-off-white" />
                                            </div>
                                        </motion.div>

                                        {/* Era marker — big italic Playfair, gold */}
                                        <motion.p
                                            variants={chapterCard}
                                            className="mt-6 font-display italic font-bold leading-none text-gold"
                                            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
                                        >
                                            {chapter.era}
                                        </motion.p>

                                        {/* Chapter card */}
                                        <motion.div variants={chapterCard} className="mt-6 px-2">
                                            <Icon
                                                size={22}
                                                className="mx-auto text-charcoal/30"
                                                strokeWidth={1.5}
                                                aria-hidden="true"
                                            />
                                            <h3 className="mt-4 font-display text-lg font-bold leading-tight text-charcoal lg:text-xl">
                                                {chapter.label}
                                            </h3>
                                            <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/60 lg:text-[15px]">
                                                {chapter.context}
                                            </p>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ─────────────────────────────────────────────────────── */}
                    {/* Mobile layout (<md): vertical timeline                   */}
                    {/* ─────────────────────────────────────────────────────── */}
                    <div className="relative md:hidden">
                        {/* Vertical animated beam */}
                        <motion.div
                            variants={beamDraw}
                            style={{ originY: 0, transformOrigin: "top" }}
                            className="absolute left-[25px] top-[26px] bottom-8 w-px bg-gradient-to-b from-gold/40 via-gold to-gold/40"
                            aria-hidden="true"
                        />

                        <div className="flex flex-col gap-10">
                            {CHAPTERS.map((chapter) => {
                                const Icon = chapter.icon;
                                return (
                                    <div key={chapter.label} className="relative flex gap-5">
                                        {/* Dot marker */}
                                        <motion.div
                                            variants={dotPop}
                                            className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-gold/30 bg-off-white shadow-[0_0_0_4px_rgba(250,250,247,1)]"
                                            aria-hidden="true"
                                        >
                                            <div className="flex h-3 w-3 items-center justify-center rounded-full bg-gold">
                                                <div className="h-1 w-1 rounded-full bg-off-white" />
                                            </div>
                                        </motion.div>

                                        {/* Chapter content */}
                                        <motion.div variants={chapterCard} className="flex-1 pb-2">
                                            <p
                                                className="font-display italic font-bold leading-none text-gold"
                                                style={{ fontSize: "clamp(1.5rem, 7vw, 2rem)" }}
                                            >
                                                {chapter.era}
                                            </p>
                                            <div className="mt-3 flex items-center gap-2">
                                                <Icon
                                                    size={16}
                                                    className="text-charcoal/30"
                                                    strokeWidth={1.5}
                                                    aria-hidden="true"
                                                />
                                                <h3 className="font-display text-base font-bold leading-tight text-charcoal">
                                                    {chapter.label}
                                                </h3>
                                            </div>
                                            <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60">
                                                {chapter.context}
                                            </p>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* ── CTA ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={fadeUp}
                    className="mt-14 flex justify-center md:mt-20"
                >
                    <Link
                        href="/about"
                        className="group inline-flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors duration-300 hover:text-gold"
                    >
                        <span className="relative">
                            Read our full story
                            <span
                                className="absolute -bottom-1 left-0 h-px w-full bg-charcoal/30 transition-colors duration-300 group-hover:bg-gold"
                                aria-hidden="true"
                            />
                        </span>
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}