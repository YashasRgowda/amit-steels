export default function Loading() {
    return (
        <div
            className="flex min-h-screen items-center justify-center bg-deep-navy"
            aria-label="Loading"
            role="status"
        >
            {/* Spinner ring */}
            <div className="relative flex items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-2 border-gold border-t-transparent md:h-14 md:w-14" />
                {/* Gold pulse dot in center */}
                <div className="absolute h-2 w-2 animate-pulse rounded-full bg-gold" />
            </div>
        </div>
    );
}