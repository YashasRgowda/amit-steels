"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, TrendingUp, Users, Building2, Shield, Star } from "lucide-react";
import Container from "@/components/common/Container";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { viewport } from "@/lib/animations";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

const CHAPTERS = [
    {
        era: "Pre-1947",
        title: "Chickpet Roots",
        body: "The Gupta family began trading in Bengaluru's historic Chickpet district — the city's oldest commercial heart — before Indian independence. Their integrity in commerce earned them alliances that went beyond business.",
        proof: "The former Chief Minister of Karnataka, Late R. Gundu Rao, was a partner of grandfather Siyaram Ghansyam Das.",
    },
    {
        era: "1960s",
        title: "A Wheat Empire",
        body: "Amit's father, Ishwar Chand, built a commanding business in wheat and wheat products. At peak, 120 canvassing agents worked under him — supplying Metro, Food World, ITC, Britannia, and Parle G across the region.",
        proof: "120 agents. Multiple national FMCG brands. A family operating at scale.",
    },
    {
        era: "2018",
        title: "Steel Enters the Picture",
        body: "Amit Gupta made his foray into iron and steel. Drawing on the family's deep commercial DNA, he spent 18 hours a day visiting every construction site and contractor in Bengaluru — advising on the right grade steel for each project.",
        proof: "Knowledge-first selling built a reputation that no competitor could replicate.",
    },
    {
        era: "2020",
        title: "JSW — A Milestone Partnership",
        body: "Amit acquired the dealership of JSW Neo Steels. Within one year he posted 100 MT in turnover against the organisation's target of 40 MT. The 2.5× overperformance was driven purely by hard work, market penetration, and customer trust.",
        proof: "JSW Neo Steels honoured Amit with the prestigious 'JSW Shoppe Connect' award for outstanding sales performance.",
    },
    {
        era: "Today",
        title: "Karnataka's Most Trusted Distributor",
        body: "Amit Steel & Cement now serves 6 state government bodies and the largest private contractors across Karnataka, South India, and Goa. With 4,500+ MT sold in a single financial year and a warehouse planned near Whitefield, the growth story is just beginning.",
        proof: "KRIDL · KSPHIDC · KRDCL · KHB · KREIS · BWSSB — all trust Amit Steel.",
    },
];

const VALUES = [
    { icon: Shield, title: "Integrity First", body: "Every piece of advice, every grade recommendation — always in the customer's best interest." },
    { icon: TrendingUp, title: "Results-Driven", body: "100 MT vs a 40 MT target. We don't just meet expectations — we shatter them." },
    { icon: Users, title: "Relationships > Deals", body: "Loyal customers are built on trust, not transactions. We play a long game." },
    { icon: Building2, title: "Domain Expertise", body: "Knowing which steel grade works for which project is what separates us from every other dealer." },
    { icon: Award, title: "Recognised Excellence", body: "JSW Shoppe Connect Honoree. A recognition earned, not bought." },
    { icon: Star, title: "Family Legacy", body: "Three generations of commercial discipline. That DNA runs through every decision we make." },
];

export default function AboutContent() {
    return (
        <main className="min-h-screen bg-off-white">

            {/* ── HERO ── */}
            <div className="relative overflow-hidden bg-deep-navy pb-24 pt-36 md:pb-32 md:pt-44">
                <div
                    className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full opacity-[0.06]"
                    style={{ background: "radial-gradient(circle, #C9A961 0%, transparent 70%)" }}
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full opacity-[0.04]"
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
                        About Us
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.07 }}
                        className="font-display font-bold leading-[1.04] text-white"
                        style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}
                    >
                        Three generations.<br />
                        <span className="italic text-gold">One unbroken promise.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.15 }}
                        className="mt-6 max-w-2xl font-body text-base leading-relaxed text-white/55 md:text-lg"
                    >
                        From pre-independence Chickpet to Karnataka's most ambitious infrastructure — 80 years of trust built through hard work, honesty, and showing up every single day.
                    </motion.p>
                </Container>
            </div>

            {/* Gold rule */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" aria-hidden="true" />

            {/* ── STATS BAND ── */}
            <div className="bg-white py-12 md:py-14">
                <Container>
                    <div className="grid grid-cols-2 gap-px border border-charcoal/8 bg-charcoal/8 sm:grid-cols-4">
                        {[
                            { value: 80, suffix: "+", label: "Years of Legacy" },
                            { value: 4500, suffix: "+ MT", label: "Steel Supplied" },
                            { value: 6, suffix: "", label: "Govt. Bodies" },
                            { value: 100, suffix: " MT", label: "JSW Target Beaten" },
                        ].map(({ value, suffix, label }) => (
                            <div key={label} className="flex flex-col items-center bg-white px-6 py-8 text-center">
                                <span
                                    className="font-display font-bold leading-none text-charcoal"
                                    style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
                                >
                                    <AnimatedCounter value={value} suffix={suffix} />
                                </span>
                                <span className="mt-2 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/40">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── FOUNDER BIO ── */}
            <div className="bg-soft-gray py-16 md:py-24">
                <Container>

                    {/* ── Section label ── */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.5, ease }}
                        className="mb-10 font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-gold md:mb-14"
                    >
                        The Founder
                    </motion.p>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">

                        {/* ── LEFT: Photo column ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.7, ease }}
                            className="lg:col-span-4"
                        >
                            {/* Photo card */}
                            <div className="relative w-full max-w-[320px]">
                                {/* Gold accent frame — offset top-left */}
                                <div
                                    className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-gold/50"
                                    aria-hidden="true"
                                />
                                {/* Gold accent frame — offset bottom-right */}
                                <div
                                    className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-gold/50"
                                    aria-hidden="true"
                                />

                                {/* Photo */}
                                <div className="relative aspect-[3/4] w-full overflow-hidden">
                                    <Image
                                        src="/images/founder/amit-gupta.jpg"
                                        alt="Amit Gupta — Director, Amit Steel & Cement"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                    {/* Subtle dark overlay at bottom */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-deep-navy/60 to-transparent"
                                        aria-hidden="true"
                                    />
                                    {/* Name overlay on photo bottom */}
                                    <div className="absolute bottom-5 left-5">
                                        <p className="font-display text-xl font-bold text-white">
                                            Amit Gupta
                                        </p>
                                        <p className="mt-0.5 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                                            Director
                                        </p>
                                    </div>
                                </div>

                                {/* JSW badge below photo */}
                                <div className="mt-4 inline-flex items-center gap-2 border border-gold/30 bg-white px-3 py-2">
                                    <Award size={12} className="text-gold" />
                                    <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/60">
                                        JSW Shoppe Connect Honoree
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── MIDDLE: Bio column ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.7, ease, delay: 0.1 }}
                            className="flex flex-col justify-center lg:col-span-4 lg:px-10 lg:border-x lg:border-charcoal/10"
                        >
                            <h2
                                className="font-display font-bold leading-tight text-charcoal"
                                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
                            >
                                Amit Gupta
                            </h2>
                            <p className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/40">
                                Director, Amit Steel & Cement
                            </p>

                            <div className="mt-8 flex flex-col gap-5">
                                {[
                                    "20+ years of impeccable business record — starting in the family wheat trade before pioneering into steel.",
                                    "In 2018, entered iron and steel with zero pedigree but maximum work ethic. 18 hours a day, every site, every contractor across Bengaluru.",
                                    "His edge: knows every steel grade better than anyone in the market. Advises customers on the right product — not the most expensive one.",
                                ].map((text, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={viewport}
                                        transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                                        className="font-body text-sm leading-relaxed text-charcoal/65 md:text-base"
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>

                            {/* Key stats — compact */}
                            <div className="mt-8 grid grid-cols-3 gap-px border border-charcoal/10 bg-charcoal/10">
                                {[
                                    { num: "20+", label: "Yrs Business" },
                                    { num: "18h", label: "Daily Grind" },
                                    { num: "2.5×", label: "JSW Target" },
                                ].map(({ num, label }) => (
                                    <div key={label} className="flex flex-col items-center bg-white px-3 py-4 text-center">
                                        <span className="font-display text-xl font-bold text-charcoal">{num}</span>
                                        <span className="mt-1 font-body text-[9px] font-semibold uppercase tracking-[0.18em] text-charcoal/40">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ── RIGHT: Quote column ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={viewport}
                            transition={{ duration: 0.7, ease, delay: 0.15 }}
                            className="flex flex-col justify-center lg:col-span-4 lg:pl-10"
                        >
                            {/* Quote card */}
                            <div className="relative bg-deep-navy p-8 md:p-10">
                                {/* Gold corner */}
                                <div className="absolute right-0 top-0 h-12 w-12 overflow-hidden" aria-hidden="true">
                                    <div className="absolute right-0 top-0 h-12 w-px bg-gold/50" />
                                    <div className="absolute right-0 top-0 h-px w-12 bg-gold/50" />
                                </div>

                                <div className="mb-5 h-px w-8 bg-gold" aria-hidden="true" />

                                <blockquote>
                                    <p className="font-display text-lg italic leading-relaxed text-white/80 md:text-xl">
                                        "I put in 18 hours a day visiting every construction site and contractor who held potential. That reputation built itself."
                                    </p>
                                    <footer className="mt-5 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                                        — Amit Gupta
                                    </footer>
                                </blockquote>
                            </div>

                            {/* Heritage note */}
                            <div className="mt-4 border-l-2 border-gold/40 pl-4">
                                <p className="font-body text-xs italic leading-relaxed text-charcoal/50">
                                    "The former Chief Minister of Karnataka, Late R. Gundu Rao, was a business partner of Amit's grandfather — Siyaram Ghansyam Das."
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </Container>
            </div>

            {/* ── TIMELINE ── */}
            <div className="bg-off-white py-16 md:py-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.6, ease }}
                        className="mb-12 md:mb-16"
                    >
                        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                            The Journey
                        </p>
                        <h2
                            className="mt-4 font-display font-bold leading-tight text-charcoal"
                            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                        >
                            From Chickpet<br />
                            <span className="italic text-gold">to every corner of Karnataka.</span>
                        </h2>
                    </motion.div>

                    <div className="relative flex flex-col gap-0">
                        <div
                            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/40 via-gold/20 to-transparent lg:block"
                            aria-hidden="true"
                        />
                        {CHAPTERS.map((ch, i) => (
                            <motion.div
                                key={ch.era}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewport}
                                transition={{ duration: 0.65, ease, delay: i * 0.08 }}
                                className={[
                                    "relative mb-8 last:mb-0 lg:mb-0 lg:grid lg:grid-cols-2 lg:gap-16",
                                    i % 2 !== 0 ? "lg:[direction:rtl]" : "",
                                ].join(" ")}
                            >
                                <div className="relative border border-charcoal/10 bg-white p-7 md:p-8 lg:mb-10 lg:[direction:ltr]">
                                    <div className="mb-4 inline-flex items-center gap-2">
                                        <div className="h-px w-6 bg-gold" aria-hidden="true" />
                                        <span className="font-display font-bold italic text-gold" style={{ fontSize: "1.3rem" }}>
                                            {ch.era}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-charcoal md:text-2xl">
                                        {ch.title}
                                    </h3>
                                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/60 md:text-base">
                                        {ch.body}
                                    </p>
                                    <div className="mt-5 border-l-2 border-gold/50 pl-4">
                                        <p className="font-body text-sm italic text-charcoal/55">{ch.proof}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 items-center justify-center lg:flex">
                                    <div className="h-3 w-3 rounded-full border-2 border-gold bg-off-white" />
                                </div>
                                <div className="hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* ── VALUES ── */}
            <div className="bg-deep-navy py-16 md:py-24">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewport}
                        transition={{ duration: 0.6, ease }}
                        className="mb-12 md:mb-16"
                    >
                        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/60">
                            What We Stand For
                        </p>
                        <h2
                            className="mt-4 font-display font-bold leading-tight text-white"
                            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
                        >
                            Our values. Our edge.
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {VALUES.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewport}
                                    transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                                    className="border border-white/8 bg-white/5 p-6 transition-all duration-500 hover:border-gold/30 hover:bg-white/8 md:p-7"
                                >
                                    <Icon size={22} className="text-gold/80" strokeWidth={1.4} />
                                    <h3 className="mt-5 font-display text-lg font-bold text-white md:text-xl">{v.title}</h3>
                                    <p className="mt-2 font-body text-sm leading-relaxed text-white/50">{v.body}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </Container>
            </div>

            {/* ── BOTTOM CTA ── */}
            <div className="bg-off-white py-16 md:py-20">
                <Container>
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <h2
                                className="font-display font-bold leading-tight text-charcoal"
                                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
                            >
                                Ready to work with us?
                            </h2>
                            <p className="mt-2 font-body text-base text-charcoal/50">Get a quote within 2 hours.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
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