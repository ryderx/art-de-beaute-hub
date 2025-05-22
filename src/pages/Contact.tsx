
import React from "react";
import Layout from "../components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="beauty-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-semibold mb-8 text-beauty-darkpink">
                {t('contact.getInTouch')}
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <MapPin size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.location')}</h3>
                    <address className="not-italic text-gray-600">
                      66 Rue Porte Saint-Jean<br />
                      45000 Orléans, France
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <Phone size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.phone')}</h3>
                    <p className="text-gray-600">07.82.22.05.63</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <Mail size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.email')}</h3>
                    <p className="text-gray-600">munozjulia1977@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <Clock size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.hours')}</h3>
                    <div className="text-gray-600">
                      <p><strong>{t('hours.monday')}:</strong> {t('hours.timeRange')}</p>
                      <p><strong>{t('hours.tuesday')}:</strong> {t('hours.timeRange')}</p>
                      <p><strong>{t('hours.wednesday')}:</strong> {t('hours.timeRange')}</p>
                      <p><strong>{t('hours.thursday')}:</strong> {t('hours.timeRange')}</p>
                      <p><strong>{t('hours.friday')}:</strong> {t('hours.timeRange')}</p>
                      <p><strong>{t('hours.saturday')}:</strong> {t('hours.timeRange')}</p>
                      <p><strong>{t('hours.sunday')}:</strong> {t('hours.closed')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-xl mb-4">{t('contact.followUs')}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-beauty-pink hover:bg-beauty-darkpink text-beauty-darkpink hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-beauty-pink hover:bg-beauty-darkpink text-beauty-darkpink hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="font-playfair text-2xl font-semibold mb-6 text-beauty-darkpink text-center">
                  {t('contact.bookAppointment')}
                </h2>
                <p className="text-gray-700 mb-6">
                  {t('contact.bookDescription')}
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">{t('contact.findUs')}</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.2225093347365!2d1.9039099764026876!3d47.90390397121231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e4e37b7f4b1d%3A0xe97f962856e18cb3!2s66%20Rue%20Porte%20Saint-Jean%2C%2045000%20Orl%C3%A9ans%2C%20France!5e0!3m2!1sen!2sus!4v1714500890872!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Art de la Beautée Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
