import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Container from "@/components/common/Container";
import { COMPANY, CONTACT, NAV_ITEMS, BRANDS } from "@/lib/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    const socialLinks = [
        { icon: FaInstagram, href: CONTACT.instagram, label: "Instagram" },
        { icon: FaFacebookF, href: CONTACT.facebook, label: "Facebook" },
        { icon: FaLinkedinIn, href: CONTACT.linkedin, label: "LinkedIn" },
    ];

    return (
        <footer className="bg-deep-navy" aria-label="Site footer">

            <Container>
                <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-4 lg:py-20">

                    {/* Column 1 — Brand block */}
                    <div className="flex flex-col gap-3">

                        {/* Full brand name on one line — never drop STEEL */}
                        <p
                            className="font-display font-bold text-gold leading-tight"
                            style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
                        >
                            AMIT STEEL &amp; CEMENT
                        </p>

                        <p className="font-body text-sm leading-relaxed text-white/50">
                            {COMPANY.tagline}
                        </p>

                        <address className="not-italic flex flex-col mt-1">

                            <a
                                href={"https://maps.google.com/?q=" + encodeURIComponent(CONTACT.address)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-2 py-2 font-body text-sm text-white/60 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:text-gold"
                            >
                                <MapPin
                                    size={15}
                                    className="mt-0.5 shrink-0 text-gold/60 group-hover:text-gold"
                                    aria-hidden="true"
                                />
                                <span className="leading-relaxed">{CONTACT.address}</span>
                            </a>

                            {/* Hairline divider between address and contacts */}
                            <div className="my-1 h-px w-full bg-gold/10" aria-hidden="true" />

                            {CONTACT.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={"tel:" + phone.replace(/\s/g, "")}
                                    className="flex items-center gap-2 py-1.5 font-body text-sm text-white/60 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:text-gold min-h-[44px] md:min-h-0"
                                >
                                    <Phone size={14} className="shrink-0 text-gold/60" aria-hidden="true" />
                                    {phone}
                                </a>
                            ))}

                            <a
                                href={"mailto:" + CONTACT.email}
                                className="flex items-center gap-2 py-1.5 font-body text-sm text-white/60 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:text-gold min-h-[44px] md:min-h-0"
                            >
                                <Mail size={14} className="shrink-0 text-gold/60" aria-hidden="true" />
                                {CONTACT.email}
                            </a>

                        </address>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white">
                            Quick Links
                        </h3>
                        <nav aria-label="Footer navigation">
                            <ul className="flex flex-col gap-0.5">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="inline-flex min-h-[36px] items-center font-body text-sm text-white/60 transition-colors duration-200 hover:text-gold focus:outline-none focus-visible:text-gold"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 3 — Brands */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white">
                            Brands We Deal
                        </h3>
                        <ul className="flex flex-col gap-0.5">
                            {BRANDS.map((brand) => (
                                <li key={brand.slug}>
                                    <span className="font-body text-sm leading-relaxed text-white/60">
                                        {brand.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Connect */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white">
                            Connect
                        </h3>

                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-white/10 text-white/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                                >
                                    <Icon size={18} aria-hidden="true" />
                                </a>
                            ))}
                        </div>

                        <p className="font-body text-xs leading-relaxed text-white/40">
                            JSW Shoppe Connect Honoree
                        </p>

                        <Link
                            href="/contact"
                            className="mt-1 inline-flex min-h-[48px] items-center justify-center border border-gold px-6 py-3 font-body text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-200 hover:bg-gold hover:text-deep-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy"
                        >
                            Get a Quote
                        </Link>
                    </div>

                </div>
            </Container >

            {/* Bottom strip */}
            < div className="border-t border-gold/10" >
                <Container>
                    <div className="flex flex-col items-center gap-2 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
                        <p className="font-body text-xs text-white/30">
                            {"© " + year + " " + COMPANY.name + ". All rights reserved."}
                        </p>
                        <p className="font-body text-xs text-white/20">
                            {"GST Registered · Bengaluru, Karnataka"}
                        </p>
                    </div>
                </Container>
            </div >

        </footer >
    );
}