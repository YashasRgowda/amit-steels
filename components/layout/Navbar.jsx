"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/common/Container";
import { NAV_ITEMS } from "@/lib/constants";

// Premium easing — matches the site-wide curve
const premiumEase = [0.16, 1, 0.3, 1];

// Single unified fade-in for the entire navbar.
// No per-item stagger. No Y slide-down. The navbar feels "always there" —
// just gently materializing as the page settles. Linear / Vercel / Apple pattern.
const navEntrance = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: premiumEase, delay: 0.15 },
    },
};

// Mobile menu overlay animations (separate from entrance — these play on user interaction)
const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: "easeIn" },
    },
};

const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.06 + 0.1,
            duration: 0.3,
            ease: "easeOut",
        },
    }),
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                aria-label="Main navigation"
                initial="hidden"
                animate="visible"
                variants={navEntrance}
                className={[
                    "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-deep-navy/95 shadow-lg shadow-black/20 backdrop-blur-md"
                        : "bg-transparent",
                ].join(" ")}
            >
                <Container>
                    <div className="flex h-20 items-center justify-between md:h-24">

                        {/* ── Logo ── */}
                        <Link
                            href="/"
                            aria-label="Amit Steel and Cement — Home"
                            className="flex flex-col leading-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        >
                            {/* Full brand name — never drop STEEL */}
                            <span
                                className="font-display font-bold leading-none text-white"
                                style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
                            >
                                AMIT STEEL{" "}
                                <span className="text-gold">&amp;</span>{" "}
                                CEMENT
                            </span>
                            {/* Subtitle */}
                            <span className="mt-1 flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.2em] text-white/50 md:text-[11px]">
                                <span className="inline-block h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
                                Steel Distributor · Bengaluru
                            </span>
                        </Link>

                        {/* ── Desktop Nav Links ── */}
                        <div className="hidden items-center gap-1 md:flex" role="list">
                            {NAV_ITEMS.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <div key={item.href} role="listitem">
                                        <Link
                                            href={item.href}
                                            className={[
                                                "group relative px-3 py-2 font-body text-sm font-medium uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:px-4 lg:text-[13px]",
                                                isActive
                                                    ? "text-gold"
                                                    : "text-white/80 hover:text-gold",
                                            ].join(" ")}
                                        >
                                            {item.name}
                                            <span
                                                className={[
                                                    "absolute bottom-0 left-3 right-3 h-[2px] origin-left bg-gold transition-transform duration-300 ease-out",
                                                    isActive
                                                        ? "scale-x-100"
                                                        : "scale-x-0 group-hover:scale-x-100",
                                                ].join(" ")}
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        {/* ── Desktop CTA ── */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-[44px] items-center justify-center bg-gold px-5 py-2 font-body text-[13px] font-semibold uppercase tracking-widest text-deep-navy transition-colors duration-200 hover:bg-gold-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy lg:px-6"
                            >
                                Request a Quote
                            </Link>
                        </div>

                        {/* ── Hamburger (mobile only) ── */}
                        <button
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-menu"
                            className="flex min-h-[44px] min-w-[44px] items-center justify-center text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} aria-hidden="true" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} aria-hidden="true" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                    </div>
                </Container>
            </motion.nav>

            {/* ── Mobile Menu Overlay ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-menu"
                        role="dialog"
                        aria-label="Navigation menu"
                        aria-modal="true"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="fixed inset-0 z-40 flex flex-col bg-deep-navy md:hidden"
                    >
                        <div className="h-20" aria-hidden="true" />

                        <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
                            {NAV_ITEMS.map((item, i) => {
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.href}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        variants={mobileLinkVariants}
                                        className="w-full text-center"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={[
                                                "block py-3 font-display font-bold transition-colors duration-200 focus:outline-none focus-visible:text-gold",
                                                isActive ? "text-gold" : "text-white hover:text-gold",
                                            ].join(" ")}
                                            style={{ fontSize: "clamp(1.75rem, 8vw, 2.5rem)" }}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                custom={NAV_ITEMS.length + 1}
                                initial="hidden"
                                animate="visible"
                                variants={mobileLinkVariants}
                                className="mt-6 w-full"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex min-h-[52px] w-full items-center justify-center bg-gold font-body text-sm font-semibold uppercase tracking-widest text-deep-navy transition-colors duration-200 hover:bg-gold-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                                >
                                    Request a Quote
                                </Link>
                            </motion.div>
                        </nav>

                        <div className="px-6 pb-10 text-center">
                            <p className="font-body text-xs uppercase tracking-widest text-white/30">
                                Bengaluru, Karnataka · India
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}