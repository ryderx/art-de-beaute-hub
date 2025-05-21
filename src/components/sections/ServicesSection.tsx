
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { Scissors, GraduationCap, Sparkles, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.nail.title'),
      description: t('services.nail.description'),
      icon: <Sparkles size={32} />,
      link: "/services#nail-services"
    },
    {
      title: t('services.lashes.title'),
      description: t('services.lashes.description'),
      icon: <Eye size={32} />,
      link: "/services#eyelash-extensions"
    },
    {
      title: t('services.depilation.title'),
      description: t('services.depilation.description'),
      icon: <Scissors size={32} />,
      link: "/services#depilation"
    },
    {
      title: t('services.training.title'),
      description: t('services.training.description'),
      icon: <GraduationCap size={32} />,
      link: "/academy"
    }
  ];

  return (
    <section className="py-20 bg-beauty-lightpink">
      <div className="beauty-container">
        <h2 className="section-title">{t('services.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://www.kalendes.com/site/artdelabeaute/reserve" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beauty-button"
          >
            {t('bookNow')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
