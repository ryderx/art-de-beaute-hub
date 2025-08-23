
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white">
      <div className="beauty-container">
        <h2 className="section-title">{t('about.title')}</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-beauty-gold rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our Beauty Institute"
                className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="font-playfair text-3xl font-semibold mb-6 text-beauty-darkpink">
              {t('about.mission.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('about.mission.description')}
            </p>
            
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              {t('about.whyChoose')}
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-beauty-gold">
                  <ChevronRight size={20} />
                </span>
                <span>
                  <strong className="font-medium">{t('about.reasons.expertise.title')}:</strong> {t('about.reasons.expertise.description')}
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 text-beauty-gold">
                  <ChevronRight size={20} />
                </span>
                <span>
                  <strong className="font-medium">{t('about.reasons.quality.title')}:</strong> {t('about.reasons.quality.description')}
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 text-beauty-gold">
                  <ChevronRight size={20} />
                </span>
                <span>
                  <strong className="font-medium">{t('about.reasons.experience.title')}:</strong> {t('about.reasons.experience.description')}
                </span>
              </li>
            </ul>
            
            <Link to="/about" className="beauty-button">
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
