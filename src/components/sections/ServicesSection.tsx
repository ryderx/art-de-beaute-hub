
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { NailPolish, Scissors, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Nail Services",
      description: "From classic manicures and pedicures to advanced nail art and extensions, our expert technicians provide precision and style.",
      icon: <NailPolish size={32} />,
      link: "/services#nail-services"
    },
    {
      title: "Eyelash Extensions",
      description: "Enhance your natural beauty with customized lash extension services that add volume, length, and definition to your eyes.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
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
          <Link to="/services" className="beauty-button">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
