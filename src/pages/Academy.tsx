import React from "react";
import Layout from "../components/layout/Layout";
import { GraduationCap, Sparkles, Eye, Scissors } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Academy = () => {
  const { t } = useLanguage();
  
  const programs = [
    {
      id: "nail-technician",
      title: t('academy.programs.nailTechnician.title'),
      description: t('academy.programs.nailTechnician.description'),
      image: "/images/formation_ongles.jpg",
      icon: <Sparkles size={32} />,
      duration: t('academy.programs.nailTechnician.duration'),
      level: t('academy.programs.nailTechnician.level'),
      modules: [
        t('academy.programs.nailTechnician.modules.theory'),
        t('academy.programs.nailTechnician.modules.hygiene'),
        t('academy.programs.nailTechnician.modules.manicure'),
        t('academy.programs.nailTechnician.modules.pedicure'),
        t('academy.programs.nailTechnician.modules.gel'),
        t('academy.programs.nailTechnician.modules.art')
      ]
    },
    {
      id: "eyelash-artist",
      title: t('academy.programs.eyelashArtist.title'),
      description: t('academy.programs.eyelashArtist.description'),
      image: "/images/formation_cils.jpg",
      icon: <Eye size={32} />,
      duration: t('academy.programs.eyelashArtist.duration'),
      level: t('academy.programs.eyelashArtist.level'),
      modules: [
        t('academy.programs.eyelashArtist.modules.anatomy'),
        t('academy.programs.eyelashArtist.modules.safety'),
        t('academy.programs.eyelashArtist.modules.classic'),
        t('academy.programs.eyelashArtist.modules.volume'),
        t('academy.programs.eyelashArtist.modules.hybrid'),
        t('academy.programs.eyelashArtist.modules.maintenance')
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
      <section className="relative pt-32 pb-16 bg-academy-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t('academy.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('academy.description')}
          </p>
        </div>
      </section>

      {/* Programs Details */}
      <section className="py-16">
        <div className="beauty-container">
          <h2 className="section-title">{t('academy.programs.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-academy-blue w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                      {program.icon}
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-academy-blue">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  {program.duration && (
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>{t('academy.duration')}:</strong> {program.duration}
                    </p>
                  )}
                  {program.level && (
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>{t('academy.level')}:</strong> {program.level}
                    </p>
                  )}
                  {program.modules && (
                    <div>
                      <h4 className="font-semibold mb-2">{t('academy.modules')}</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {Array.isArray(program.modules) ? (
                          program.modules.map((module, index) => (
                            <li key={index}>{module}</li>
                          ))
                        ) : (
                          <li>{program.modules}</li>
                        )}
                      </ul>
                    </div>
                  )}
                  {program.treatments && (
                    <div>
                      <h4 className="font-semibold mb-2">{t('services.treatments.title')}</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600">
                        {program.treatments.map((treatment, index) => (
                          <li key={index}>
                            <strong>{treatment.name}:</strong> {treatment.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-academy-lightblue">
        <div className="beauty-container text-center">
          <h2 className="section-title">{t('academy.cta.title')}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t('academy.cta.description')}
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

export default Academy;
