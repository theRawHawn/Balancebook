import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import WhyChooseUs from "@/components/why-choose-us";
import ServicesOverview from "@/components/services-overview";
import AboutSection from "@/components/about-section";
import ServicesDetailed from "@/components/services-detailed";
import PricingSection from "@/components/pricing-section";
import FinancialToolkit from "@/components/financial-toolkit";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section id="home">
        <HeroSection />
        <WhyChooseUs />
        {/* <ServicesOverview /> */}
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServicesDetailed />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="toolkit">
        <FinancialToolkit />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
