import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import { CONTACT, COMPANY } from "@/lib/constants";

export const metadata = {
    title: "Contact Us",
    description: "Contact Amit Steel & Cement — Bengaluru's trusted steel distributor.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-off-white">

            {/* ── HERO ── */}
            <div className="relative overflow-hidden bg-deep-navy pb-20 pt-36 md:pb-28 md:pt-44">
                <div
                    className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.07]"
                    style={{ background: "radial-gradient(circle, #C9A961 0%, transparent 70%)" }}
                    aria-hidden="true"
                />
                <Container>
                    <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-gold/60">
                        Contact
                    </p>
                    <h1
                        className="font-display font-bold leading-[1.05] text-white"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
                    >
                        Talk to us.<br />
                        <span className="italic text-gold">We respond fast.</span>
                    </h1>
                    <p className="mt-5 font-body text-sm text-white/50 md:text-base">
                        Mon – Sat &nbsp;·&nbsp; 9 AM – 7 PM IST
                    </p>
                </Container>
            </div>

            {/* Gold rule */}
            <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" aria-hidden="true" />

            <Container className="py-12 md:py-20">

                {/* ══ 3 CONTACT CARDS ══ */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                    {/* WhatsApp — gold primary */}
                    <a
                        href={`https://wa.me/${CONTACT.whatsapp.replace(/\+/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col justify-between bg-gold p-6 transition-all duration-300 hover:bg-gold-glow hover:shadow-[0_12px_40px_-8px_rgba(201,169,97,0.45)] md:p-8"
                    >
                        <FaWhatsapp size={26} className="text-deep-navy" />
                        <div className="mt-6">
                            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-deep-navy/50">
                                Fastest · WhatsApp
                            </p>
                            {/* Properly formatted number */}
                            <p className="mt-2 font-display text-2xl font-bold leading-tight text-deep-navy md:text-3xl">
                                +91 96321 14579
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-deep-navy/70 transition-transform duration-300 group-hover:translate-x-1">
                            <span>Chat Now</span>
                            <ArrowRight size={13} />
                        </div>
                    </a>

                    {/* Phone */}
                    <a
                        href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                        className="group flex flex-col justify-between border border-charcoal/10 bg-white p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_8px_32px_-8px_rgba(201,169,97,0.2)] md:p-8"
                    >
                        <Phone size={22} strokeWidth={1.5} className="text-gold" />
                        <div className="mt-6">
                            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-charcoal/40">
                                Call Direct
                            </p>
                            <p className="mt-2 font-display text-2xl font-bold leading-tight text-charcoal md:text-3xl">
                                +91 96321 14579
                            </p>
                            <p className="mt-1.5 font-body text-sm text-charcoal/40">
                                +91 90356 40000
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold transition-transform duration-300 group-hover:translate-x-1">
                            <span>Call Now</span>
                            <ArrowRight size={13} />
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="group flex flex-col justify-between border border-charcoal/10 bg-white p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_8px_32px_-8px_rgba(201,169,97,0.2)] md:p-8"
                    >
                        <Mail size={22} strokeWidth={1.5} className="text-gold" />
                        <div className="mt-6">
                            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-charcoal/40">
                                Email
                            </p>
                            <p className="mt-2 font-display text-lg font-bold leading-tight text-charcoal md:text-xl lg:text-2xl">
                                {CONTACT.email}
                            </p>
                            <p className="mt-1.5 font-body text-sm text-charcoal/40">
                                Reply within 2 hours
                            </p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-gold transition-transform duration-300 group-hover:translate-x-1">
                            <span>Send Email</span>
                            <ArrowRight size={13} />
                        </div>
                    </a>

                </div>

                {/* ══ LOCATION + HOURS ══ */}
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {/* Location — with clear "Open in Google Maps" label */}
                    <div className="flex flex-col justify-between border border-charcoal/10 bg-white p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <MapPin size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                            <div>
                                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/35">
                                    Location
                                </p>
                                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70 md:text-base">
                                    {CONTACT.addressShort}
                                </p>
                            </div>
                        </div>

                        {/* Explicit Maps CTA — button style so nobody misses it */}
                        <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/map mt-6 inline-flex w-full items-center justify-center gap-2 border border-charcoal/12 bg-soft-gray px-4 py-3 font-body text-xs font-semibold uppercase tracking-widest text-charcoal/60 transition-all duration-300 hover:border-gold/40 hover:bg-gold/8 hover:text-gold"
                        >
                            <ExternalLink size={13} aria-hidden="true" />
                            Open in Google Maps
                        </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4 border border-charcoal/10 bg-white p-6 md:p-8">
                        <Clock size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                        <div className="w-full">
                            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/35">
                                Business Hours
                            </p>
                            <div className="mt-4 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="font-body text-sm text-charcoal/60">Monday – Saturday</span>
                                    <span className="font-body text-sm font-bold text-charcoal">9 AM – 7 PM</span>
                                </div>
                                <div className="h-px bg-charcoal/6" aria-hidden="true" />
                                <div className="flex items-center justify-between">
                                    <span className="font-body text-sm text-charcoal/60">Sunday</span>
                                    <span className="font-body text-sm font-medium text-charcoal/30">Closed</span>
                                </div>
                            </div>
                            <p className="mt-4 font-body text-xs text-charcoal/30">IST · Bengaluru, Karnataka</p>
                        </div>
                    </div>

                </div>

                {/* ══ COMPANY DETAILS ══ */}
                <div className="mt-14 md:mt-20">
                    <p className="mb-5 font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-charcoal/30">
                        Company Details
                    </p>
                    {/* 2-col on mobile, 3-col on sm, 6-col on lg */}
                    <div className="grid grid-cols-2 gap-px border border-charcoal/8 bg-charcoal/8 sm:grid-cols-3 lg:grid-cols-6">
                        {[
                            { label: "Company", value: "Amit Steel & Cement" },
                            { label: "Director", value: COMPANY.founder },
                            { label: "Since", value: String(COMPANY.founded) },
                            { label: "Recognition", value: "JSW Shoppe Connect" },
                            { label: "City", value: "Bengaluru, KA" },
                            { label: "GST", value: "Registered" },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-white px-5 py-5">
                                <p className="font-body text-[9px] font-semibold uppercase tracking-[0.22em] text-charcoal/30">
                                    {label}
                                </p>
                                <p className="mt-1.5 font-body text-sm font-semibold text-charcoal/75">
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </Container>
        </main>
    );
}