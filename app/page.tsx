import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationInfo from "@/components/LocationInfo";
import Services from "@/components/Services";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LocationInfo />
      <Services />
      <FeaturedServices />
      <Footer />
    </main>
  );
}
