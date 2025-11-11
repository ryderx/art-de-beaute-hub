
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-beauty-lightpink pt-16 pb-8">
      <div className="beauty-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-beauty-darkpink mb-6">
              Art de la <span className="text-beauty-gold">Beauté</span>
            </h3>
            <p className="text-gray-600 mb-4">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-beauty-darkpink mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-beauty-darkpink mb-6">{t('services.title')}</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">{t('services.nail.title')}</li>
              <li className="text-gray-600">{t('services.lashes.title')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-beauty-darkpink mb-6">{t('contact.title')}</h4>
            <address className="not-italic text-gray-600 space-y-3">
              <p>66 Rue Porte Saint-Jean, 45000 Orléans, France</p>
              <p>Email: munozjulia1977@gmail.com</p>
              <p>Telephone: 07.82.22.05.63</p>
            </address>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-beauty-darkpink hover:text-beauty-gold transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="#" 
                className="text-beauty-darkpink hover:text-beauty-gold transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beauty-pink pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Art de la Beauté. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
