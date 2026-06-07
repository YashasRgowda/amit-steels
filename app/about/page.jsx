// app/about/page.jsx  — Server Component (no "use client")
// Metadata lives here safely. All animation logic is inside AboutContent (client).

import AboutContent from "@/components/sections/about/AboutContent";

export const metadata = {
  title: "About Us",
  description: "The story of Amit Steel & Cement — three generations of trusted commerce from pre-independence Bengaluru to Karnataka's leading steel distributor.",
};

export default function AboutPage() {
  return <AboutContent />;
}