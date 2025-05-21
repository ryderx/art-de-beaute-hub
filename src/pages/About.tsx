
import React from "react";
import Layout from "../components/layout/Layout";
import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service and class we deliver.",
      icon: <Star size={32} />,
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards.",
      icon: <CheckCircle size={32} />,
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of beauty techniques and education methods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
    },
    {
      title: "Empowerment",
      description: "We believe in lifting others through knowledge and confidence-building services.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-raised"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="beauty-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-playfair text-3xl font-semibold mb-6 text-beauty-darkpink">
                {t('about.story.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('about.story.paragraph2')}
              </p>
              <p className="text-gray-700">
                {t('about.story.paragraph3')}
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-beauty-gold rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Our Beauty Institute"
                  className="relative z-10 rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">{t('about.mission.title')}</h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-700">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="beauty-card h-full">
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">{t(`about.values.${value.title.toLowerCase()}.title`)}</h3>
                  <p className="text-gray-600">{t(`about.values.${value.title.toLowerCase()}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="beauty-container text-center">
          <h2 className="section-title">{t('about.cta.title')}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {t('about.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="beauty-button">
              {t('about.cta.services')}
            </Link>
            <Link to="/contact" className="beauty-button-outline">
              {t('about.cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
