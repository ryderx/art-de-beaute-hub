
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-beauty-lightpink pt-16 pb-8">
      <div className="beauty-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-beauty-darkpink mb-6">
              Art de la <span className="text-beauty-gold">Beautée</span>
            </h3>
            <p className="text-gray-600 mb-4">
              A distinguished beauty institute based in the Dominican Republic, dedicated to 
              delivering top-tier beauty services and professional education.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-beauty-darkpink mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-beauty-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-beauty-darkpink mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">Nail Services</li>
              <li className="text-gray-600">Eyelash Extensions</li>
              <li className="text-gray-600">Depilation</li>
              <li className="text-gray-600">Professional Training</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl text-beauty-darkpink mb-6">Contact Us</h4>
            <address className="not-italic text-gray-600 space-y-3">
              <p>Dominican Republic</p>
              <p>Email: info@artdelabeautee.com</p>
              <p>Phone: +1 809 123 4567</p>
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
              <a 
                href="#" 
                className="text-beauty-darkpink hover:text-beauty-gold transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beauty-pink pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Art de la Beautée. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
