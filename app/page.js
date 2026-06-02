export default function Home() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-deep-navy px-4 text-center sm:px-6 lg:px-8"
      aria-label="Coming soon placeholder"
    >
      {/* Navbar offset — pushes content down so it's not hidden under fixed nav */}
      <div className="pt-20 md:pt-24" aria-hidden="true" />

      <div className="flex flex-col items-center py-16 md:py-24 lg:py-32">

        {/* Eyebrow */}
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-gold/70 md:text-sm">
          Bengaluru, Karnataka
        </p>

        {/* Heading */}
        <h1
          className="font-display font-bold leading-tight tracking-tight text-white"
          style={{ fontSize: "clamp(2rem, 8vw, 5.5rem)" }}
        >
          Amit Steel &amp; Cement
        </h1>

        {/* Gold divider */}
        <div
          className="mt-5 h-px w-16 bg-gold md:mt-6 md:w-32"
          aria-hidden="true"
        />

        {/* Subtext */}
        <p className="mt-5 font-body text-base text-off-white/80 md:mt-6 md:text-lg lg:text-xl">
          Premium Steel &amp; Cement Distribution
        </p>

        {/* Italic tagline */}
        <p className="mt-2 font-body text-sm italic text-gold/70 md:text-base">
          Coming Soon — Crafting Something Premium
        </p>

        {/* Pulse dot */}
        <div className="mt-8 flex items-center gap-2" aria-hidden="true">
          <div className="h-2 w-2 animate-pulse rounded-full bg-gold md:h-3 md:w-3" />
          <span className="font-body text-xs uppercase tracking-widest text-white/40">
            Building Something Great
          </span>
        </div>

      </div>
    </section>
  );
}