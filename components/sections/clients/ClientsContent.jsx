"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star, ArrowRight, ChevronLeft, ChevronRight,
    Building2, Briefcase, Quote, MapPin
} from "lucide-react";
import Container from "@/components/common/Container";
import { viewport } from "@/lib/animations";

const ease = [0.16, 1, 0.3, 1];

// ── Government Clients ─────────────────────────────────────────────────────
const GOVT_CLIENTS = [
    {
        short: "KRIDL",
        name: "Karnataka Rural Infrastructure Development Ltd",
        sector: "Rural Infrastructure",
        img: "/images/clients/KRIDL.png",
        // photo: "/images/clients/people/kridl-officer.jpg", // ← add tomorrow
    },
    {
        short: "KSPHIDC",
        name: "Karnataka State Police Housing Corporation",
        sector: "Police Housing",
        img: "/images/clients/KSPHIDC.png",
    },
    {
        short: "KRDCL",
        name: "Karnataka Road Development Corporation",
        sector: "Road Development",
        img: "/images/clients/KRDCL.png",
    },
    {
        short: "KHB",
        name: "Karnataka Housing Board",
        sector: "Housing & Urban Dev.",
        img: "/images/clients/KHB.png",
    },
    {
        short: "KREIS",
        name: "Karnataka Residential Educational Institutions Society",
        sector: "Education Infrastructure",
        img: "/images/clients/KREIS.png",
    },
    {
        short: "BWSSB",
        name: "Bengaluru Water Supply & Sewerage Board",
        sector: "Water Infrastructure",
        img: "/images/clients/BWSSB.png",
    },
];

// ── Private Clients ────────────────────────────────────────────────────────
const PRIVATE_CLIENTS = [
    { name: "Shankaranarayana Construction", tag: "Irrigation Projects" },
    { name: "GMR Group", tag: "Goa International Airport" },
    { name: "PLR Projects Pvt Ltd", tag: "Infrastructure" },
    { name: "Ashoka Build Con", tag: "Highway Construction" },
    { name: "KBR Infra", tag: "Civil Infrastructure" },
    { name: "BSR Infra", tag: "Building & Roads" },
    { name: "Star Infra", tag: "Infrastructure" },
    { name: "DS Max Builders", tag: "APTITCO Projects" },
    { name: "APTITCO", tag: "AP Township Development" },
];

// ── Testimonials (placeholder — swap with real quotes when received) ────────
const TESTIMONIALS = [
    {
        quote: "Amit Steel's knowledge of the right grade for each project saved us both time and cost. Rarely do you find a distributor who thinks like a partner.",
        name: "Sr. Project Officer",
        org: "KRIDL, Karnataka",
        rating: 5,
        // photo: "/images/clients/people/kridl-testimonial.jpg", // ← add tomorrow
    },
    {
        quote: "We have worked with many steel dealers over the years. Amit Steel stands apart — they deliver on time, every time, with zero quality compromise.",
        name: "Chief Engineer",
        org: "KRDCL, Karnataka",
        rating: 5,
    },
    {
        quote: "The professionalism and domain knowledge Amit Gupta brings to every interaction is exceptional. A trusted partner for all our construction steel needs.",
        name: "Project Director",
        org: "GMR Group",
        rating: 5,
    },
    {
        quote: "From specification to delivery, Amit Steel handles everything seamlessly. Their after-sales service is what keeps us coming back.",
        name: "Procurement Head",
        org: "Ashoka Build Con",
        rating: 5,
    },
    {
        quote: "We've procured thousands of tonnes of TMT through Amit Steel. The consistency in quality and competitive pricing is unmatched in Bengaluru.",
        name: "Senior Manager",
        org: "KHB, Karnataka",
        rating: 5,
    },
];

// ── Star Rating ────────────────────────────────────────────────────────────
function Stars({ count = 5 }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={13} className="fill-gold text-gold" />
            ))}
        </div>
    );
}

// ── Testimonial Carousel ───────────────────────────────────────────────────
function TestimonialCarousel() {
    const [active, setActive] = useState(0);
    const timer = useRef(null);

    const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);
    const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    useEffect(() => {
        timer.current = setInterval(next, 5000);
        return () => clearInterval(timer.current);
    }, []);

    const resetTimer = (fn) => {
        clearInterval(timer.current);
        fn();
        timer.current = setInterval(next, 5000);
    };

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease }}
                    className="relative border border-white/10 bg-white/5 p-8 md:p-10"
                >
                    {/* Gold corner accent */}
                    <div className="absolute left-0 top-0 h-12 w-12 overflow-hidden" aria-hidden="true">
                        <div className="absolute left-0 top-0 h-12 w-px bg-gold/60" />
                        <div className="absolute left-0 top-0 h-px w-12 bg-gold/60" />
                    </div>

                    <Quote size={28} className="text-gold/40" strokeWidth={1} />

                    <p className="mt-5 font-display text-lg italic leading-relaxed text-white/80 md:text-xl lg:text-2xl">
                        "{TESTIMONIALS[active].quote}"
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                        <div>
                            <Stars count={TESTIMONIALS[active].rating} />
                            <p className="mt-2 font-body text-sm font-semibold text-white">
                                {TESTIMONIALS[active].name}
                            </p>
                            <p className="font-body text-xs text-gold/70">
                                {TESTIMONIALS[active].org}
                            </p>
                        </div>

                        {/* Dot indicators */}
                        <div className="flex items-center gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => resetTimer(() => setActive(i))}
                                    aria-label={`Testimonial ${i + 1}`}
                                    className={[
                                        "h-1.5 rounded-full transition-all duration-300",
                                        i === active ? "w-6 bg-gold" : "w-1.5 bg-white/20",
                                    ].join(" ")}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <div className="mt-4 flex items-center justify-end gap-2">
                <button
                    onClick={() => resetTimer(prev)}
                    aria-label="Previous"
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition-all duration-200 hover:border-gold/50 hover:text-gold"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={() => resetTimer(next)}
                    aria-label="Next"
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition-all duration-200 hover:border-gold/50 hover:text-gold"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function ClientsContent() {
    return (
        <main className="min-h-screen bg-off-white">

            {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
            <div className="relative overflow-hidden bg-deep-navy pb-24 pt-36 md:pb-32 md:pt-44">
                <div
                    className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-[0.06]"
                    style={{ background: "radial-gradient(circle, #C9A961 0%, transparent 70%)" }}
                    aria-hidden="true"
                />
                <Container>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-gold/60"
                    >
                        Our Clients
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.07 }}
                        className="font-display font-bold leading-[1.04] text-white"
                        style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}
                    >
                        The names that<br />
                        <span className="italic text-gold">trusted us first.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.15 }}
                        className="mt-6 max-w-xl font-body text-base text-white/50 md:text-lg"
                    >
                        Government bodies. Airport builders. Infrastructure giants. All chose Amit Steel.
                    </motion.p>
                </Container>
            </div>

            {/* Gold rule */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" aria-hidden="true" />

            {/* ════════════════════════════════════
          TRUST NUMBERS
      ════════════════════════════════════ */}
            <div className="bg-white py-10 md:py-12">
                <Container>
                    <div className="grid grid-cols-2 gap-px border border-charcoal/8 bg-charcoal/8 sm:grid-cols-4">
                        {[
                            { num: "6", label: "Govt. Bodies" },
                            { num: "9+", label: "Private Builders" },
                            { num: "4500+", label: "MT Supplied" },
                            { num: "5★", label: "Client Satisfaction" },
                        ].map(({ num, label }) => (
                            <div key={label} className="flex flex-col items-center bg-white px-6 py-7 text-center">
                                <span
                                    className="font-display font-bold leading-none text-charcoal"
                                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}
                                >
                                    {num}
                                </span>
                                <span className="mt-2 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/40">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ════════════════════════════════════
          GOVERNMENT CLIENTS
      ════════════════════════════════════ */}
            <div className="bg-off-white py-16 md:py-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.6, ease }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 size={18} className="text-gold" strokeWidth={1.5} />
                            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                                Government · State Bodies
                            </p>
                        </div>
                        <h2
                            className="font-display font-bold leading-tight text-charcoal"
                            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                        >
                            Trusted by the state.<br />
                            <span className="italic text-gold">Built for the people.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {GOVT_CLIENTS.map((client, i) => (
                            <motion.div
                                key={client.short}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewport}
                                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                                className="group relative overflow-hidden border border-charcoal/10 bg-white transition-all duration-500 hover:border-deep-navy hover:shadow-[0_8px_40px_-12px_rgba(26,43,92,0.2)]"
                            >
                                {/* Project image — full width top */}
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={client.img}
                                        alt={client.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Dark scrim */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent" aria-hidden="true" />
                                    {/* Short code on image */}
                                    <div className="absolute bottom-4 left-5">
                                        <span className="font-display text-2xl font-bold text-gold">
                                            {client.short}
                                        </span>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="p-5">
                                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-gold/70">
                                        {client.sector}
                                    </p>
                                    <p className="mt-1.5 font-body text-sm leading-snug text-charcoal/70 transition-colors duration-500 group-hover:text-charcoal">
                                        {client.name}
                                    </p>
                                </div>

                                {/* Gold bottom border on hover */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ════════════════════════════════════
          PRIVATE CLIENTS
      ════════════════════════════════════ */}
            <div className="bg-soft-gray py-16 md:py-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.6, ease }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase size={18} className="text-gold" strokeWidth={1.5} />
                            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                                Private Sector · Builders & Developers
                            </p>
                        </div>
                        <h2
                            className="font-display font-bold leading-tight text-charcoal"
                            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                        >
                            India's best builders.<br />
                            <span className="italic text-gold">All choose us.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
                        {PRIVATE_CLIENTS.map((client, i) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewport}
                                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                                className="group flex flex-col bg-white px-6 py-6 transition-all duration-500 hover:bg-deep-navy"
                            >
                                {/* Initial badge */}
                                <div className="mb-4 flex h-10 w-10 items-center justify-center border border-charcoal/10 bg-soft-gray transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10">
                                    <span className="font-display text-base font-bold text-charcoal/40 transition-colors duration-500 group-hover:text-gold">
                                        {client.name.charAt(0)}
                                    </span>
                                </div>
                                <p className="font-display text-base font-bold leading-tight text-charcoal transition-colors duration-500 group-hover:text-white md:text-lg">
                                    {client.name}
                                </p>
                                <p className="mt-1.5 font-body text-xs font-medium uppercase tracking-wider text-gold/70">
                                    {client.tag}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ════════════════════════════════════
          TESTIMONIALS + GOOGLE RATING
      ════════════════════════════════════ */}
            <div className="bg-deep-navy py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

                        {/* Left — section label + Google rating placeholder */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={viewport}
                                transition={{ duration: 0.6, ease }}
                            >
                                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/60">
                                    What Clients Say
                                </p>
                                <h2
                                    className="mt-4 font-display font-bold leading-tight text-white"
                                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
                                >
                                    Words from the<br />
                                    <span className="italic text-gold">people who built with us.</span>
                                </h2>

                                {/* Google Rating block */}
                                <div className="mt-10 border border-white/10 bg-white/5 p-6">
                                    <div className="flex items-center gap-3">
                                        {/* Google G icon */}
                                        <div className="flex h-10 w-10 items-center justify-center bg-white">
                                            <span className="font-body text-lg font-bold text-[#4285F4]">G</span>
                                        </div>
                                        <div>
                                            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                                                Google Rating
                                            </p>
                                            <div className="mt-0.5 flex items-center gap-2">
                                                <span className="font-display text-2xl font-bold text-white">4.8</span>
                                                <Stars count={5} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 font-body text-xs text-white/30">
                                        Based on Google Business reviews · Bengaluru
                                    </p>
                                    {/* placeholder note — remove when live */}
                                    <p className="mt-2 font-body text-[10px] italic text-white/20">
                                        Live rating syncs once Google Business listing is verified.
                                    </p>
                                </div>

                                {/* CTA to leave a review */}
                                <a
                                    href="https://g.page/r/amit-steel-cement/review"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold/60 transition-colors duration-200 hover:text-gold"
                                >
                                    Leave a Review <ArrowRight size={12} />
                                </a>
                            </motion.div>
                        </div>

                        {/* Right — testimonial carousel */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.65, ease, delay: 0.1 }}
                            className="lg:col-span-8"
                        >
                            <TestimonialCarousel />
                        </motion.div>

                    </div>
                </Container>
            </div>

            {/* ════════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════════ */}
            <div className="bg-off-white py-14 md:py-20">
                <Container>
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <h2
                                className="font-display font-bold leading-tight text-charcoal"
                                style={{ fontSize: "clamp(1.4rem, 3vw, 2.25rem)" }}
                            >
                                Want to join this list?
                            </h2>
                            <p className="mt-2 font-body text-sm text-charcoal/50">
                                Get a quote in 2 hours. No commitment.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex min-h-[48px] items-center gap-2.5 bg-gold px-7 py-3 font-body text-sm font-semibold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:bg-gold-glow"
                            >
                                Contact Us <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex min-h-[48px] items-center gap-2.5 border border-charcoal/15 px-7 py-3 font-body text-sm font-semibold uppercase tracking-widest text-charcoal/70 transition-all duration-300 hover:border-gold/40 hover:text-charcoal"
                            >
                                View Products
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

        </main>
    );
}