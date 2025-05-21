
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { Scissors, GraduationCap, Sparkles, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Nail Services",
      description: "From classic manicures and pedicures to advanced nail art and extensions, our expert technicians provide precision and style.",
      icon: <Sparkles size={32} />,
      link: "/services#nail-services"
    },
    {
      title: "Eyelash Extensions",
      description: "Enhance your natural beauty with customized lash extension services that add volume, length, and definition to your eyes.",
      icon: <Eye size={32} />,
      link: "/services#eyelash-extensions"
    },
    {
      title: "Depilation",
      description: "Experience smooth, hair-free skin with our effective and gentle waxing and hair removal services, designed for all skin types.",
      icon: <Scissors size={32} />,
      link: "/services#depilation"
    },
    {
      title: "Professional Training",
      description: "Start or advance your career in beauty with our professional certification programs, featuring hands-on learning and expert instruction.",
      icon: <GraduationCap size={32} />,
      link: "/academy"
    }
  ];

  return (
    <section className="py-20 bg-beauty-lightpink">
      <div className="beauty-container">
        <h2 className="section-title">Our Services</h2>
        
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
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
