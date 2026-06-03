"use client";

import { motion } from "framer-motion";

// Premium easing curve — matches the rest of the site
const premiumEase = [0.16, 1, 0.3, 1];

// Parent stagger — coordinates the entire hero entrance sequence.
// delayChildren waits for the navbar fade to begin first, then this unfolds.
const heroStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.3,
        },
    },
};

// Standard fade-up for text elements
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: premiumEase },
    },
};

// Gold divider draws in from CENTER (not from one side)
const dividerDraw = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.8, ease: premiumEase },
    },
};

// Final element gets an extra breathing pause — that "settling in" rhythm
const pulseBlock = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: premiumEase, delay: 0.3 },
    },
};

export default function HeroPlaceholder() {
    return (
        <section
            className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-deep-navy px-4 text-center sm:px-6 lg:px-8"
            aria-label="Coming soon placeholder"
        >
            {/* Navbar offset — pushes content down so it isn't hidden under the fixed nav */}
            <div className="pt-20 md:pt-24" aria-hidden="true" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={heroStagger}
                className="flex flex-col items-center py-16 md:py-24 lg:py-32"
            >
                {/* Eyebrow */}
                <motion.p
                    variants={fadeUp}
                    className="mb-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-gold/70 md:text-sm"
                >
                    Bengaluru, Karnataka
                </motion.p>

                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    className="font-display font-bold leading-tight tracking-tight text-white"
                    style={{ fontSize: "clamp(2rem, 8vw, 5.5rem)" }}
                >
                    Amit Steel &amp; Cement
                </motion.h1>

                {/* Gold divider — draws from center on reveal */}
                <motion.div
                    variants={dividerDraw}
                    className="mt-5 h-px w-16 bg-gold md:mt-6 md:w-32"
                    style={{ transformOrigin: "center" }}
                    aria-hidden="true"
                />

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="mt-5 font-body text-base text-off-white/80 md:mt-6 md:text-lg lg:text-xl"
                >
                    Premium Steel &amp; Cement Distribution
                </motion.p>




            </motion.div>
        </section>
    );
}