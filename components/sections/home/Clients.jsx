"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Building2, Briefcase, ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { GOVERNMENT_CLIENTS, PRIVATE_CLIENTS } from "@/lib/constants";

const GOVT_IMAGES = {
    KRIDL: "/images/clients/KRIDL.png",
    KSPHIDC: "/images/clients/KSPHIDC.png",
    KRDCL: "/images/clients/KRDCL.png",
    KHB: "/images/clients/KHB.png",
    KREIS: "/images/clients/KREIS.png",
    BWSSB: "/images/clients/BWSSB.png",
};

const TABS = [
    { id: "government", label: "Government", icon: Building2, count: GOVERNMENT_CLIENTS.length },
    { id: "private", label: "Private", icon: Briefcase, count: PRIVATE_CLIENTS.length },
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
                        From statewide government infrastructure to landmark private
                        developments, we supply the materials behind projects that define
                        Karnataka.
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
                                className={[
                                    "relative inline-flex min-h-[44px] items-center gap-2.5 px-5 py-3 font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300 md:px-7 md:py-3.5 md:text-sm",
                                    isActive ? "text-deep-navy" : "text-charcoal/40 hover:text-charcoal/70",
                                ].join(" ")}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="clientTabIndicator"
                                        className="absolute inset-0 bg-gold"
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        aria-hidden="true"
                                    />
                                )}
                                <Icon size={14} className="relative z-10" aria-hidden="true" />
                                <span className="relative z-10">{tab.label}</span>
                                <span className={`relative z-10 text-[10px] ${isActive ? "text-deep-navy/60" : "text-charcoal/30"}`}>
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
                        className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3"
                    >
                        {list.map((client, i) => (
                            <motion.article
                                key={client.name}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                                className="group relative flex items-center gap-4 border border-charcoal/10 bg-white p-4 transition-all duration-500 hover:border-deep-navy hover:bg-deep-navy md:p-5"
                            >
                                {/* ── Left: image thumbnail (govt) or initial badge (private) ── */}
                                {active === "government" ? (
                                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm border border-charcoal/8 transition-colors duration-500 group-hover:border-white/10">
                                        <Image
                                            src={GOVT_IMAGES[client.short]}
                                            alt={client.name}
                                            fill
                                            sizes="56px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Gold tint overlay on hover */}
                                        <div
                                            className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/15"
                                            aria-hidden="true"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-charcoal/10 bg-soft-gray transition-colors duration-500 group-hover:border-white/10 group-hover:bg-white/10">
                                        <span className="font-display text-lg font-bold text-charcoal/30 transition-colors duration-500 group-hover:text-gold/80">
                                            {client.name.charAt(0)}
                                        </span>
                                    </div>
                                )}

                                {/* ── Right: text ── */}
                                <div className="min-w-0 flex-1">
                                    {active === "government" ? (
                                        <>
                                            {/* Abbreviation stays gold on both states */}
                                            <p className="font-display text-xl font-bold leading-none text-gold">
                                                {client.short}
                                            </p>
                                            {/* Full name — charcoal by default, white on hover */}
                                            <p className="mt-1.5 font-body text-xs leading-snug text-charcoal/60 transition-colors duration-500 group-hover:text-white/70">
                                                {client.name}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="font-display text-base font-bold leading-tight text-charcoal transition-colors duration-500 group-hover:text-white">
                                                {client.name}
                                            </p>
                                            {client.project && (
                                                <p className="mt-1 font-body text-[11px] uppercase tracking-wider text-gold/70 transition-colors duration-500 group-hover:text-gold">
                                                    {client.project}
                                                </p>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Arrow — appears on hover */}
                                <ArrowUpRight
                                    size={14}
                                    className="absolute right-4 top-4 text-transparent transition-all duration-300 group-hover:text-gold"
                                    aria-hidden="true"
                                />
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </Container>
        </section>
    );
}