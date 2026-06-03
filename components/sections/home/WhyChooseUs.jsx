"use client";

import { motion } from "framer-motion";
import {
    Award,
    Building,
    Users,
    Truck,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import Container from "@/components/common/Container";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const REASONS = [
    {
        icon: Award,
        title: "JSW Shoppe Connect Honoree",
        description:
            "Recognized by India's largest steel producer for our distribution excellence and partnership consistency.",
        // Featured tile — spans 2 cols on tablet, 2x2 on desktop
        span: "md:col-span-2 lg:col-span-2 lg:row-span-2",
        feature: true,
    },
    {
        icon: Building,
        // Numeric prefix renders via AnimatedCounter; label is the rest of the title
        counter: { value: 6, suffix: "" },
        label: "Government Bodies",
        description:
            "Trusted by KRIDL, KSPHIDC, KRDCL, KHB, KREIS, and BWSSB for critical public infrastructure.",
    },
    {
        icon: Users,
        counter: { value: 20, suffix: "+" },
        label: "Years Legacy",
        description:
            "A family business with deep Bengaluru roots, now in its third generation of trusted commerce.",
    },
    {
        icon: Truck,
        counter: { value: 4500, suffix: "+" },
        label: "MT Supplied",
        description:
            "Reliable logistics across Karnataka — from urban skylines to remote government project sites.",
    },
    {
        icon: ShieldCheck,
        counter: { value: 5, suffix: "" },
        label: "Authorized Brands",
        description:
            "JSW Steel · Sunvik Steels · Shri Bajrang Power · A-One Ispat · Mony Steel & Ispat.",
        span: "md:col-span-2 lg:col-span-1",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            className="relative bg-deep-navy py-20 md:py-28 lg:py-32"
            aria-labelledby="why-heading"
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
                        Why Amit Steel
                    </motion.p>
                    <motion.h2
                        id="why-heading"
                        variants={fadeUp}
                        className="font-display font-bold leading-[1.05] tracking-tight text-off-white"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                    >
                        Built on <span className="italic text-gold">trust</span>.<br />
                        Backed by experience.
                    </motion.h2>
                </motion.div>

                {/* ── Bento Grid ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={stagger}
                    className="mt-12 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-2 md:gap-4 lg:mt-20 lg:grid-cols-3 lg:gap-5"
                >
                    {REASONS.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <motion.article
                                key={reason.label || reason.title}
                                variants={fadeUp}
                                className={`group relative border border-off-white/10 bg-gradient-to-br from-muted-navy/40 to-deep-navy p-8 transition-all duration-500 hover:border-gold/40 hover:from-muted-navy/60 md:p-10 ${reason.span || ""
                                    }`}
                            >
                                {/* Animated gold L-bracket — top right corner */}
                                <div
                                    className="pointer-events-none absolute right-0 top-0 h-12 w-12 overflow-hidden"
                                    aria-hidden="true"
                                >
                                    <div className="absolute right-0 top-0 h-0 w-px bg-gold transition-all duration-500 group-hover:h-12" />
                                    <div className="absolute right-0 top-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
                                </div>

                                <Icon
                                    size={reason.feature ? 36 : 28}
                                    className="text-gold/80 transition-colors duration-500 group-hover:text-gold"
                                    strokeWidth={1.4}
                                    aria-hidden="true"
                                />

                                {/* Title — either plain string OR animated counter + label */}
                                {reason.counter ? (
                                    <h3 className="mt-6 font-display text-xl font-bold leading-tight text-off-white md:text-2xl">
                                        <span className="text-gold">
                                            <AnimatedCounter
                                                value={reason.counter.value}
                                                suffix={reason.counter.suffix}
                                            />
                                        </span>{" "}
                                        {reason.label}
                                    </h3>
                                ) : (
                                    <h3
                                        className={`mt-6 font-display font-bold leading-tight text-off-white ${reason.feature
                                            ? "text-2xl md:text-3xl lg:text-4xl"
                                            : "text-xl md:text-2xl"
                                            }`}
                                    >
                                        {reason.title}
                                    </h3>
                                )}

                                <p
                                    className={`mt-3 font-body leading-relaxed text-off-white/60 ${reason.feature
                                        ? "max-w-md text-base md:text-lg"
                                        : "text-sm md:text-base"
                                        }`}
                                >
                                    {reason.description}
                                </p>

                                {reason.feature && (
                                    <div className="mt-8 inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-[0.25em] text-gold/70">
                                        <Sparkles size={12} aria-hidden="true" />
                                        <span>Featured Distinction</span>
                                    </div>
                                )}
                            </motion.article>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}