
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-beauty-gradient pt-32 pb-20">
      <div className="beauty-container flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero.title')} <span className="text-beauty-darkpink">{t('hero.beauty')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/services" className="beauty-button">
              {t('hero.servicesButton')}
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="bg-beauty-pink absolute -top-4 -left-4 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-30"></div>
            <div className="bg-beauty-cream absolute -bottom-4 -right-4 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-30"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/frontimage.jpg"
                alt={t('hero.imageAlt')}
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
