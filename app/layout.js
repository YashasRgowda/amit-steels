import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://amitsteel.co.in"),
  title: {
    default:
      "Amit Steel & Cement | Premium Steel Distributor in Bengaluru, Karnataka",
    template: "%s | Amit Steel & Cement",
  },
  description:
    "Amit Steel & Cement is a trusted steel and cement distributor in Bengaluru, Karnataka — supplying JSW, Sunvik, A-One Ispat TMT bars, MS steel, tubes and cement to government bodies and private projects since 2018.",
  keywords: [
    "steel distributor Bengaluru",
    "TMT bars Karnataka",
    "JSW Steel dealer",
    "cement supplier Bangalore",
    "Amit Steel and Cement",
    "Sunvik steel dealer",
    "construction steel supplier",
  ],
  authors: [{ name: "Amit Steel & Cement" }],
  openGraph: {
    title:
      "Amit Steel & Cement | Premium Steel Distributor in Bengaluru, Karnataka",
    description:
      "Trusted steel and cement distributor in Bengaluru supplying JSW, Sunvik, A-One Ispat brands to government and private construction projects since 2018.",
    url: "https://amitsteel.co.in",
    siteName: "Amit Steel & Cement",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Amit Steel & Cement | Premium Steel Distributor in Bengaluru, Karnataka",
    description:
      "Trusted steel and cement distributor in Bengaluru supplying JSW, Sunvik, A-One Ispat brands to government and private construction projects since 2018.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A2B5C",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="font-body bg-off-white text-charcoal overflow-x-hidden">
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}