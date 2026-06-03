import HeroPlaceholder from "@/components/sections/home/HeroPlaceholder";
import BrandMarquee from "@/components/sections/home/BrandMarquee";
import AboutPreview from "@/components/sections/home/AboutPreview";
import Products from "@/components/sections/home/Products";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Clients from "@/components/sections/home/Clients";
import ContactCTA from "@/components/sections/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroPlaceholder />
      <BrandMarquee />
      <AboutPreview />
      <Products />
      <WhyChooseUs />
      <Clients />
      <ContactCTA />
    </>
  );
}