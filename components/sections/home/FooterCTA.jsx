import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import { CONTACT } from "@/lib/constants";

export default function FooterCTA() {
    return (
        <div className="bg-deep-navy border-b border-white/5">
            <Container>
                <div className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center md:py-12">
                    <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold/60">
                            Ready to Build?
                        </p>
                        <h2
                            className="mt-2 font-display font-bold leading-tight text-white"
                            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                        >
                            Get a quote in{" "}
                            <span className="italic text-gold">2 hours.</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href={`https://wa.me/${CONTACT.whatsapp.replace(/\+/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[48px] items-center gap-2.5 bg-gold px-6 py-3 font-body text-sm font-semibold uppercase tracking-widest text-deep-navy transition-all duration-300 hover:bg-gold-glow hover:shadow-[0_8px_32px_-8px_rgba(201,169,97,0.5)]"
                        >
                            <FaWhatsapp size={16} />
                            WhatsApp Us
                        </a>
                        <a
                            href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                            className="inline-flex min-h-[48px] items-center gap-2.5 border border-white/15 px-6 py-3 font-body text-sm font-semibold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-gold/40 hover:text-gold"
                        >
                            <Phone size={15} />
                            Call Direct
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

