
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookingForm from "../ui/BookingForm";

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
              we're here to help. Reach out to us using the information below or fill out the form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Location</h4>
                  <address className="not-italic text-gray-600">
                    123 Beauty Avenue, Santo Domingo<br />
                    Dominican Republic
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <Phone size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Number</h4>
                  <p className="text-gray-600">+1 809 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <Mail size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Address</h4>
                  <p className="text-gray-600">info@artdelabeautee.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beauty-pink p-3 rounded-full mr-4">
                  <Clock size={24} className="text-beauty-darkpink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
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
                <a 
                  href="#" 
                  className="bg-beauty-pink hover:bg-beauty-darkpink text-beauty-darkpink hover:text-white p-2 rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-beauty-darkpink text-center">
                Book an Appointment
              </h3>
              <BookingForm type="service" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
