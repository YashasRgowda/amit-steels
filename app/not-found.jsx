import Link from "next/link";

export default function NotFound() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-center bg-deep-navy px-4 text-center"
            aria-label="Page not found"
        >
            {/* 404 */}
            <h1
                className="font-display font-bold text-gold leading-none tracking-tight"
                style={{ fontSize: "clamp(5rem, 20vw, 12rem)" }}
            >
                404
            </h1>

            {/* Divider */}
            <div className="mx-auto mt-4 h-px w-16 bg-gold opacity-40 md:w-24" />

            {/* Message */}
            <p className="mt-6 font-body text-base text-white/80 md:text-lg">
                Page not found
            </p>
            <p className="mt-2 font-body text-sm text-white/50 md:text-base">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            {/* Back to Home — gold outline button, 44px min touch target */}
            <Link
                href="/"
                className="mt-8 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border border-gold px-6 py-3 font-body text-sm font-medium text-gold transition-colors duration-200 hover:bg-gold hover:text-deep-navy focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-deep-navy md:text-base"
            >
                Back to Home
            </Link>

            {/* Footer credit */}
            <p className="absolute bottom-6 font-body text-xs text-gold/40">
                Amit Steel &amp; Cement · Bengaluru, Karnataka
            </p>
        </main>
    );
}