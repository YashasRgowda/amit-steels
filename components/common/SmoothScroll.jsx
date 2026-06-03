"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Site-wide smooth scroll provider using Lenis.
 * Gives the page that premium inertia-based scrolling feel used by
 * Linear, Vercel, Apple product pages, etc.
 *
 * Respects prefers-reduced-motion automatically — disables on users
 * who've requested reduced motion at the OS level.
 */
export default function SmoothScroll({ children }) {
    useEffect(() => {
        // Honor the user's accessibility preference
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            duration: 1.15,
            // Premium easing: starts fast, gently settles — same curve as our motion variants
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            smoothWheel: true,
        });

        let rafId;
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return children;
}