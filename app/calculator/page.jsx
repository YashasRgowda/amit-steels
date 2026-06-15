// app/calculator/page.jsx — Server Component
import CalculatorContent from "@/components/sections/calculator/CalculatorContent";

export const metadata = {
  title: "Steel & Cement Calculator",
  description: "Calculate exact TMT steel and cement requirements for your construction project. Free tool by Amit Steel & Cement, Bengaluru.",
};

export default function CalculatorPage() {
  return <CalculatorContent />;
}