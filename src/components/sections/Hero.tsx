
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-beauty-gradient pt-32 pb-20">
      <div className="beauty-container flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover the Art of <span className="text-beauty-darkpink">Beauty</span> & <span className="text-beauty-gold">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
            A distinguished beauty institute dedicated to delivering top-tier beauty services and professional education in the Dominican Republic.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/services" className="beauty-button">
              Our Services
            </Link>
            <Link to="/academy" className="beauty-button-outline">
              Beauty Academy <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="bg-beauty-pink absolute -top-4 -left-4 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-30"></div>
            <div className="bg-beauty-cream absolute -bottom-4 -right-4 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-30"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Beauty professional working"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
