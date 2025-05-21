
import React from "react";
import Layout from "../components/layout/Layout";
import { Scissors, Sparkles, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: "nail-services",
      title: "Nail Services",
      description: "From classic manicures and pedicures to advanced nail art and extensions, our expert technicians provide precision and style tailored to each client's personality and preferences.",
      image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Sparkles size={32} />,
      treatments: [
        {
          name: "Classic Manicure",
          description: "Nail shaping, cuticle care, hand massage, and polish application"
        },
        {
          name: "Deluxe Pedicure",
          description: "Foot soak, exfoliation, nail care, massage, and polish"
        },
        {
          name: "Gel Polish Application",
          description: "Long-lasting gel polish with perfect shine and durability"
        },
        {
          name: "Nail Extensions",
          description: "Acrylic or gel extensions with custom length and shape"
        },
        {
          name: "Nail Art Design",
          description: "Custom art, stones, stickers, or hand-painted designs"
        }
      ]
    },
    {
      id: "eyelash-extensions",
      title: "Eyelash Extensions",
      description: "Enhance your natural beauty with customized lash extension services that add volume, length, and definition to your eyes.",
      image: "https://images.unsplash.com/photo-1562625964-ffe11143e6fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Eye size={32} />,
      treatments: [
        {
          name: "Classic Lashes",
          description: "1:1 application for a natural, enhanced look"
        },
        {
          name: "Volume Lashes",
          description: "Multiple extensions per natural lash for added fullness"
        },
        {
          name: "Hybrid Lashes",
          description: "Combination of classic and volume techniques"
        },
        {
          name: "Lash Lift & Tint",
          description: "Semi-permanent curl and color for natural lashes"
        },
        {
          name: "Lash Maintenance",
          description: "Fill-in service for maintaining lash extensions"
        }
      ]
    },
    {
      id: "depilation",
      title: "Depilation",
      description: "Experience smooth, hair-free skin with our effective and gentle waxing and hair removal services, designed for all skin types.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Scissors size={32} />,
      treatments: [
        {
          name: "Eyebrow Waxing",
          description: "Reshape and define your brows"
        },
        {
          name: "Lip & Chin Waxing",
          description: "Quick and effective facial hair removal"
        },
        {
          name: "Half Leg Waxing",
          description: "From ankle to knee or knee to thigh"
        },
        {
          name: "Full Leg Waxing",
          description: "Complete leg hair removal"
        },
        {
          name: "Brazilian Waxing",
          description: "Full bikini area hair removal"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our professional beauty services designed to enhance your natural beauty
            and provide you with a luxurious, personalized experience.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="beauty-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-12 ${
                index !== services.length - 1 ? "border-b border-beauty-pink" : ""
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-beauty-pink w-12 h-12 rounded-full flex items-center justify-center text-beauty-darkpink mr-4">
                      {service.icon}
                    </div>
                    <h2 className="font-playfair text-3xl font-semibold text-beauty-darkpink">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-8">{service.description}</p>
                  
                  <h3 className="font-playfair text-xl font-semibold mb-4">
                    Treatments
                  </h3>
                  <div className="space-y-4 mb-8">
                    {service.treatments.map((treatment, i) => (
                      <div key={i} className="pb-2 border-b border-dashed border-beauty-pink">
                        <div>
                          <h4 className="font-medium">{treatment.name}</h4>
                          <p className="text-sm text-gray-600">{treatment.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
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
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container text-center">
          <h2 className="section-title">Ready to Experience Our Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our expert team take care of all your beauty needs.
          </p>
          <a 
            href="https://www.kalendes.com/site/artdelabeaute/reserve"
            target="_blank"
            rel="noopener noreferrer"
            className="beauty-button inline-block"
          >
            {t('bookNow')}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
