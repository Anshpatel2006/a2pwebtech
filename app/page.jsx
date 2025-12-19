import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import WhyChooseSection from "@/components/why-choose-section"
import PortfolioSection from "@/components/portfolio-section"
import TechStackSection from "@/components/tech-stack-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
