
import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import GallerySection from "../components/sections/GallerySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import AcademySection from "../components/sections/AcademySection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to Art de la Beautée",
      description: "Discover our beauty services and professional training programs.",
      duration: 5000,
    });
  }, [toast]);

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
            Ready to Transform Your Look or Start Your Career?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book a beauty service or enroll in our professional training programs today.
            Our expert team is waiting to help you achieve your beauty goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 bg-white text-beauty-darkpink font-medium rounded-md hover:bg-beauty-pink transition-all duration-300 inline-flex items-center justify-center">
              Book an Appointment
            </Link>
            <Link to="/academy" className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center">
              Enroll in Academy <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
