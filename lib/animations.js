// lib/animations.js
// Shared Framer Motion variants used across home sections.
// Custom premium easing — the same curve used by Apple, Linear, Vercel.

const premiumEase = [0.16, 1, 0.3, 1];

export const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: premiumEase },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

export const staggerFast = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05 },
    },
};

export const drawIn = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.8, ease: premiumEase },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: premiumEase },
    },
};

// Viewport defaults — start animating 80px before the element enters view
export const viewport = { once: true, margin: "-80px" };