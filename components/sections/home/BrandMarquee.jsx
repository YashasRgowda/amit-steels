"use client";

import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";
import { fadeUp, viewport } from "@/lib/animations";

export default function BrandMarquee() {
    // Duplicate for seamless infinite loop (translateX from 0 to -50% lands on identical content)
    const row = [...BRANDS, ...BRANDS];

    return (
        <section
            className="relative overflow-hidden bg-deep-navy py-16 md:py-20 lg:py-24"
            aria-label="Authorized brand partnerships"
        >
            {/* Top hairline */}
            <div
                className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                aria-hidden="true"
            />

            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                className="mb-10 text-center font-body text-[11px] font-medium uppercase tracking-[0.35em] text-gold/70 md:mb-14 md:text-xs"
            >
                Authorized Distributor For
            </motion.p>

            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                }}
            >
                <div className="flex items-center animate-brand-marquee">
                    {row.map((brand, i) => (
                        <div
                            key={`${brand.slug}-${i}`}
                            className="flex shrink-0 items-center"
                        >
                            <span
                                className="cursor-default whitespace-nowrap px-10 font-display font-bold text-off-white/40 transition-colors duration-500 hover:text-off-white md:px-14 lg:px-16"
                                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
                            >
                                {brand.name}
                            </span>
                            <span
                                className="select-none text-gold/30"
                                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
                                aria-hidden="true"
                            >
                                ·
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom hairline */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                aria-hidden="true"
            />
        </section>
    );
}