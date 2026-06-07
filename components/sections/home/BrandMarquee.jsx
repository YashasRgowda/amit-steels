"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, viewport } from "@/lib/animations";

const BRANDS = [
    { name: "JSW Steel", file: "jsw.png" },
    { name: "Sunvik", file: "sunvik.png" },
    { name: "Tata Steel", file: "tata.png" },
    { name: "Jindal", file: "jindal.png" },
    { name: "SAIL", file: "sail.png" },
    { name: "Ramco", file: "ramco.png" },
    { name: "Birla Super", file: "birlasuper.png" },
    { name: "UltraTech", file: "ultratech.png" },
    { name: "Dalmia", file: "dalmia.png" },
    { name: "Priya Cement", file: "priya.png" },
    { name: "Turbo", file: "turbo.png" },
    { name: "Vizag", file: "vizag.png" },
    { name: "Zuari Cement", file: "zuari.png" },
];

// Triple for seamless loop
const ROW = [...BRANDS, ...BRANDS, ...BRANDS];

export default function BrandMarquee() {
    return (
        <section
            className="relative overflow-hidden bg-deep-navy py-16 md:py-20 lg:py-24"
            aria-label="Authorized brand partnerships"
        >
            {/* Top hairline */}
            <div
                className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
                aria-hidden="true"
            />

            {/* Label */}
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                className="mb-12 text-center font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-gold/60 md:mb-16 md:text-xs"
            >
                Authorized Distributor For
            </motion.p>

            {/* ── Marquee track ── */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
            >
                <div
                    className="flex items-center"
                    style={{
                        animation: "brand-scroll 50s linear infinite",
                        width: "max-content",
                    }}
                >
                    {ROW.map((brand, i) => (
                        <div
                            key={`${brand.file}-${i}`}
                            className="group relative mx-6 shrink-0 md:mx-8 lg:mx-10"
                        >
                            {/*
                Strategy: Each logo gets a rounded white pill bg.
                The pill has NO border, NO shadow — completely invisible edges.
                Logo is large and padding is generous so it breathes.
                On hover: subtle gold ring appears + logo brightens.
              */}
                            <div
                                className="
                  relative overflow-hidden rounded-xl bg-white/95
                  px-6 py-4
                  transition-all duration-500
                  group-hover:bg-white
                  group-hover:ring-2 group-hover:ring-gold/60
                  group-hover:shadow-[0_8px_32px_-8px_rgba(201,169,97,0.35)]
                "
                                style={{
                                    width: "clamp(130px, 13vw, 190px)",
                                    height: "clamp(72px, 7.5vw, 96px)",
                                }}
                            >
                                <Image
                                    src={`/images/brands/${brand.file}`}
                                    alt={brand.name}
                                    fill
                                    sizes="190px"
                                    className="
                    object-contain p-3
                    opacity-80
                    transition-all duration-500
                    group-hover:scale-105
                    group-hover:opacity-100
                  "
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom hairline */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
                aria-hidden="true"
            />

            <style>{`
        @keyframes brand-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="brand-scroll"] { animation: none !important; }
        }
      `}</style>
        </section>
    );
}