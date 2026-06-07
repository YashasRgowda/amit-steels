// app/products/page.jsx — Server Component
import ProductsContent from "@/components/sections/products/ProductsContent";

export const metadata = {
    title: "Products",
    description: "Browse TMT bars, MS steel, structural steel, tubes and cement from Amit Steel & Cement — Bengaluru's trusted distributor.",
};

export default function ProductsPage() {
    return <ProductsContent />;
}