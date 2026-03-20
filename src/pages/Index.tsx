import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background min-h-screen overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PackagesSection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
