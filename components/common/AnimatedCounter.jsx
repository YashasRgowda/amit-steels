"use client";

import { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    animate,
} from "framer-motion";

/**
 * Animates a number counting from 0 to `value` when the element scrolls into view.
 * Uses the same premium easing curve as the rest of the site.
 *
 * @param {number} value     - The target integer to count up to
 * @param {string} suffix    - Optional suffix appended after the number (e.g. "+")
 * @param {number} duration  - Animation duration in seconds (default 1.8)
 */
export default function AnimatedCounter({ value, suffix = "", duration = 1.8 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (!inView) return;
        const controls = animate(count, value, {
            duration,
            ease: [0.16, 1, 0.3, 1],
        });
        return controls.stop;
    }, [inView, value, count, duration]);

    return (
        <span ref={ref} className="inline-flex items-baseline tabular-nums">
            <motion.span>{rounded}</motion.span>
            {suffix && <span>{suffix}</span>}
        </span>
    );
}