
import React from "react";
import Layout from "../components/layout/Layout";
import { GraduationCap, Award, Clock, CheckCircle, Users, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Academy = () => {
  const { t } = useLanguage();
  
  const programs = [
    {
      id: "nail-technician",
      title: t('academy.programs.nailTech.title'),
      description: t('academy.programs.nailTech.description'),
      duration: t('academy.programs.nailTech.duration'),
      schedule: t('academy.programs.nailTech.schedule'),
      certification: t('academy.programs.nailTech.certification'),
      topics: [
        t('academy.programs.nailTech.topics.anatomy'),
        t('academy.programs.nailTech.topics.techniques'),
        t('academy.programs.nailTech.topics.application'),
        t('academy.programs.nailTech.topics.art'),
        t('academy.programs.nailTech.topics.safety'),
        t('academy.programs.nailTech.topics.consultation'),
        t('academy.programs.nailTech.topics.business')
      ],
      image: "/images/formation_ongles.jpg"
    },
    {
      id: "eyelash-artist",
      title: t('academy.programs.lashArtist.title'),
      description: t('academy.programs.lashArtist.description'),
      duration: t('academy.programs.lashArtist.duration'),
      schedule: t('academy.programs.lashArtist.schedule'),
      certification: t('academy.programs.lashArtist.certification'),
      topics: [
        t('academy.programs.lashArtist.topics.anatomy'),
        t('academy.programs.lashArtist.topics.classic'),
        t('academy.programs.lashArtist.topics.volume'),
        t('academy.programs.lashArtist.topics.consultation'),
        t('academy.programs.lashArtist.topics.aftercare'),
        t('academy.programs.lashArtist.topics.safety'),
        t('academy.programs.lashArtist.topics.business')
      ],
      image: "/images/formation_cils.jpg"
    },
    {
      id: "eyelash-artist",
      title: t('academy.programs.lashArtist.title'),
      description: t('academy.programs.lashArtist.description'),
      duration: t('academy.programs.lashArtist.duration'),
      schedule: t('academy.programs.lashArtist.schedule'),
      certification: t('academy.programs.lashArtist.certification'),
      topics: [
        t('academy.programs.lashArtist.topics.anatomy'),
        t('academy.programs.lashArtist.topics.classic'),
        t('academy.programs.lashArtist.topics.volume'),
        t('academy.programs.lashArtist.topics.consultation'),
        t('academy.programs.lashArtist.topics.aftercare'),
        t('academy.programs.lashArtist.topics.safety'),
        t('academy.programs.lashArtist.topics.business')
      ],
      image: "/images/formation_cils.jpg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t('academy.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('academy.subtitle')}
          </p>
        </div>
      </section>

      {/* Why Choose Our Academy */}
      <section className="py-16">
        <div className="beauty-container">
          <h2 className="section-title">{t('academy.whyChoose.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-beauty-pink rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">{t('academy.whyChoose.instructors.title')}</h3>
              <p className="text-gray-600">
                {t('academy.whyChoose.instructors.description')}
              </p>
            </div>
            
            <div className="p-6 border border-beauty-pink rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                  <CheckCircle size={32} />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">{t('academy.whyChoose.training.title')}</h3>
              <p className="text-gray-600">
                {t('academy.whyChoose.training.description')}
              </p>
            </div>
            
            <div className="p-6 border border-beauty-pink rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                  <Award size={32} />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">{t('academy.whyChoose.certification.title')}</h3>
              <p className="text-gray-600">
                {t('academy.whyChoose.certification.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">{t('academy.programs.title')}</h2>

          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className={`py-12 ${
                index !== programs.length - 1 ? "mb-8 border-b border-beauty-pink" : ""
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-beauty-pink w-12 h-12 rounded-full flex items-center justify-center text-beauty-darkpink mr-4">
                      <GraduationCap size={28} />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-beauty-darkpink">
                      {program.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Clock size={20} className="text-beauty-gold mr-2" />
                      <span><strong>{t('academy.programDetails.duration')}:</strong> {program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={20} className="text-beauty-gold mr-2" />
                      <span><strong>{t('academy.programDetails.schedule')}:</strong> {program.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={20} className="text-beauty-gold mr-2" />
                      <span><strong>{t('academy.programDetails.certification')}:</strong> {program.certification}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{t('academy.programDetails.learn')}</h4>
                  <ul className="list-disc list-inside space-y-1 mb-6">
                    {program.topics.map((topic, i) => (
                      <li key={i} className="text-gray-700">{topic}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href="https://www.kalendes.com/site/artdelabeaute/reserve"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="beauty-button"
                  >
                    {t('enrollNow')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="py-16 bg-beauty-lightpink">
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
            {t('enrollNow')}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Academy;
