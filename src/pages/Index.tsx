
import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import GallerySection from "../components/sections/GallerySection";
import ContactSection from "../components/sections/ContactSection";
import AcademySection from "../components/sections/AcademySection";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "../context/LanguageContext";

const Index = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  useEffect(() => {
    // Welcome toast
    toast({
      title: t('about.title'),
      description: t('hero.description'),
      duration: 5000,
    });
  }, [toast, t]);

  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <AcademySection />
      
      {/* Booking CTA Section */}
      <section className="py-16 bg-beauty-darkpink text-white">
        <div className="beauty-container text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            {t('contact.bookAppointment')}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            {t('contact.bookDescription')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.kalendes.com/site/artdelabeaute/reserve"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-beauty-darkpink font-medium rounded-md hover:bg-beauty-pink transition-all duration-300 inline-flex items-center justify-center"
            >
              {t('bookNow')}
            </a>
            <a
              href="https://www.kalendes.com/site/artdelabeaute/reserve" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              {t('enrollNow')} <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      
      <GallerySection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
