"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus, Minus, ShoppingList, ArrowRight,
    MessageCircle, Phone, ChevronDown, ChevronUp,
    Tag, Zap, Info, X
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import { viewport } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1];

// ── PRODUCT DATA ───────────────────────────────────────────────────────────
// Update images, specs, prices, brands when Amit sir provides them
const CATEGORIES = [
    {
        id: "steel",
        label: "Steel Products",
        products: [
            {
                id: "tmt-bars",
                name: "TMT Bars",
                tagline: "High-strength · Earthquake resistant",
                img: "/images/products/tmt-bars.png",
                unit: "per MT",
                marketPrice: 58000,
                ourPrice: 54500,
                specs: [
                    { label: "Grades", value: "Fe415 · Fe500 · Fe550 · Fe600" },
                    { label: "Sizes", value: "8mm · 10mm · 12mm · 16mm · 20mm · 25mm · 32mm" },
                    { label: "Standard", value: "IS 1786:2008" },
                    { label: "Min Order", value: "1 MT" },
                ],
                brands: ["JSW Steel", "Sunvik Gold", "Magna"],
            },
            {
                id: "ms-steel",
                name: "MS Steel",
                tagline: "Mild steel · Fabrication ready",
                img: "/images/products/ms-steel.png",
                unit: "per MT",
                marketPrice: 55000,
                ourPrice: 51500,
                specs: [
                    { label: "Types", value: "Flat · Round · Square · Hexagonal" },
                    { label: "Sizes", value: "6mm – 100mm (various profiles)" },
                    { label: "Standard", value: "IS 2062:2011" },
                    { label: "Min Order", value: "1 MT" },
                ],
                brands: ["JSW Steel", "Shri Bajrang Power", "A-One Ispat"],
            },
            {
                id: "structural-steel",
                name: "Structural Steel",
                tagline: "Angles · Channels · Beams · Columns",
                img: "/images/products/structural-steel.png",
                unit: "per MT",
                marketPrice: 57000,
                ourPrice: 53000,
                specs: [
                    { label: "Sections", value: "Angles · Channels · I-Beams · H-Beams" },
                    { label: "Sizes", value: "25×25mm – 200×200mm" },
                    { label: "Standard", value: "IS 2062 · IS 808" },
                    { label: "Min Order", value: "1 MT" },
                ],
                brands: ["JSW Steel", "Shri Bajrang Power"],
            },
            {
                id: "steel-tubes",
                name: "Steel Tubes & Pipes",
                tagline: "Hollow sections · Structural pipes",
                img: "/images/products/steel-tubes.png",
                unit: "per MT",
                marketPrice: 62000,
                ourPrice: 58000,
                specs: [
                    { label: "Types", value: "Square · Rectangular · Round hollow sections" },
                    { label: "Sizes", value: "½″ – 6″ · Wall thickness 1.6mm – 6mm" },
                    { label: "Standard", value: "IS 1161 · IS 4923" },
                    { label: "Min Order", value: "500 kg" },
                ],
                brands: ["Mony Steel & Ispat", "A-One Ispat"],
            },
            {
                id: "binding-wire",
                name: "Binding Wire",
                tagline: "Construction grade · Annealed",
                img: "/images/products/tmt-bars.png", // ← replace with binding-wire.png
                unit: "per coil",
                marketPrice: 6500,
                ourPrice: 5800,
                specs: [
                    { label: "Gauge", value: "18G · 20G · 22G" },
                    { label: "Weight", value: "25 kg per coil" },
                    { label: "Type", value: "Black annealed wire" },
                    { label: "Min Order", value: "10 coils" },
                ],
                brands: ["JSW Steel", "Sunvik Gold", "Magna"],
            },
        ],
    },
    {
        id: "cement",
        label: "Cement",
        products: [
            {
                id: "opc-cement",
                name: "OPC Cement",
                tagline: "Ordinary Portland · 43 & 53 Grade",
                img: "/images/products/cement.png",
                unit: "per bag (50kg)",
                marketPrice: 420,
                ourPrice: 385,
                specs: [
                    { label: "Grades", value: "OPC 43 · OPC 53" },
                    { label: "Weight", value: "50 kg per bag" },
                    { label: "Standard", value: "IS 8112 · IS 12269" },
                    { label: "Min Order", value: "100 bags" },
                ],
                brands: ["Birla Super", "UltraTech", "Dalmia"],
            },
            {
                id: "ppc-cement",
                name: "PPC Cement",
                tagline: "Portland Pozzolana · High durability",
                img: "/images/products/cement.png",
                unit: "per bag (50kg)",
                marketPrice: 400,
                ourPrice: 368,
                specs: [
                    { label: "Type", value: "Portland Pozzolana Cement" },
                    { label: "Weight", value: "50 kg per bag" },
                    { label: "Standard", value: "IS 1489 (Part 1)" },
                    { label: "Min Order", value: "100 bags" },
                ],
                brands: ["Priya Cement", "Ramco", "Zuari"],
            },
        ],
    },
];

// ── Helpers ────────────────────────────────────────────────────────────────
function formatPrice(n) {
    return "₹" + n.toLocaleString("en-IN");
}

function savings(market, ours) {
    return Math.round(((market - ours) / market) * 100);
}

// ── Product Card ───────────────────────────────────────────────────────────
function ProductCard({ product, cartItem, onAdd, onRemove }) {
    const [expanded, setExpanded] = useState(false);
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
                    ? "border-gold/60 shadow-[0_4px_24px_-4px_rgba(201,169,97,0.25)]"
                    : "border-charcoal/10 hover:border-charcoal/20",
            ].join(" ")}
        >
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden">
                <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-deep-navy/10 to-transparent" />

                {/* Savings badge */}
                <div className="absolute right-3 top-3 bg-gold px-2 py-1">
                    <span className="font-body text-[10px] font-bold text-deep-navy">
                        SAVE {savings(product.marketPrice, product.ourPrice)}%
                    </span>
                </div>

                {/* Name on image */}
                <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-xl font-bold text-white">{product.name}</h3>
                    <p className="mt-0.5 font-body text-xs text-white/60">{product.tagline}</p>
                </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-between border-b border-charcoal/8 px-5 py-4">
                <div>
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/35">
                        Market Price
                    </p>
                    <p className="mt-0.5 font-body text-sm text-charcoal/40 line-through">
                        {formatPrice(product.marketPrice)}
                    </p>
                </div>
                <div className="text-right">
                    <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                        Amit Price
                    </p>
                    <p className="mt-0.5 font-display text-xl font-bold text-charcoal">
                        {formatPrice(product.ourPrice)}
                    </p>
                    <p className="font-body text-[9px] text-charcoal/35">{product.unit}</p>
                </div>
            </div>

            {/* Specs toggle */}
            <button
                onClick={() => setExpanded((p) => !p)}
                className="flex w-full items-center justify-between px-5 py-3 text-left transition-colors duration-200 hover:bg-soft-gray"
            >
                <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">
                    Specifications
                </span>
                {expanded
                    ? <ChevronUp size={14} className="text-charcoal/40" />
                    : <ChevronDown size={14} className="text-charcoal/40" />
                }
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-2 border-t border-charcoal/8 px-5 py-4">
                            {product.specs.map((s) => (
                                <div key={s.label} className="flex items-start gap-3">
                                    <span className="w-20 shrink-0 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-charcoal/35">
                                        {s.label}
                                    </span>
                                    <span className="font-body text-xs text-charcoal/65">{s.value}</span>
                                </div>
                            ))}
                            {/* Brands */}
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                {product.brands.map((b) => (
                                    <span key={b} className="border border-charcoal/10 px-2 py-0.5 font-body text-[10px] uppercase tracking-wider text-charcoal/50">
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Add to enquiry */}
            <div className="mt-auto border-t border-charcoal/8 p-4">
                {!inCart ? (
                    <button
                        onClick={() => onAdd(product)}
                        className="flex w-full items-center justify-center gap-2 bg-deep-navy py-3 font-body text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gold hover:text-deep-navy"
                    >
                        <Plus size={13} />
                        Add to Enquiry
                    </button>
                ) : (
                    <div className="flex items-center justify-between gap-3">
                        <button
                            onClick={() => onRemove(product.id)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center border border-charcoal/15 transition-colors hover:border-red-300 hover:text-red-400"
                        >
                            <Minus size={14} />
                        </button>
                        <div className="flex flex-1 items-center justify-center gap-2 bg-gold/10 py-2.5 border border-gold/30">
                            <span className="font-body text-xs font-semibold text-gold">
                                ✓ Added to Enquiry
                            </span>
                        </div>
                        <button
                            onClick={() => onAdd(product)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center border border-charcoal/15 transition-colors hover:border-gold hover:text-gold"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

// ── Enquiry Sidebar / Summary ─────────────────────────────────────────────
function EnquirySidebar({ cart, onRemove, onClear }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [sent, setSent] = useState(false);

    const totalMarket = cart.reduce((s, i) => s + i.marketPrice * i.qty, 0);
    const totalOurs = cart.reduce((s, i) => s + i.ourPrice * i.qty, 0);
    const totalSaving = totalMarket - totalOurs;

    function buildWhatsApp() {
        const lines = [
            `🏗️ *PRODUCT ENQUIRY*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            ``,
            `👤 *Name:* ${name || "Not provided"}`,
            `📞 *Phone:* ${phone || "Not provided"}`,
            ``,
            `━━━━━━━━━━━━━━━━━━━━`,
            `🛒 *ITEMS REQUESTED*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            ...cart.map((i, idx) => `${idx + 1}. *${i.name}*\n    Qty: ${i.qty} ${i.unit}\n    Price: ${formatPrice(i.ourPrice * i.qty)}`),
            ``,
            `━━━━━━━━━━━━━━━━━━━━`,
            `💰 *PRICE SUMMARY*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            `Market Price:  ~${formatPrice(totalMarket)}~`,
            `*Amit Price:   ${formatPrice(totalOurs)}*`,
            `✅ *You Save:  ${formatPrice(totalSaving)}*`,
            ``,
            `━━━━━━━━━━━━━━━━━━━━`,
            `_Sent via amitsteel.co.in_`,
        ];
        const msg = encodeURIComponent(lines.join("\n"));
        const num = "919880844526";
        window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
        setSent(true);
        setTimeout(() => { setSent(false); onClear(); }, 3000);
    }

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center border border-charcoal/10 bg-soft-gray">
                    <MessageCircle size={22} className="text-charcoal/25" />
                </div>
                <p className="font-body text-sm font-semibold text-charcoal/40">
                    Your enquiry list is empty
                </p>
                <p className="font-body text-xs text-charcoal/30">
                    Add products from the left to build your enquiry
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Items */}
            <div className="flex flex-col gap-2">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-3 border border-charcoal/8 bg-white p-3">
                        <div className="min-w-0 flex-1">
                            <p className="font-body text-sm font-semibold text-charcoal">{item.name}</p>
                            <p className="font-body text-xs text-charcoal/40">
                                {item.qty} {item.unit} · {formatPrice(item.ourPrice * item.qty)}
                            </p>
                        </div>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="flex h-7 w-7 shrink-0 items-center justify-center text-charcoal/25 hover:text-red-400"
                        >
                            <X size={13} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Price summary */}
            <div className="border border-charcoal/10 bg-soft-gray p-4">
                <div className="flex justify-between font-body text-sm text-charcoal/50">
                    <span>Market Price</span>
                    <span className="line-through">{formatPrice(totalMarket)}</span>
                </div>
                <div className="mt-2 flex justify-between font-body text-sm font-semibold text-charcoal">
                    <span>Amit Price</span>
                    <span className="text-charcoal">{formatPrice(totalOurs)}</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-charcoal/10 pt-2 font-body text-sm font-bold text-gold">
                    <span>You Save</span>
                    <span>{formatPrice(totalSaving)}</span>
                </div>
                <p className="mt-2 font-body text-[10px] text-charcoal/35">
                    * Prices indicative. Final quote on confirmation.
                </p>
            </div>

            {/* Customer details */}
            <div className="flex flex-col gap-2">
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/40">
                    Your Details
                </p>
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

            {/* Send via WhatsApp */}
            <button
                onClick={buildWhatsApp}
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

            {/* Or call */}
            <a
                href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                className="flex w-full items-center justify-center gap-2 border border-charcoal/15 py-3 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 transition-all duration-200 hover:border-gold/40 hover:text-charcoal"
            >
                <Phone size={13} />
                Or Call Us Directly
            </a>
        </div>
    );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function ProductsContent() {
    const [activeTab, setActiveTab] = useState("steel");
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === product.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === product.id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    }

    function removeFromCart(id) {
        setCart((prev) => prev.filter((i) => i.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    const activeCategory = CATEGORIES.find((c) => c.id === activeTab);
    const cartCount = cart.reduce((s, i) => s + i.qty, 0);

    return (
        <main className="min-h-screen bg-off-white">

            {/* ── HERO ── */}
            <div className="relative overflow-hidden bg-deep-navy pb-20 pt-36 md:pb-24 md:pt-44">
                <div
                    className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full opacity-[0.06]"
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
                        Products
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease, delay: 0.07 }}
                        className="font-display font-bold leading-[1.04] text-white"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                    >
                        Build your enquiry.<br />
                        <span className="italic text-gold">We'll do the rest.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.15 }}
                        className="mt-5 max-w-xl font-body text-base text-white/50 md:text-lg"
                    >
                        Select what you need · See our price vs market · Send to WhatsApp in one tap.
                    </motion.p>

                    {/* How it works — 3 steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.25 }}
                        className="mt-10 flex flex-wrap items-center gap-6 md:gap-10"
                    >
                        {[
                            { step: "01", text: "Browse & add products" },
                            { step: "02", text: "See market vs Amit price" },
                            { step: "03", text: "Send enquiry on WhatsApp" },
                        ].map(({ step, text }, i) => (
                            <div key={step} className="flex items-center gap-3">
                                {i > 0 && <ArrowRight size={14} className="hidden text-gold/30 md:block" />}
                                <div className="flex items-center gap-2.5">
                                    <span className="font-display text-sm font-bold italic text-gold/60">{step}</span>
                                    <span className="font-body text-sm text-white/55">{text}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </Container>
            </div>

            {/* Gold rule */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" aria-hidden="true" />

            {/* ── MAIN LAYOUT: Products + Sidebar ── */}
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

                    {/* ── LEFT: Product listing ── */}
                    <div className="lg:col-span-8">

                        {/* Category tabs */}
                        <div className="mb-8 inline-flex border border-charcoal/12" role="tablist">
                            {CATEGORIES.map((cat) => {
                                const isActive = activeTab === cat.id;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        role="tab"
                                        aria-selected={isActive}
                                        className={[
                                            "relative inline-flex min-h-[44px] items-center gap-2 px-6 py-3 font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300",
                                            isActive ? "text-deep-navy" : "text-charcoal/40 hover:text-charcoal/70",
                                        ].join(" ")}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="productTab"
                                                className="absolute inset-0 bg-gold"
                                                transition={{ duration: 0.35, ease }}
                                                aria-hidden="true"
                                            />
                                        )}
                                        <span className="relative z-10">{cat.label}</span>
                                        <span className={`relative z-10 text-[10px] ${isActive ? "text-deep-navy/60" : "text-charcoal/25"}`}>
                                            {cat.products.length}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Product grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, ease }}
                                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                            >
                                {activeCategory.products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        cartItem={cart.find((i) => i.id === product.id)}
                                        onAdd={addToCart}
                                        onRemove={removeFromCart}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Not sure section */}
                        <div className="mt-10 flex flex-col items-start gap-4 border border-charcoal/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
                            <div>
                                <p className="font-display text-lg font-bold text-charcoal md:text-xl">
                                    Not sure what you need?
                                </p>
                                <p className="mt-1 font-body text-sm text-charcoal/50">
                                    Our team responds within 2 hours. Tell us your project — we'll recommend.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex shrink-0 items-center gap-2 border border-charcoal/15 px-5 py-3 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/70 transition-all duration-300 hover:border-gold/40 hover:text-charcoal"
                            >
                                Talk to Us <ArrowRight size={13} />
                            </Link>
                        </div>
                    </div>

                    {/* ── RIGHT: Enquiry sidebar ── */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28">
                            {/* Header */}
                            <div className="flex items-center justify-between border border-b-0 border-charcoal/12 bg-deep-navy px-5 py-4">
                                <div className="flex items-center gap-2.5">
                                    <MessageCircle size={16} className="text-gold" strokeWidth={1.5} />
                                    <span className="font-body text-sm font-semibold uppercase tracking-widest text-white">
                                        My Enquiry
                                    </span>
                                </div>
                                {cartCount > 0 && (
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold font-body text-[10px] font-bold text-deep-navy">
                                            {cartCount}
                                        </span>
                                        <button
                                            onClick={clearCart}
                                            className="font-body text-[10px] text-white/30 hover:text-white/60"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar body */}
                            <div className="border border-charcoal/12 bg-soft-gray p-5">
                                <EnquirySidebar
                                    cart={cart}
                                    onRemove={removeFromCart}
                                    onClear={clearCart}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

        </main>
    );
}