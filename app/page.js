import HeroPlaceholder from "@/components/sections/home/HeroPlaceholder";
import BrandMarquee from "@/components/sections/home/BrandMarquee";
import AboutPreview from "@/components/sections/home/AboutPreview";
import Products from "@/components/sections/home/Products";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Clients from "@/components/sections/home/Clients";
import FooterCTA from "@/components/sections/home/FooterCTA";


export default function Home() {
  return (
    <>
      <HeroPlaceholder />
      <BrandMarquee />
      <Products />
      <Clients />
      <WhyChooseUs />
      <AboutPreview />
      <FooterCTA />
    </>
  );
}