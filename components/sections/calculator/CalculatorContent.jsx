"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calculator, ArrowRight, Info, ChevronDown,
    CheckCircle, AlertCircle, Phone, MessageCircle
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import { CONTACT } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1];

// ─────────────────────────────────────────────────────────────────────────
// CALCULATION ENGINE — Based on IS 456:2000 + BIS Thumb Rules
// Sources: IS 456:2000, NoBroker civil engineering standards,
//          civiconcepts.com, steeloncall.com thumb rules
// ─────────────────────────────────────────────────────────────────────────

// Steel (kg/sqft) by building type + floor count
// IS 456:2000 based. Verified against multiple civil engineering sources.
const STEEL_KG_PER_SQFT = {
    residential: {
        1: 4.0,   // G+0 — single floor: slabs + columns + beams + footing
        2: 4.5,   // G+1 — additional load transfer
        3: 4.75,  // G+2
        4: 5.0,   // G+3
        5: 5.25,  // G+4
    },
    commercial: {
        1: 5.0,
        2: 5.5,
        3: 5.75,
        4: 6.0,
        5: 6.25,
    },
    industrial: {
        1: 5.5,
        2: 6.0,
        3: 6.5,
        4: 7.0,
        5: 7.5,
    },
};

// Cement (bags/sqft) by building type + floor count
// Verified: 0.4–0.5 bags/sqft residential (IS standard)
// Source: constructionestimatorindia.com, houseyog.com
const CEMENT_BAGS_PER_SQFT = {
    residential: {
        1: 0.40,
        2: 0.44,
        3: 0.47,
        4: 0.50,
        5: 0.52,
    },
    commercial: {
        1: 0.48,
        2: 0.52,
        3: 0.55,
        4: 0.58,
        5: 0.61,
    },
    industrial: {
        1: 0.55,
        2: 0.60,
        3: 0.65,
        4: 0.70,
        5: 0.75,
    },
};

// Soil type adjustments (multipliers)
const SOIL_FACTOR = {
    hard: 1.00, // Hard rock / firm soil
    medium: 1.10, // Medium soil — 10% more for deeper foundations
    soft: 1.20, // Soft / loose soil — 20% more
};

// Seismic zone adjustments
// Karnataka falls in Zone II-III. Higher zones need more steel.
const SEISMIC_FACTOR = {
    II: 1.00,
    III: 1.08,
    IV: 1.15,
    V: 1.22,
};

// Bengaluru is primarily Zone II-III
const ZONE_LABELS = {
    II: "Zone II — Low (Most of South Karnataka)",
    III: "Zone III — Moderate (Bengaluru Urban, North Karnataka)",
    IV: "Zone IV — High",
    V: "Zone V — Very High",
};

// Standard 10% wastage factor (IS recommendation)
const WASTAGE = 1.10;

// Amit Steel prices (₹ per unit) — update when Amit confirms
const PRICES = {
    steel_per_mt: 54500,   // ₹ per MT (1000 kg)
    cement_per_bag: 385,   // ₹ per 50kg bag
    market_steel_per_mt: 58000,
    market_cement_per_bag: 420,
};

function formatINR(n) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
}

function formatKg(n) {
    if (n >= 1000) return (n / 1000).toFixed(2) + " MT";
    return Math.round(n) + " kg";
}

// ─────────────────────────────────────────────────────────────────────────
// COMPONENT — Tooltip
// ─────────────────────────────────────────────────────────────────────────
function Tip({ text }) {
    const [show, setShow] = useState(false);
    return (
        <span className="relative inline-block">
            <button
                type="button"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
                className="ml-1.5 inline-flex"
                aria-label="Info"
            >
                <Info size={13} className="text-charcoal/30 hover:text-gold" />
            </button>
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-1/2 z-20 mb-2 w-52 -translate-x-1/2 bg-deep-navy px-3 py-2 text-center"
                    >
                        <p className="font-body text-[11px] leading-relaxed text-white/80">{text}</p>
                        <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-deep-navy" />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}

// ─────────────────────────────────────────────────────────────────────────
// COMPONENT — Select
// ─────────────────────────────────────────────────────────────────────────
function Select({ label, tip, value, onChange, options }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="flex items-center font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                {label}
                {tip && <Tip text={tip} />}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full appearance-none border border-charcoal/15 bg-white px-4 py-3 font-body text-sm text-charcoal focus:border-gold focus:outline-none"
                >
                    {options.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────
// COMPONENT — Number Input
// ─────────────────────────────────────────────────────────────────────────
function NumberInput({ label, tip, value, onChange, placeholder, unit }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="flex items-center font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                {label}
                {tip && <Tip text={tip} />}
            </label>
            <div className="flex items-center border border-charcoal/15 bg-white focus-within:border-gold">
                <input
                    type="number"
                    min="0"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent px-4 py-3 font-body text-sm text-charcoal focus:outline-none"
                />
                {unit && (
                    <span className="border-l border-charcoal/10 bg-soft-gray px-3 py-3 font-body text-xs text-charcoal/40">
                        {unit}
                    </span>
                )}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────
// RESULT ROW
// ─────────────────────────────────────────────────────────────────────────
function ResultRow({ label, value, sub, highlight }) {
    return (
        <div className={`flex items-center justify-between py-3 ${highlight ? "border-t-2 border-gold/30 mt-1 pt-4" : "border-t border-charcoal/8"}`}>
            <span className={`font-body text-sm ${highlight ? "font-bold text-charcoal" : "text-charcoal/60"}`}>
                {label}
            </span>
            <div className="text-right">
                <span className={`font-display font-bold ${highlight ? "text-xl text-gold" : "text-base text-charcoal"}`}>
                    {value}
                </span>
                {sub && <p className="font-body text-[10px] text-charcoal/35">{sub}</p>}
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────
export default function CalculatorContent() {
    // ── Inputs ──
    const [area, setArea] = useState("");
    const [floors, setFloors] = useState("1");
    const [buildType, setBuildType] = useState("residential");
    const [soilType, setSoilType] = useState("medium");
    const [zone, setZone] = useState("III");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    // ── Results ──
    const [results, setResults] = useState(null);
    const [error, setError] = useState("");

    const calculate = useCallback(() => {
        const sqft = parseFloat(area);
        if (!sqft || sqft <= 0) {
            setError("Please enter a valid built-up area.");
            setResults(null);
            return;
        }
        if (sqft > 500000) {
            setError("For large projects above 5 lakh sqft, please contact us directly.");
            setResults(null);
            return;
        }
        setError("");

        const fl = parseInt(floors);
        const flKey = Math.min(fl, 5); // cap at 5 for lookup

        // Base rates
        const steelBase = STEEL_KG_PER_SQFT[buildType][flKey];
        const cementBase = CEMENT_BAGS_PER_SQFT[buildType][flKey];

        // Apply soil + seismic adjustments
        const soilAdj = SOIL_FACTOR[soilType];
        const seismicAdj = SEISMIC_FACTOR[zone];

        // Total built-up area (each floor × area)
        const totalArea = sqft * fl;

        // Steel calculation (kg) with wastage
        const steelKg = totalArea * steelBase * soilAdj * seismicAdj * WASTAGE;
        const steelMT = steelKg / 1000;

        // Cement calculation (bags) with wastage
        const cementBags = totalArea * cementBase * soilAdj * WASTAGE;

        // Pricing
        const ourSteelCost = steelMT * PRICES.steel_per_mt;
        const ourCementCost = cementBags * PRICES.cement_per_bag;
        const ourTotal = ourSteelCost + ourCementCost;

        const mktSteelCost = steelMT * PRICES.market_steel_per_mt;
        const mktCementCost = cementBags * PRICES.market_cement_per_bag;
        const mktTotal = mktSteelCost + mktCementCost;

        const savings = mktTotal - ourTotal;

        setResults({
            totalArea,
            steelKg,
            steelMT,
            cementBags: Math.ceil(cementBags),
            ourSteelCost,
            ourCementCost,
            ourTotal,
            mktTotal,
            savings,
            floors: fl,
            buildType,
            soilType,
            zone,
            sqft,
        });
    }, [area, floors, buildType, soilType, zone]);

    function sendWhatsApp() {
        if (!results) return;
        const lines = [
            `🏗️ *STEEL & CEMENT CALCULATION*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            ``,
            `👤 *Name:* ${name || "Not provided"}`,
            `📞 *Phone:* ${phone || "Not provided"}`,
            ``,
            `━━━━━━━━━━━━━━━━━━━━`,
            `📐 *PROJECT DETAILS*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            `Built-up Area: ${results.sqft.toLocaleString("en-IN")} sq ft`,
            `No. of Floors: ${results.floors}`,
            `Total Built-up: ${results.totalArea.toLocaleString("en-IN")} sq ft`,
            `Building Type: ${results.buildType.charAt(0).toUpperCase() + results.buildType.slice(1)}`,
            `Soil Type: ${results.soilType.charAt(0).toUpperCase() + results.soilType.slice(1)}`,
            `Seismic Zone: Zone ${results.zone}`,
            ``,
            `━━━━━━━━━━━━━━━━━━━━`,
            `🔩 *MATERIAL REQUIREMENTS*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            `TMT Steel: ${results.steelMT.toFixed(2)} MT (${Math.round(results.steelKg).toLocaleString("en-IN")} kg)`,
            `Cement: ${results.cementBags.toLocaleString("en-IN")} bags (50kg each)`,
            ``,
            `━━━━━━━━━━━━━━━━━━━━`,
            `💰 *PRICE ESTIMATE*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            `Market Price: ~${formatINR(results.mktTotal)}`,
            `*Amit Steel Price: ${formatINR(results.ourTotal)}*`,
            `✅ *You Save: ${formatINR(results.savings)}*`,
            ``,
            `━━━━━━━━━━━━━━━━━━━━`,
            `_Calculated via amitsteel.co.in_`,
            `_Please confirm final quantities with our team._`,
        ];
        const msg = encodeURIComponent(lines.join("\n"));
        window.open(`https://wa.me/919880844526?text=${msg}`, "_blank");
    }

    return (
        <main className="min-h-screen bg-off-white">

            {/* ── HERO ── */}
            <div className="relative overflow-hidden bg-deep-navy pb-20 pt-36 md:pb-24 md:pt-44">
                <div
                    className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.06]"
                    style={{ background: "radial-gradient(circle, #C9A961 0%, transparent 70%)" }}
                    aria-hidden="true"
                />
                <Container size="narrow">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-gold/60"
                    >
                        Free Tool
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.07 }}
                        className="font-display font-bold leading-[1.04] text-white"
                        style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
                    >
                        Steel & Cement<br />
                        <span className="italic text-gold">Construction Calculator.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.15 }}
                        className="mt-5 max-w-xl font-body text-sm text-white/50 md:text-base"
                    >
                        Based on IS 456:2000 standards. Enter your project details — get accurate material quantities and price estimates instantly.
                    </motion.p>

                    {/* Standard badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease, delay: 0.3 }}
                        className="mt-6 flex flex-wrap gap-2"
                    >
                        {["IS 456:2000", "BIS Certified", "Seismic Adjusted", "Wastage Included"].map((b) => (
                            <span key={b} className="inline-flex items-center gap-1.5 border border-gold/20 bg-gold/8 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-gold/70">
                                <CheckCircle size={10} className="text-gold/60" />
                                {b}
                            </span>
                        ))}
                    </motion.div>
                </Container>
            </div>

            {/* Gold rule */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" aria-hidden="true" />

            <Container size="narrow" className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

                    {/* ── LEFT: Input form ── */}
                    <div className="lg:col-span-7">
                        <div className="border border-charcoal/10 bg-white p-6 md:p-8">

                            <h2 className="font-display text-xl font-bold text-charcoal md:text-2xl">
                                Project Details
                            </h2>
                            <p className="mt-1 font-body text-sm text-charcoal/45">
                                Fill in your project info for accurate results.
                            </p>

                            <div className="mt-8 flex flex-col gap-5">

                                {/* Area */}
                                <NumberInput
                                    label="Built-up Area (per floor)"
                                    tip="Total floor area of one level. E.g. for a 30×40 site, enter 1200 sq ft."
                                    value={area}
                                    onChange={setArea}
                                    placeholder="e.g. 1200"
                                    unit="sq ft"
                                />

                                {/* Floors */}
                                <Select
                                    label="Number of Floors"
                                    tip="Total floors including ground floor. G+1 = 2 floors."
                                    value={floors}
                                    onChange={setFloors}
                                    options={[
                                        { value: "1", label: "G (Ground floor only)" },
                                        { value: "2", label: "G+1 (2 floors)" },
                                        { value: "3", label: "G+2 (3 floors)" },
                                        { value: "4", label: "G+3 (4 floors)" },
                                        { value: "5", label: "G+4 (5 floors)" },
                                        { value: "6", label: "G+5 (6 floors)" },
                                    ]}
                                />

                                {/* Building type */}
                                <Select
                                    label="Building Type"
                                    tip="Residential needs less steel than commercial. Industrial has highest requirements."
                                    value={buildType}
                                    onChange={setBuildType}
                                    options={[
                                        { value: "residential", label: "Residential (House / Apartment)" },
                                        { value: "commercial", label: "Commercial (Office / Shop / Hotel)" },
                                        { value: "industrial", label: "Industrial (Warehouse / Factory)" },
                                    ]}
                                />

                                {/* Soil type */}
                                <Select
                                    label="Soil Type"
                                    tip="Soft or loose soil needs deeper foundations — more steel and cement. Hard rock needs the least."
                                    value={soilType}
                                    onChange={setSoilType}
                                    options={[
                                        { value: "hard", label: "Hard / Rock Soil" },
                                        { value: "medium", label: "Medium Soil (Most common in Bengaluru)" },
                                        { value: "soft", label: "Soft / Loose Soil" },
                                    ]}
                                />

                                {/* Seismic zone */}
                                <Select
                                    label="Seismic Zone"
                                    tip="Bengaluru falls in Zone II-III. Higher zones require more ductile steel reinforcement as per IS 1893."
                                    value={zone}
                                    onChange={setZone}
                                    options={Object.entries(ZONE_LABELS).map(([v, l]) => ({
                                        value: v, label: l,
                                    }))}
                                />

                            </div>

                            {/* Error */}
                            {error && (
                                <div className="mt-5 flex items-center gap-2 border border-red-200 bg-red-50 px-4 py-3">
                                    <AlertCircle size={15} className="text-red-400" />
                                    <p className="font-body text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            {/* Calculate button */}
                            <button
                                onClick={calculate}
                                className="mt-6 flex w-full items-center justify-center gap-2.5 bg-gold py-4 font-body text-sm font-semibold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:bg-gold-glow hover:shadow-[0_8px_24px_-4px_rgba(201,169,97,0.4)]"
                            >
                                <Calculator size={16} />
                                Calculate Now
                            </button>

                            {/* Standard note */}
                            <p className="mt-4 text-center font-body text-[10px] text-charcoal/30">
                                Calculations based on IS 456:2000 · 10% wastage included · Seismic zone per IS 1893
                            </p>
                        </div>
                    </div>

                    {/* ── RIGHT: Results ── */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-28">
                            <AnimatePresence mode="wait">
                                {!results ? (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center gap-4 border border-charcoal/10 bg-white px-6 py-16 text-center"
                                    >
                                        <div className="flex h-16 w-16 items-center justify-center border border-charcoal/10 bg-soft-gray">
                                            <Calculator size={24} className="text-charcoal/25" />
                                        </div>
                                        <p className="font-body text-sm font-semibold text-charcoal/40">
                                            Fill in project details
                                        </p>
                                        <p className="font-body text-xs text-charcoal/25">
                                            Your material estimates and price comparison will appear here
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="results"
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.45, ease }}
                                        className="flex flex-col gap-4"
                                    >
                                        {/* Material quantities */}
                                        <div className="border border-charcoal/10 bg-white p-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-display text-lg font-bold text-charcoal">
                                                    Material Required
                                                </h3>
                                                <span className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-gold/60">
                                                    incl. 10% wastage
                                                </span>
                                            </div>

                                            <div className="mt-5 grid grid-cols-2 gap-3">
                                                {/* Steel */}
                                                <div className="border border-charcoal/8 bg-soft-gray p-4 text-center">
                                                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/40">
                                                        TMT Steel
                                                    </p>
                                                    <p className="mt-2 font-display text-2xl font-bold text-charcoal">
                                                        {results.steelMT.toFixed(2)}
                                                    </p>
                                                    <p className="font-body text-xs text-charcoal/40">Metric Tonnes</p>
                                                    <p className="mt-1 font-body text-[10px] text-charcoal/30">
                                                        {Math.round(results.steelKg).toLocaleString("en-IN")} kg
                                                    </p>
                                                </div>

                                                {/* Cement */}
                                                <div className="border border-charcoal/8 bg-soft-gray p-4 text-center">
                                                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/40">
                                                        Cement
                                                    </p>
                                                    <p className="mt-2 font-display text-2xl font-bold text-charcoal">
                                                        {results.cementBags.toLocaleString("en-IN")}
                                                    </p>
                                                    <p className="font-body text-xs text-charcoal/40">Bags (50kg each)</p>
                                                    <p className="mt-1 font-body text-[10px] text-charcoal/30">
                                                        {(results.cementBags * 50 / 1000).toFixed(1)} MT
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Project summary */}
                                            <div className="mt-4 border-t border-charcoal/8 pt-4">
                                                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/35 mb-2">
                                                    Project Summary
                                                </p>
                                                {[
                                                    { l: "Total built-up area", v: results.totalArea.toLocaleString("en-IN") + " sq ft" },
                                                    { l: "Building type", v: results.buildType.charAt(0).toUpperCase() + results.buildType.slice(1) },
                                                    { l: "Seismic zone", v: "Zone " + results.zone },
                                                    { l: "Soil condition", v: results.soilType.charAt(0).toUpperCase() + results.soilType.slice(1) },
                                                ].map(({ l, v }) => (
                                                    <div key={l} className="flex justify-between py-1">
                                                        <span className="font-body text-xs text-charcoal/45">{l}</span>
                                                        <span className="font-body text-xs font-medium text-charcoal">{v}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Price comparison */}
                                        <div className="border border-charcoal/10 bg-white p-6">
                                            <h3 className="font-display text-lg font-bold text-charcoal">
                                                Price Estimate
                                            </h3>

                                            <div className="mt-4">
                                                <ResultRow
                                                    label="Steel — Market"
                                                    value={<span className="line-through text-charcoal/40 text-base font-body">{formatINR(results.mktTotal - results.mktTotal + (results.steelMT * PRICES.market_steel_per_mt))}</span>}
                                                />
                                                <ResultRow
                                                    label="Cement — Market"
                                                    value={<span className="line-through text-charcoal/40 text-base font-body">{formatINR(results.cementBags * PRICES.market_cement_per_bag)}</span>}
                                                />
                                                <ResultRow
                                                    label="Market Total"
                                                    value={<span className="line-through text-charcoal/50 text-lg">{formatINR(results.mktTotal)}</span>}
                                                />
                                                <ResultRow
                                                    label="Steel — Amit Price"
                                                    value={formatINR(results.ourSteelCost)}
                                                />
                                                <ResultRow
                                                    label="Cement — Amit Price"
                                                    value={formatINR(results.ourCementCost)}
                                                />
                                                <ResultRow
                                                    label="✓ Total — Amit Price"
                                                    value={formatINR(results.ourTotal)}
                                                    highlight
                                                />
                                                <div className="mt-3 flex items-center justify-between bg-gold/10 px-4 py-3 border border-gold/20">
                                                    <span className="font-body text-sm font-bold text-gold">You Save</span>
                                                    <span className="font-display text-xl font-bold text-gold">{formatINR(results.savings)}</span>
                                                </div>
                                                <p className="mt-2 font-body text-[10px] text-charcoal/30">
                                                    * Indicative prices. Final quote confirmed by our team.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Contact + WhatsApp */}
                                        <div className="border border-charcoal/10 bg-white p-5">
                                            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/40 mb-3">
                                                Get Exact Quote
                                            </p>
                                            <div className="flex flex-col gap-2 mb-4">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="border border-charcoal/15 bg-white px-4 py-2.5 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:border-gold focus:outline-none"
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="border border-charcoal/15 bg-white px-4 py-2.5 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:border-gold focus:outline-none"
                                                />
                                            </div>

                                            <button
                                                onClick={sendWhatsApp}
                                                className="flex w-full items-center justify-center gap-2 bg-gold py-3.5 font-body text-sm font-semibold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:bg-gold-glow"
                                            >
                                                <FaWhatsapp size={16} />
                                                Send to WhatsApp
                                            </button>

                                            <a
                                                href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                                                className="mt-2 flex w-full items-center justify-center gap-2 border border-charcoal/12 py-3 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/55 transition-colors hover:text-charcoal"
                                            >
                                                <Phone size={13} />
                                                Call Us Instead
                                            </a>
                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

                {/* ── HOW IT WORKS ── */}
                <div className="mt-14 border-t border-charcoal/8 pt-12 md:mt-18 md:pt-14">
                    <p className="mb-8 font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal/30">
                        How We Calculate
                    </p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "IS 456:2000",
                                body: "All steel percentages follow the Indian Standard code for Plain and Reinforced Concrete.",
                            },
                            {
                                title: "Seismic Adjustment",
                                body: "Per IS 1893, seismic zone multipliers are applied. Zone III (Bengaluru Urban) adds 8% more steel.",
                            },
                            {
                                title: "Soil Factor",
                                body: "Soft soil requires deeper foundations. Medium soil (Bengaluru) adds 10% to base quantities.",
                            },
                            {
                                title: "10% Wastage",
                                body: "BIS-recommended construction wastage of 10% is automatically included in all results.",
                            },
                        ].map((c) => (
                            <div key={c.title} className="border border-charcoal/8 bg-white p-5">
                                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                                    {c.title}
                                </p>
                                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/55">
                                    {c.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </main>
    );
}