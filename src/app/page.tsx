import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection'; // Quality & Grading
import ProductsSection from '@/components/sections/ProductsSection'; // Specifications
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection'; // Product Cards
import TechnologiesSection from '@/components/sections/TechnologiesSection'; // Sourcing Regions
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'; // Supply Capabilities
import TestimonialsSection from '@/components/sections/TestimonialsSection'; // Stats/Trust
import Footer from '@/components/Footer';
import SectionTransition from '@/components/SectionTransition';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <HeroSection />

      <SectionTransition>
        <AboutSection />
      </SectionTransition>

      <SectionTransition>
        <ProductsSection /> {/* Specifications */}
      </SectionTransition>

      <SectionTransition>
        <FeaturedProductsSection /> {/* Product Cards with Images */}
      </SectionTransition>

      <SectionTransition>
        <ServicesSection /> {/* Quality & Grading */}
      </SectionTransition>

      <SectionTransition>
        <TechnologiesSection /> {/* Sourcing States */}
      </SectionTransition>

      <SectionTransition>
        <WhyChooseUsSection /> {/* Supply Capabilities */}
      </SectionTransition>

      <SectionTransition>
        <TestimonialsSection /> {/* Trust Indicators/Stats */}
      </SectionTransition>

      <Footer />
    </main>
  );
}
