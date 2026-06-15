"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, X, ArrowRight, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import { viewport } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1];

// ─── CATALOGUE ────────────────────────────────────────────────────────────────
export const CATALOGUE = [
    {
        category: "Bars & Rods",
        tagline: "The backbone of every structure.",
        products: [
            {
                id: "tmt-bars",
                slug: "tmt-bars",
                name: "TMT Bars",
                tagline: "High-strength · Earthquake resistant · Grade certified",
                img: "/images/products/steels/tmt-bars.png",
                unit: "per MT",
                brands: ["JSW Steel", "Sunvik Gold", "Magna"],
                useCase: "RCC columns, slabs, beams, foundations",
                hasTechSpecs: true,
            },
            {
                id: "ms-round-bars",
                slug: "ms-round-bars",
                name: "MS Round Bars",
                tagline: "Precision machined · Fabrication ready · Multiple grades",
                img: "/images/products/steels/ms-round-bars.png",
                unit: "per MT",
                brands: ["JSW Steel", "Shri Bajrang Power"],
                useCase: "Machining, fabrication, general engineering",
                hasTechSpecs: true,
            },
            {
                id: "ms-flat-bars",
                slug: "ms-flat-bars",
                name: "MS Flat Bars",
                tagline: "Versatile flat sections · Weldable · High machinability",
                img: "/images/products/steels/ms-flat-bars.png",
                unit: "per MT",
                brands: ["JSW Steel", "A-One Ispat"],
                useCase: "Gates, grills, support frames, brackets",
                hasTechSpecs: true,
            },
            {
                id: "binding-wire",
                slug: "binding-wire",
                name: "MS Binding Wire",
                tagline: "Construction grade · Black annealed · Flexible & strong",
                img: "/images/products/steels/ms-binding-wire.png",
                unit: "per coil",
                brands: ["JSW Steel", "Sunvik Gold"],
                useCase: "Tying TMT bars during RCC construction",
                hasTechSpecs: true,
            },
            {
                id: "gi-wire",
                slug: "gi-wire",
                name: "GI Wire",
                tagline: "Galvanised · Corrosion resistant · Industrial & agricultural",
                img: "/images/products/steels/gi-wire.png",
                unit: "per coil",
                brands: ["JSW Steel", "A-One Ispat"],
                useCase: "Fencing, agriculture, general binding, packaging",
                hasTechSpecs: true,
            },
        ],
    },
    {
        category: "Structural Steel",
        tagline: "The frame that holds Karnataka's skyline.",
        products: [
            {
                id: "ms-beams",
                slug: "ms-beams",
                name: "MS Beams (I & H)",
                tagline: "Universal beams · Wide flange · Structural grade",
                img: "/images/products/steels/ms-beams.png",
                unit: "per MT",
                brands: ["JSW Steel", "Shri Bajrang Power"],
                useCase: "Industrial sheds, mezzanine floors, bridges",
                hasTechSpecs: true,
            },
            {
                id: "ms-channels",
                slug: "ms-channels",
                name: "MS Channels",
                tagline: "C-sections · Parallel flange · Load bearing",
                img: "/images/products/steels/ms-channels.png",
                unit: "per MT",
                brands: ["JSW Steel", "A-One Ispat"],
                useCase: "Purlins, roof structures, support channels",
                hasTechSpecs: true,
            },
            {
                id: "ms-angles",
                slug: "ms-angles",
                name: "MS Angles",
                tagline: "Equal & unequal · L-sections · Structural framing",
                img: "/images/products/steels/ms-angles.png",
                unit: "per MT",
                brands: ["JSW Steel", "Shri Bajrang Power"],
                useCase: "Towers, trusses, frames, supports",
                hasTechSpecs: true,
            },
        ],
    },
    {
        category: "Pipes & Hollow Sections",
        tagline: "Precision formed. Structurally uncompromising.",
        products: [
            {
                id: "ms-pipes",
                slug: "ms-pipes",
                name: "MS Black & GI Pipes",
                tagline: "ERW welded · Black & galvanised · Water & structural",
                img: "/images/products/steels/MS-Black-GI-Pipes.png",
                unit: "per MT",
                brands: ["Mony Steel & Ispat", "A-One Ispat"],
                useCase: "Water supply, plumbing, scaffolding, structural",
                hasTechSpecs: true,
            },
            {
                id: "square-hollow",
                slug: "square-hollow",
                name: "Square & Rectangular Hollow Sections",
                tagline: "SHS · RHS · Cold formed · Precision welded",
                img: "/images/products/steels/Square-&-Rectangular-Hollow-Sections.png",
                unit: "per MT",
                brands: ["Mony Steel & Ispat", "A-One Ispat"],
                useCase: "Gates, railings, furniture frames, trusses",
                hasTechSpecs: true,
            },
        ],
    },
    {
        category: "Sheets & Plates",
        tagline: "Industrial strength. Surface to surface.",
        products: [
            {
                id: "hr-sheets",
                slug: "hr-sheets",
                name: "Hot Rolled Sheets & Plates",
                tagline: "HR coils · Heavy plates · Structural & fabrication grade",
                img: "/images/products/steels/Hot Rolled Sheets & Plates.png",
                unit: "per MT",
                brands: ["JSW Steel", "Shri Bajrang Power"],
                useCase: "Fabrication, construction shuttering, machinery",
                hasTechSpecs: true,
            },
            {
                id: "cr-sheets",
                slug: "cr-sheets",
                name: "Cold Rolled Sheets",
                tagline: "Smooth surface · Tight tolerance · Precision finish",
                img: "/images/products/steels/Cold Rolled Sheets.png",
                unit: "per MT",
                brands: ["JSW Steel"],
                useCase: "Automotive panels, appliances, precision fabrication",
                hasTechSpecs: true,
            },
            {
                id: "colour-roofing",
                slug: "colour-roofing",
                name: "Colour Roofing Sheets",
                tagline: "Pre-painted · Weather resistant · Long-span coverage",
                img: "/images/products/steels/Colour Roofing Sheets.png",
                unit: "per sheet",
                brands: ["JSW Steel", "Shri Bajrang Power"],
                useCase: "Industrial roofing, factory sheds, warehouses, commercial buildings",
                hasTechSpecs: true,
            },
            {
                id: "gi-corrugated",
                slug: "gi-corrugated",
                name: "Galvanised Corrugated Sheets",
                tagline: "Hot-dip galvanised · Rust proof · Lightweight roofing",
                img: "/images/products/steels/Galvanised Corrugated Sheets.png",
                unit: "per sheet",
                brands: ["JSW Steel"],
                useCase: "Agricultural sheds, site compounds, low-cost roofing",
                hasTechSpecs: true,
            },
        ],
    },
    {
        category: "Fencing & Wire Products",
        tagline: "Boundary solutions that last decades.",
        products: [
            {
                id: "gi-chain-link",
                slug: "gi-chain-link",
                name: "GI Chain Link Fence",
                tagline: "Diamond mesh · Galvanised · Perimeter security",
                img: "/images/products/steels/GI Chain Link Fence.png",
                unit: "per roll",
                brands: ["A-One Ispat", "JSW Steel"],
                useCase: "Site perimeter, residential boundary, sports courts, farms",
                hasTechSpecs: true,
            },
            {
                id: "barbed-wire",
                slug: "barbed-wire",
                name: "Barbed Fencing Wire",
                tagline: "High tensile · Double strand · GI coated",
                img: "/images/products/steels/Barbed Fencing Wire.png",
                unit: "per roll",
                brands: ["A-One Ispat"],
                useCase: "Agricultural fencing, security perimeters, boundary walls",
                hasTechSpecs: true,
            },
        ],
    },
    {
        category: "Cement",
        tagline: "Every bag backed by grade, every pour backed by trust.",
        products: [
            {
                id: "ramco-cement",
                slug: null,
                name: "Ramco Cement",
                tagline: "OPC 43 · OPC 53 · PPC · Trusted across South India",
                img: "/images/products/cements/ramco.png",
                unit: "per bag (50kg)",
                brands: ["Ramco"],
                useCase: "RCC structures, foundations, plastering, waterproofing",
                hasTechSpecs: false,
            },
            {
                id: "zuari-cement",
                slug: null,
                name: "Zuari Cement",
                tagline: "OPC 43 · OPC 53 · PPC · Consistent quality",
                img: "/images/products/cements/zuari.png",
                unit: "per bag (50kg)",
                brands: ["Zuari"],
                useCase: "RCC structures, foundations, plastering, columns",
                hasTechSpecs: false,
            },
            {
                id: "priya-cement",
                slug: null,
                name: "Priya Cement",
                tagline: "OPC 43 · OPC 53 · PPC · Popular in Karnataka",
                img: "/images/products/cements/priya.png",
                unit: "per bag (50kg)",
                brands: ["Priya Cement"],
                useCase: "Residential construction, slabs, beams, plastering",
                hasTechSpecs: false,
            },
            {
                id: "bharathi-cement",
                slug: null,
                name: "Bharathi Cement",
                tagline: "OPC 43 · OPC 53 · PPC · High early strength",
                img: "/images/products/cements/bharathi.png",
                unit: "per bag (50kg)",
                brands: ["Bharathi Cement"],
                useCase: "Foundations, RCC columns, roads, mass concrete",
                hasTechSpecs: false,
            },
            {
                id: "ultratech-cement",
                slug: null,
                name: "UltraTech Cement",
                tagline: "OPC 43 · OPC 53 · PPC · India's #1 cement brand",
                img: "/images/products/cements/ultratech.jpg",
                unit: "per bag (50kg)",
                brands: ["UltraTech"],
                useCase: "All construction — residential, commercial, infrastructure",
                hasTechSpecs: false,
            },

        ],
    },
];

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, cartItem, onAdd, onRemove, isCement = false }) {
    const inCart = cartItem && cartItem.qty > 0;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
            className={[
                "group relative flex flex-col overflow-hidden border bg-white transition-all duration-300",
                inCart
                    ? "border-gold/50 shadow-[0_4px_24px_-4px_rgba(201,169,97,0.2)]"
                    : "border-charcoal/10 hover:border-charcoal/20 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]",
            ].join(" ")}
        >
            {/* Image */}
            {isCement ? (
                /* Cement: full image visible with contain + white bg */
                <div className="relative w-full overflow-hidden bg-white" style={{ height: "220px" }}>
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* subtle bottom fade so name reads cleanly */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-deep-navy/70 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="font-display text-xl font-bold text-white leading-tight drop-shadow-sm">
                            {product.name}
                        </h3>
                        <p className="mt-0.5 font-body text-[11px] text-white/70 leading-snug">
                            {product.tagline}
                        </p>
                    </div>
                </div>
            ) : (
                /* Steel: cover crop as before */
                <div className="relative h-52 w-full overflow-hidden">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/15 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="font-display text-xl font-bold text-white leading-tight">
                            {product.name}
                        </h3>
                        <p className="mt-0.5 font-body text-[11px] text-white/55 leading-snug">
                            {product.tagline}
                        </p>
                    </div>
                </div>
            )}

            {/* Use case */}
            {product.useCase && (
                <div className="border-b border-charcoal/8 px-5 py-3">
                    <p className="font-body text-[10px] text-charcoal/45">
                        <span className="font-semibold uppercase tracking-wider text-charcoal/35">Used for · </span>
                        {product.useCase}
                    </p>
                </div>
            )}

            {/* Brands */}
            <div className="border-b border-charcoal/8 px-5 py-3 flex flex-wrap gap-1.5">
                {product.brands.map(b => (
                    <span key={b} className="border border-charcoal/10 px-2 py-0.5 font-body text-[9px] uppercase tracking-wider text-charcoal/45">
                        {b}
                    </span>
                ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-auto border-t border-charcoal/8 p-4 flex gap-2">

                {/* Know More — steel products only */}
                {product.hasTechSpecs && product.slug && (
                    <Link
                        href={`/products/${product.slug}`}
                        className="flex flex-1 items-center justify-center gap-1.5 border border-charcoal/20 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 hover:border-gold/50 hover:text-charcoal transition-all duration-300"
                    >
                        Know More <ArrowRight size={12} />
                    </Link>
                )}

                {/* Add / Remove from Enquiry */}
                {!inCart ? (
                    <button
                        onClick={() => onAdd(product)}
                        className={[
                            "flex items-center justify-center gap-2 bg-deep-navy py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gold hover:text-deep-navy",
                            product.hasTechSpecs && product.slug ? "flex-1" : "w-full",
                        ].join(" ")}
                    >
                        <Plus size={13} /> Add to Enquiry
                    </button>
                ) : (
                    <div className={[
                        "flex items-center gap-2",
                        product.hasTechSpecs && product.slug ? "flex-1" : "w-full",
                    ].join(" ")}>
                        <button
                            onClick={() => onRemove(product.id)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center border border-charcoal/15 hover:border-red-300 hover:text-red-400 transition-colors"
                        >
                            <Minus size={14} />
                        </button>
                        <div className="flex flex-1 items-center justify-center border border-gold/30 bg-gold/8 py-2.5">
                            <span className="font-body text-xs font-semibold text-gold">✓ Added</span>
                        </div>
                        <button
                            onClick={() => onAdd(product)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center border border-charcoal/15 hover:border-gold hover:text-gold transition-colors"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

// ─── Enquiry Sidebar ──────────────────────────────────────────────────────────
function EnquirySidebar({ cart, onRemove, onClear }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [sent, setSent] = useState(false);

    function buildWA() {
        const lines = [
            `🏗️ *PRODUCT ENQUIRY*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            ``,
            `👤 *Name:* ${name || "Not provided"}`,
            `📞 *Phone:* ${phone || "Not provided"}`,
            ``,
            `🛒 *ITEMS REQUESTED*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            ...cart.map((i, idx) => `${idx + 1}. *${i.name}*\n    Qty: ${i.qty} ${i.unit}`),
            ``,
            `_Please confirm pricing, availability and delivery._`,
            `_Sent via amitsteel.co.in_`,
        ];
        window.open(`https://wa.me/919880844526?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
        setSent(true);
        setTimeout(() => { setSent(false); onClear(); }, 3500);
    }

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
                <div className="flex h-14 w-14 items-center justify-center border border-charcoal/10 bg-soft-gray">
                    <MessageCircle size={22} className="text-charcoal/20" />
                </div>
                <p className="font-body text-sm font-semibold text-charcoal/35">Enquiry list is empty</p>
                <p className="font-body text-xs text-charcoal/25">Add products to build your enquiry</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {cart.map(item => (
                <div key={item.id} className="flex items-center gap-3 border border-charcoal/8 bg-white p-3">
                    <div className="min-w-0 flex-1">
                        <p className="font-body text-sm font-semibold text-charcoal">{item.name}</p>
                        <p className="font-body text-xs text-charcoal/40">{item.qty} {item.unit}</p>
                    </div>
                    <button
                        onClick={() => onRemove(item.id)}
                        className="flex h-7 w-7 shrink-0 items-center justify-center text-charcoal/20 hover:text-red-400 transition-colors"
                    >
                        <X size={13} />
                    </button>
                </div>
            ))}

            <div className="border border-charcoal/10 bg-soft-gray p-4">
                <p className="font-body text-xs text-charcoal/50 leading-relaxed">
                    Our team will confirm best pricing, availability and delivery timeline within 2 hours of receiving your enquiry.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/40">Your Details</p>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="border border-charcoal/15 bg-white px-4 py-2.5 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:border-gold focus:outline-none"
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="border border-charcoal/15 bg-white px-4 py-2.5 font-body text-sm text-charcoal placeholder:text-charcoal/30 focus:border-gold focus:outline-none"
                />
            </div>

            <button
                onClick={buildWA}
                disabled={sent}
                className={[
                    "flex w-full items-center justify-center gap-2.5 py-3.5 font-body text-sm font-semibold uppercase tracking-widest transition-all duration-300",
                    sent
                        ? "bg-green-500 text-white"
                        : "bg-gold text-deep-navy hover:bg-gold-glow hover:shadow-[0_8px_24px_-4px_rgba(201,169,97,0.4)]",
                ].join(" ")}
            >
                <FaWhatsapp size={16} />
                {sent ? "Sent! We'll call you." : "Send Enquiry on WhatsApp"}
            </button>

            <a
                href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                className="flex w-full items-center justify-center gap-2 border border-charcoal/15 py-3 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/55 hover:border-gold/40 hover:text-charcoal transition-all"
            >
                <Phone size={13} /> Or Call Us Directly
            </a>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProductsContent() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart(prev => {
            const ex = prev.find(i => i.id === product.id);
            if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
            return [...prev, { ...product, qty: 1 }];
        });
    }
    function removeFromCart(id) { setCart(prev => prev.filter(i => i.id !== id)); }
    function clearCart() { setCart([]); }

    const cartCount = cart.reduce((s, i) => s + i.qty, 0);
    const displayCatalogue = activeCategory
        ? CATALOGUE.filter(c => c.category === activeCategory)
        : CATALOGUE;

    return (
        <main className="min-h-screen bg-off-white">

            {/* ── HERO ── */}
            <div className="relative overflow-hidden bg-deep-navy pb-20 pt-36 md:pb-24 md:pt-44">
                <div
                    className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full opacity-[0.06]"
                    style={{ background: "radial-gradient(circle,#C9A961 0%,transparent 70%)" }}
                    aria-hidden="true"
                />
                <Container>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-gold/60"
                    >
                        Products
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.07 }}
                        className="font-display font-bold leading-[1.04] text-white"
                        style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
                    >
                        Build your enquiry.<br />
                        <span className="italic text-gold">We'll do the rest.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.15 }}
                        className="mt-5 max-w-xl font-body text-sm text-white/50 md:text-base"
                    >
                        Select what you need · Share your list · Our team calls back with the best price within 2 hours.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.25 }}
                        className="mt-10 flex flex-wrap items-center gap-6 md:gap-10"
                    >
                        {[
                            { step: "01", text: "Browse & add products" },
                            { step: "02", text: "Enter your details" },
                            { step: "03", text: "We call with the best price" },
                        ].map(({ step, text }, i) => (
                            <div key={step} className="flex items-center gap-3">
                                {i > 0 && <ArrowRight size={14} className="hidden text-gold/30 md:block" />}
                                <span className="font-display text-sm font-bold italic text-gold/60">{step}</span>
                                <span className="font-body text-sm text-white/55">{text}</span>
                            </div>
                        ))}
                    </motion.div>
                </Container>
            </div>

            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" aria-hidden="true" />

            {/* ── MAIN ── */}
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

                    {/* LEFT: Products */}
                    <div className="lg:col-span-8">

                        {/* Category tabs */}
                        <div className="mb-10 flex flex-wrap gap-2" role="tablist">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={[
                                    "px-4 py-2 font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300",
                                    activeCategory === null
                                        ? "bg-gold text-deep-navy"
                                        : "border border-charcoal/15 text-charcoal/50 hover:text-charcoal",
                                ].join(" ")}
                            >
                                All Products
                            </button>
                            {CATALOGUE.map(cat => (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveCategory(cat.category)}
                                    className={[
                                        "px-4 py-2 font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300",
                                        activeCategory === cat.category
                                            ? "bg-gold text-deep-navy"
                                            : "border border-charcoal/15 text-charcoal/50 hover:text-charcoal",
                                    ].join(" ")}
                                >
                                    {cat.category}
                                </button>
                            ))}
                        </div>

                        {/* Category sections */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory || "all"}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, ease }}
                            >
                                {displayCatalogue.map((cat, ci) => {
                                    const isCementCategory = cat.category === "Cement";
                                    return (
                                        <div key={cat.category} className={ci > 0 ? "mt-16" : ""}>
                                            <div className="mb-8 flex items-end justify-between border-b border-charcoal/10 pb-5">
                                                <div>
                                                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-1.5">
                                                        {cat.category}
                                                    </p>
                                                    <h2 className="font-display text-2xl font-bold text-charcoal md:text-3xl">
                                                        {cat.tagline}
                                                    </h2>
                                                </div>
                                                <span className="shrink-0 font-body text-[11px] text-charcoal/30 mb-1">
                                                    {cat.products.length} products
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                {cat.products.map(product => (
                                                    <ProductCard
                                                        key={product.id}
                                                        product={product}
                                                        cartItem={cart.find(i => i.id === product.id)}
                                                        onAdd={addToCart}
                                                        onRemove={removeFromCart}
                                                        isCement={isCementCategory}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>

                        {/* Not sure block */}
                        <div className="mt-14 flex flex-col items-start gap-4 border border-charcoal/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
                            <div>
                                <p className="font-display text-lg font-bold text-charcoal md:text-xl">Not sure what you need?</p>
                                <p className="mt-1 font-body text-sm text-charcoal/50">
                                    Tell us your project. Our team responds in 2 hours with the right recommendation.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex shrink-0 items-center gap-2 border border-charcoal/15 px-5 py-3 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/65 hover:border-gold/40 hover:text-charcoal transition-all duration-300"
                            >
                                Talk to Us <ArrowRight size={13} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Enquiry Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28">
                            <div className="flex items-center justify-between border border-b-0 border-charcoal/12 bg-deep-navy px-5 py-4">
                                <div className="flex items-center gap-2.5">
                                    <MessageCircle size={16} className="text-gold" strokeWidth={1.5} />
                                    <span className="font-body text-sm font-semibold uppercase tracking-widest text-white">My Enquiry</span>
                                </div>
                                {cartCount > 0 && (
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold font-body text-[10px] font-bold text-deep-navy">
                                            {cartCount}
                                        </span>
                                        <button
                                            onClick={clearCart}
                                            className="font-body text-[10px] text-white/30 hover:text-white/60 transition-colors"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="border border-charcoal/12 bg-soft-gray p-5">
                                <EnquirySidebar cart={cart} onRemove={removeFromCart} onClear={clearCart} />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </main>
    );
}