"use client";

import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MessageCircle,
    MapPin,
    ArrowRight,
    Clock,
} from "lucide-react";
import Container from "@/components/common/Container";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";

export default function ContactCTA() {
    const whatsappHref = `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, "")}`;
    const phoneHref = `tel:${CONTACT.phones[0].replace(/\s/g, "")}`;
    const mailHref = `mailto:${CONTACT.email}`;

    return (
        <section
            className="relative overflow-hidden bg-deep-navy py-20 md:py-28 lg:py-32"
            aria-labelledby="contact-heading"
        >
            {/* Ambient gold radial accent */}
            <div
                className="pointer-events-none absolute"
                style={{
                    background:
                        "radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 60%)",
                    width: "80vw",
                    height: "80vw",
                    top: "10%",
                    right: "-20%",
                    filter: "blur(60px)",
                }}
                aria-hidden="true"
            />

            <Container className="relative">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* ── Left: Headline & intent ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        variants={stagger}
                        className="lg:col-span-7"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="mb-6 font-body text-xs font-medium uppercase tracking-[0.3em] text-gold md:text-sm"
                        >
                            Let's Talk Steel
                        </motion.p>

                        <motion.h2
                            id="contact-heading"
                            variants={fadeUp}
                            className="font-display font-bold leading-[1.05] tracking-tight text-off-white"
                            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
                        >
                            Ready to build<br />
                            something <span className="italic text-gold">lasting</span>?
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-lg font-body text-base leading-relaxed text-off-white/70 md:text-lg"
                        >
                            Whether it's a single tonne or a multi-crore government order, we respond within two business hours. Always.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex items-center gap-2 text-xs text-off-white/50 md:text-sm"
                        >
                            <Clock size={14} className="text-gold/70" aria-hidden="true" />
                            <span className="font-body uppercase tracking-widest">
                                Mon–Sat · 9:00 AM – 7:00 PM IST
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Contact cards ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        variants={stagger}
                        className="flex flex-col gap-3 lg:col-span-5"
                    >
                        {/* WhatsApp — primary gold CTA */}
                        <motion.a
                            variants={fadeUp}
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 bg-gold p-5 transition-colors duration-300 hover:bg-gold-glow md:p-6"
                        >
                            <div className="flex items-center gap-4">
                                <MessageCircle
                                    size={24}
                                    className="text-deep-navy"
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                                <div>
                                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-deep-navy/60">
                                        Fastest reply
                                    </p>
                                    <p className="mt-0.5 font-display text-lg font-bold text-deep-navy md:text-xl">
                                        Chat on WhatsApp
                                    </p>
                                </div>
                            </div>
                            <ArrowRight
                                size={20}
                                className="text-deep-navy transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </motion.a>

                        {/* Phone — outlined secondary */}
                        <motion.a
                            variants={fadeUp}
                            href={phoneHref}
                            className="group flex items-center justify-between gap-4 border border-off-white/15 p-5 transition-all duration-300 hover:border-gold/50 hover:bg-muted-navy/20 md:p-6"
                        >
                            <div className="flex items-center gap-4">
                                <Phone
                                    size={20}
                                    className="text-gold"
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                                <div>
                                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-off-white/50">
                                        Call us direct
                                    </p>
                                    <p className="mt-0.5 font-body text-base font-semibold text-off-white md:text-lg">
                                        {CONTACT.phones[0]}
                                    </p>
                                </div>
                            </div>
                            <ArrowRight
                                size={18}
                                className="text-off-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                                aria-hidden="true"
                            />
                        </motion.a>

                        {/* Email — outlined secondary */}
                        <motion.a
                            variants={fadeUp}
                            href={mailHref}
                            className="group flex items-center justify-between gap-4 border border-off-white/15 p-5 transition-all duration-300 hover:border-gold/50 hover:bg-muted-navy/20 md:p-6"
                        >
                            <div className="flex items-center gap-4">
                                <Mail
                                    size={20}
                                    className="text-gold"
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                                <div>
                                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-off-white/50">
                                        Email enquiry
                                    </p>
                                    <p className="mt-0.5 break-all font-body text-base font-semibold text-off-white md:text-lg">
                                        {CONTACT.email}
                                    </p>
                                </div>
                            </div>
                            <ArrowRight
                                size={18}
                                className="text-off-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                                aria-hidden="true"
                            />
                        </motion.a>

                        {/* Address — quiet info bar */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-2 flex items-start gap-3 p-5 md:p-6"
                        >
                            <MapPin
                                size={16}
                                className="mt-0.5 shrink-0 text-gold/60"
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                            <p className="font-body text-xs leading-relaxed text-off-white/40 md:text-sm">
                                {CONTACT.address}
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}