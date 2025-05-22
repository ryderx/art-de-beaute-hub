
import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Calendar, Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const AcademySection = () => {
  const { t } = useLanguage();
  
  const courses = [
    {
      title: t('academy.programs.nailTech.title'),
      features: [
        t('academy.programs.nailTech.topics.anatomy'),
        t('academy.programs.nailTech.topics.techniques'),
        t('academy.programs.nailTech.topics.application'),
        t('academy.programs.nailTech.topics.business')
      ],
      duration: t('academy.programs.nailTech.duration'),
      certification: t('academy.programs.nailTech.certification'),
    },
    {
      title: t('academy.programs.lashArtist.title'),
      features: [
        t('academy.programs.lashArtist.topics.anatomy'),
        t('academy.programs.lashArtist.topics.classic'),
        t('academy.programs.lashArtist.topics.consultation'),
        t('academy.programs.lashArtist.topics.safety')
      ],
      duration: t('academy.programs.lashArtist.duration'),
      certification: t('academy.programs.lashArtist.certification'),
    },
    {
      title: t('academy.programs.specialist.title'),
      features: [
        t('academy.programs.specialist.topics.nailTech'),
        t('academy.programs.specialist.topics.lashExtension'),
        t('academy.programs.specialist.topics.depilation'),
        t('academy.programs.specialist.topics.business')
      ],
      duration: t('academy.programs.specialist.duration'),
      certification: t('academy.programs.specialist.certification'),
    }
  ];

  return (
    <section className="py-20 bg-beauty-lightpink">
      <div className="beauty-container">
        <h2 className="section-title">{t('academy.title')}</h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-700">
            {t('academy.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="beauty-card h-full">
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-center">
                  {course.title}
                </h3>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                    <GraduationCap size={32} />
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-beauty-darkpink" />
                    <span>{t('academy.programDetails.duration')}: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-beauty-darkpink" />
                    <span>{t('academy.programDetails.certification')}: {course.certification}</span>
                  </div>
                </div>
                
                <div className="border-t border-beauty-pink pt-4">
                  <h4 className="font-medium mb-2">{t('academy.programDetails.learn')}</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-beauty-gold mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/academy" className="beauty-button">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
