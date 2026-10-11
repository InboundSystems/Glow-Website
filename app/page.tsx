import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProductsSection from "@/components/home/ProductsSection";
import ReviewsWidget from "@/components/ReviewsWidget";
import HicapsSection from "@/components/home/HicapsSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import HomeContact from "@/components/home/HomeContact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProductsSection />
      <ReviewsWidget />
      <HicapsSection />
      <HomeFaqSection />
      <AboutTeaser />
      <HomeContact />
    </>
  );
}
