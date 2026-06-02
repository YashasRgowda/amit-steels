import { cn } from "@/lib/utils";

const sizeMap = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-screen-2xl",
    full: "max-w-none",
};

export default function Container({ children, className, size = "default" }) {
    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                sizeMap[size],
                className
            )}
        >
            {children}
        </div>
    );
}