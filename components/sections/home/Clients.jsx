"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";
import Container from "@/components/common/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { GOVERNMENT_CLIENTS, PRIVATE_CLIENTS } from "@/lib/constants";

const TABS = [
    {
        id: "government",
        label: "Government",
        icon: Building2,
        count: GOVERNMENT_CLIENTS.length,
    },
    {
        id: "private",
        label: "Private",
        icon: Briefcase,
        count: PRIVATE_CLIENTS.length,
    },
];

export default function Clients() {
    const [active, setActive] = useState("government");
    const list = active === "government" ? GOVERNMENT_CLIENTS : PRIVATE_CLIENTS;

    return (
        <section
            className="relative bg-off-white py-20 md:py-28 lg:py-32"
            aria-labelledby="clients-heading"
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
                        Trusted By
                    </motion.p>
                    <motion.h2
                        id="clients-heading"
                        variants={fadeUp}
                        className="font-display font-bold leading-[1.05] tracking-tight text-charcoal"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
                    >
                        Clients who <span className="italic text-gold">build</span> India.
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-2xl font-body text-base leading-relaxed text-charcoal/65 md:text-lg"
                    >
                        From statewide government infrastructure to landmark private developments, we supply the materials behind projects that define Karnataka.
                    </motion.p>
                </motion.div>

                {/* ── Tabs ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={fadeUp}
                    className="mt-12 inline-flex border border-charcoal/15"
                    role="tablist"
                    aria-label="Client categories"
                >
                    {TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = active === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActive(tab.id)}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`clients-${tab.id}-panel`}
                                className={`relative inline-flex min-h-[44px] items-center gap-2.5 px-5 py-3 font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300 md:px-7 md:py-3.5 md:text-sm ${isActive
                                    ? "text-deep-navy"
                                    : "text-charcoal/40 hover:text-charcoal/70"
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="clientTabIndicator"
                                        className="absolute inset-0 bg-gold"
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        aria-hidden="true"
                                    />
                                )}
                                <Icon size={14} className="relative z-10" aria-hidden="true" />
                                <span className="relative z-10">{tab.label}</span>
                                <span
                                    className={`relative z-10 text-[10px] ${isActive ? "text-deep-navy/60" : "text-charcoal/30"
                                        }`}
                                >
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* ── Client Grid ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        id={`clients-${active}-panel`}
                        role="tabpanel"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 grid grid-cols-1 gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 md:mt-12 lg:grid-cols-3"
                    >
                        {list.map((client) => (
                            <article
                                key={client.name}
                                className="group bg-off-white p-6 transition-colors duration-500 hover:bg-deep-navy md:p-8"
                            >
                                {active === "government" ? (
                                    <>
                                        <p className="font-display text-2xl font-bold leading-none text-gold md:text-3xl">
                                            {client.short}
                                        </p>
                                        <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/65 transition-colors duration-500 group-hover:text-off-white/70 md:text-base">
                                            {client.name}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="font-display text-lg font-bold leading-tight text-charcoal transition-colors duration-500 group-hover:text-off-white md:text-xl">
                                            {client.name}
                                        </p>
                                        {client.project && (
                                            <p className="mt-3 font-body text-xs uppercase tracking-wider text-charcoal/50 transition-colors duration-500 group-hover:text-gold md:text-sm">
                                                {client.project}
                                            </p>
                                        )}
                                    </>
                                )}
                            </article>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Container>
        </section>
    );
}