import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import { COMPANY, CONTACT, NAV_ITEMS, BRANDS } from "@/lib/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-[#080E1F]" aria-label="Site footer">

            {/* ── Ambient gold glow — top left ── */}
            <div
                className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.06]"
                style={{ background: "radial-gradient(circle, #C9A961 0%, transparent 70%)" }}
                aria-hidden="true"
            />
            {/* ── Ambient gold glow — bottom right ── */}
            <div
                className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full opacity-[0.04]"
                style={{ background: "radial-gradient(circle, #C9A961 0%, transparent 70%)" }}
                aria-hidden="true"
            />

            

            {/* ════════════════════════════════════════════════════════
          MAIN FOOTER GRID
      ════════════════════════════════════════════════════════ */}
            <Container>
                <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">

                    {/* ── Col 1: Brand (spans 4 cols on lg) ── */}
                    <div className="flex flex-col gap-6 lg:col-span-4">

                        {/* Logo */}
                        <Link href="/" aria-label="Amit Steel and Cement — Home" className="inline-block w-fit">
                            <Image
                                src="/images/logo.png"
                                alt="Amit Steel & Cement"
                                width={180}
                                height={60}
                                className="h-14 w-auto object-contain"
                            />
                        </Link>

                        <p className="max-w-xs font-body text-sm leading-relaxed text-white/45">
                            Three generations of trusted commerce. From pre-independence Chickpet to Karnataka's most ambitious infrastructure — steel distributed with integrity.
                        </p>

                        {/* Social row */}
                        <div className="flex items-center gap-2">
                            {[
                                { icon: FaInstagram, href: CONTACT.instagram, label: "Instagram" },
                                { icon: FaFacebookF, href: CONTACT.facebook, label: "Facebook" },
                                { icon: FaLinkedinIn, href: CONTACT.linkedin, label: "LinkedIn" },
                                { icon: FaWhatsapp, href: `https://wa.me/${CONTACT.whatsapp.replace(/\+/g, "")}`, label: "WhatsApp" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                                >
                                    <Icon size={15} aria-hidden="true" />
                                </a>
                            ))}
                        </div>

                        {/* JSW badge */}
                        <div className="inline-flex w-fit items-center gap-2 border border-gold/25 bg-gold/5 px-3 py-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                                JSW Shoppe Connect Honoree
                            </span>
                        </div>
                    </div>

                    {/* ── Col 2: Navigation (spans 2 cols) ── */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-6 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                            Navigation
                        </h3>
                        <nav aria-label="Footer navigation">
                            <ul className="flex flex-col gap-1">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="group inline-flex items-center gap-2 py-1.5 font-body text-sm text-white/55 transition-colors duration-200 hover:text-gold"
                                        >
                                            <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" aria-hidden="true" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* ── Col 3: Brands (spans 3 cols) ── */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                            Brands We Carry
                        </h3>
                        <ul className="flex flex-col gap-1">
                            {BRANDS.map((brand) => (
                                <li key={brand.slug} className="font-body text-sm text-white/55">
                                    {brand.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4: Contact (spans 3 cols) ── */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-5">

                            {/* Address */}
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-3 text-white/55 transition-colors duration-200 hover:text-gold"
                            >
                                <MapPin size={14} className="mt-0.5 shrink-0 text-gold/50 group-hover:text-gold" aria-hidden="true" />
                                <span className="font-body text-sm leading-relaxed">{CONTACT.address}</span>
                            </a>

                            {/* Divider */}
                            <div className="h-px w-full bg-white/5" aria-hidden="true" />

                            {/* Phones */}
                            <div className="flex flex-col gap-2">
                                {CONTACT.phones.map((phone) => (
                                    <a
                                        key={phone}
                                        href={`tel:${phone.replace(/\s/g, "")}`}
                                        className="group flex items-center gap-3 font-body text-sm text-white/55 transition-colors duration-200 hover:text-gold"
                                    >
                                        <Phone size={13} className="shrink-0 text-gold/50 group-hover:text-gold" aria-hidden="true" />
                                        {phone}
                                    </a>
                                ))}
                            </div>

                            {/* Email */}
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="group flex items-center gap-3 font-body text-sm text-white/55 transition-colors duration-200 hover:text-gold"
                            >
                                <Mail size={13} className="shrink-0 text-gold/50 group-hover:text-gold" aria-hidden="true" />
                                {CONTACT.email}
                            </a>

                            {/* Hours */}
                            <div className="mt-1 border-l-2 border-gold/30 pl-3">
                                <p className="font-body text-[11px] font-medium uppercase tracking-wider text-gold/60">
                                    Mon – Sat
                                </p>
                                <p className="mt-0.5 font-body text-sm text-white/40">
                                    9:00 AM – 7:00 PM IST
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>

            {/* ════════════════════════════════════════════════════════
          BOTTOM STRIP
      ════════════════════════════════════════════════════════ */}
            <div className="border-t border-white/5">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">

                        <p className="font-body text-xs text-white/25">
                            © {year} {COMPANY.name}. All rights reserved.
                        </p>

                        <div className="flex items-center gap-1 font-body text-xs text-white/20">
                            <span>GST Registered</span>
                            <span className="mx-2 text-gold/30">·</span>
                            <span>Bengaluru, Karnataka</span>
                            <span className="mx-2 text-gold/30">·</span>
                            <span>India</span>
                        </div>

                    </div>
                </Container>
            </div>

        </footer>
    );
}