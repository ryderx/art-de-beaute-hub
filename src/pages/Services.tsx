
import React from "react";
import Layout from "../components/layout/Layout";
import { Scissors, Sparkles, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: "nail-services",
      title: t('services.nail.title'),
      description: t('services.nail.description'),
      image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Sparkles size={32} />,
      treatments: [
        {
          name: t('services.treatments.nail.manicure.name'),
          description: t('services.treatments.nail.manicure.description')
        },
        {
          name: t('services.treatments.nail.pedicure.name'),
          description: t('services.treatments.nail.pedicure.description')
        },
        {
          name: t('services.treatments.nail.gel.name'),
          description: t('services.treatments.nail.gel.description')
        },
        {
          name: t('services.treatments.nail.extensions.name'),
          description: t('services.treatments.nail.extensions.description')
        },
        {
          name: t('services.treatments.nail.art.name'),
          description: t('services.treatments.nail.art.description')
        }
      ]
    },
    {
      id: "eyelash-extensions",
      title: t('services.lashes.title'),
      description: t('services.lashes.description'),
      image: "https://images.unsplash.com/photo-1562625964-ffe11143e6fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Eye size={32} />,
      treatments: [
        {
          name: t('services.treatments.lashes.classic.name'),
          description: t('services.treatments.lashes.classic.description')
        },
        {
          name: t('services.treatments.lashes.volume.name'),
          description: t('services.treatments.lashes.volume.description')
        },
        {
          name: t('services.treatments.lashes.hybrid.name'),
          description: t('services.treatments.lashes.hybrid.description')
        },
        {
          name: t('services.treatments.lashes.lift.name'),
          description: t('services.treatments.lashes.lift.description')
        },
        {
          name: t('services.treatments.lashes.maintenance.name'),
          description: t('services.treatments.lashes.maintenance.description')
        }
      ]
    },
    {
      id: "depilation",
      title: t('services.depilation.title'),
      description: t('services.depilation.description'),
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Scissors size={32} />,
      treatments: [
        {
          name: t('services.treatments.depilation.eyebrow.name'),
          description: t('services.treatments.depilation.eyebrow.description')
        },
        {
          name: t('services.treatments.depilation.facial.name'),
          description: t('services.treatments.depilation.facial.description')
        },
        {
          name: t('services.treatments.depilation.halfLeg.name'),
          description: t('services.treatments.depilation.halfLeg.description')
        },
        {
          name: t('services.treatments.depilation.fullLeg.name'),
          description: t('services.treatments.depilation.fullLeg.description')
        },
        {
          name: t('services.treatments.depilation.brazilian.name'),
          description: t('services.treatments.depilation.brazilian.description')
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
            {t('services.description')}
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
                    {t('services.treatments.title')}
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
          <h2 className="section-title">{t('services.cta.title')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t('services.cta.description')}
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
