import { notFound } from "next/navigation";
import ProductDetail from "@/components/sections/products/ProductDetail";

const VALID_SLUGS = [
    "tmt-bars",
    "ms-round-bars",
    "ms-flat-bars",
    "binding-wire",
    "gi-wire",
    "ms-beams",
    "ms-channels",
    "ms-angles",
    "ms-pipes",
    "square-hollow",
    "hr-sheets",
    "cr-sheets",
    "colour-roofing",
    "gi-corrugated",
    "gi-chain-link",
    "barbed-wire",
];

export function generateStaticParams() {
    return VALID_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const name = slug
        .split("-")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    return {
        title: `${name} | Amit Steel & Cement`,
        description: `Technical specifications, grades, sizes and enquiry for ${name}. Available in Bengaluru from Amit Steel & Cement.`,
    };
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    if (!VALID_SLUGS.includes(slug)) {
        notFound();
    }
    return <ProductDetail slug={slug} />;
}