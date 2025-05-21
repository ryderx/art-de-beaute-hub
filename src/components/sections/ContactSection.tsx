
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="beauty-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-6 text-beauty-darkpink">
              Get In Touch
            </h3>
            <p className="text-gray-700 mb-8">
              Whether you're looking to book a service, enroll in our academy, or simply have a question, 
              we're here to help. Reach out to us using the information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Location</h4>
                  <address className="not-italic text-gray-600">
                    66 Rue Porte Saint-Jean<br />
                    45000 Orléans, France
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <Phone size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Number</h4>
                  <p className="text-gray-600">07.82.22.05.63</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <Mail size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Address</h4>
                  <p className="text-gray-600">munozjulia1977@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <Clock size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <div className="text-gray-600">
                    <p><strong>Lundi:</strong> 05:00 – 14:00</p>
                    <p><strong>Mardi:</strong> 05:00 – 14:00</p>
                    <p><strong>Mercredi:</strong> 05:00 – 14:00</p>
                    <p><strong>Jeudi:</strong> 05:00 – 14:00</p>
                    <p><strong>Vendredi:</strong> 05:00 – 14:00</p>
                    <p><strong>Samedi:</strong> 05:00 – 14:00</p>
                    <p><strong>Dimanche:</strong> Fermé</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-beauty-pink hover:bg-beauty-darkpink text-beauty-darkpink hover:text-white p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a 
                  href="#" 
                  className="bg-beauty-pink hover:bg-beauty-darkpink text-beauty-darkpink hover:text-white p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-beauty-darkpink">
                Book an Appointment
              </h3>
              <p className="text-gray-700 mb-6">
                Ready to experience our services? Book your appointment online with our easy scheduling system.
              </p>
              <a 
                href="https://www.kalendes.com/site/artdelabeaute/reserve" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="beauty-button inline-block"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
