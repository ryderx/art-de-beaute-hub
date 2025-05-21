
import React from "react";
import Layout from "../components/layout/Layout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookingForm from "../components/ui/BookingForm";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you want to book a service, inquire about our academy, 
            or simply have a question, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="beauty-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-semibold mb-8 text-beauty-darkpink">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <MapPin size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
                    <address className="not-italic text-gray-600">
                      123 Beauty Avenue, Santo Domingo<br />
                      Dominican Republic
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <Phone size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                    <p className="text-gray-600">+1 809 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <Mail size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                    <p className="text-gray-600">info@artdelabeautee.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-beauty-pink p-4 rounded-full mr-6">
                    <Clock size={24} className="text-beauty-darkpink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Business Hours</h3>
                    <div className="text-gray-600">
                      <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                      <p><strong>Saturday:</strong> 10:00 AM - 5:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
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
                  <a 
                    href="#" 
                    className="bg-beauty-pink hover:bg-beauty-darkpink text-beauty-darkpink hover:text-white p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="font-playfair text-2xl font-semibold mb-6 text-beauty-darkpink text-center">
                  Book an Appointment
                </h2>
                <BookingForm type="service" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360353798!2d-69.93912081320047!3d18.47671883352199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1621532103960!5m2!1sen!2sus" 
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
