
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    closeMenu();
  };

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.academy'), path: "/academy" },
    { name: t('nav.gallery'), path: "/gallery" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="beauty-container flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="font-playfair text-2xl font-bold text-beauty-darkpink">
            Art de la <span className="text-beauty-gold">Beautée</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="relative inline-block">
            <button 
              className="flex items-center text-beauty-darkpink hover:text-beauty-gold"
              aria-label="Language"
              onClick={(e) => {
                e.stopPropagation();
                const dropdown = document.getElementById("mobile-lang-dropdown");
                if (dropdown) {
                  dropdown.classList.toggle("hidden");
                }
              }}
            >
              <Globe size={20} />
              <span className="ml-1 uppercase">{language}</span>
            </button>
            <div id="mobile-lang-dropdown" className="hidden absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md z-50">
              <button onClick={() => changeLanguage("fr")} className="block w-full text-left px-4 py-2 text-sm hover:bg-beauty-pink">Français</button>
              <button onClick={() => changeLanguage("es")} className="block w-full text-left px-4 py-2 text-sm hover:bg-beauty-pink">Español</button>
              <button onClick={() => changeLanguage("en")} className="block w-full text-left px-4 py-2 text-sm hover:bg-beauty-pink">English</button>
            </div>
          </div>
          <button
            onClick={toggleMenu}
            className="text-beauty-darkpink hover:text-beauty-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-beauty-darkpink hover:text-beauty-gold transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative inline-block">
            <button 
              className="flex items-center text-beauty-darkpink hover:text-beauty-gold"
              aria-label="Language"
              onClick={(e) => {
                e.stopPropagation();
                const dropdown = document.getElementById("lang-dropdown");
                if (dropdown) {
                  dropdown.classList.toggle("hidden");
                }
              }}
            >
              <Globe size={20} />
              <span className="ml-1 uppercase">{language}</span>
            </button>
            <div id="lang-dropdown" className="hidden absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md z-50">
              <button onClick={() => changeLanguage("fr")} className="block w-full text-left px-4 py-2 text-sm hover:bg-beauty-pink">Français</button>
              <button onClick={() => changeLanguage("es")} className="block w-full text-left px-4 py-2 text-sm hover:bg-beauty-pink">Español</button>
              <button onClick={() => changeLanguage("en")} className="block w-full text-left px-4 py-2 text-sm hover:bg-beauty-pink">English</button>
            </div>
          </div>
          
          <a
            href="https://www.kalendes.com/site/artdelabeaute/reserve"
            target="_blank"
            rel="noopener noreferrer"
            className="beauty-button"
          >
            {t('nav.bookNow')}
          </a>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 bg-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-between items-center p-6 border-b border-beauty-pink">
            <span className="font-playfair text-2xl font-bold text-beauty-darkpink">
              Art de la <span className="text-beauty-gold">Beautée</span>
            </span>
            <button
              onClick={toggleMenu}
              className="text-beauty-darkpink"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center pt-10 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xl text-beauty-darkpink hover:text-beauty-gold transition-colors font-medium"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex space-x-4">
              <button onClick={() => changeLanguage("fr")} className={`px-3 py-1 rounded ${language === "fr" ? "bg-beauty-pink" : "bg-gray-100"}`}>FR</button>
              <button onClick={() => changeLanguage("es")} className={`px-3 py-1 rounded ${language === "es" ? "bg-beauty-pink" : "bg-gray-100"}`}>ES</button>
              <button onClick={() => changeLanguage("en")} className={`px-3 py-1 rounded ${language === "en" ? "bg-beauty-pink" : "bg-gray-100"}`}>EN</button>
            </div>
            
            <a
              href="https://www.kalendes.com/site/artdelabeaute/reserve"
              target="_blank"
              rel="noopener noreferrer"
              className="beauty-button mt-8"
              onClick={closeMenu}
            >
              {t('nav.bookNow')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
