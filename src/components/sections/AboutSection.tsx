
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="beauty-container">
        <h2 className="section-title">About Art de la Beautée</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-beauty-gold rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our Beauty Institute"
                className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="font-playfair text-3xl font-semibold mb-6 text-beauty-darkpink">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              To enhance confidence and self-expression through expert beauty services 
              while empowering individuals to build successful careers in the beauty industry.
            </p>
            
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Why Choose Art de la Beautée?
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-beauty-gold">
                  <ChevronRight size={20} />
                </span>
                <span>
                  <strong className="font-medium">Certified Expertise:</strong> Our team of professionals is 
                  trained and certified to deliver both beauty services and high-level education.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 text-beauty-gold">
                  <ChevronRight size={20} />
                </span>
                <span>
                  <strong className="font-medium">Commitment to Quality:</strong> We use only the best products 
                  and follow industry-leading standards.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 text-beauty-gold">
                  <ChevronRight size={20} />
                </span>
                <span>
                  <strong className="font-medium">Empowerment Through Education:</strong> We believe in lifting 
                  others through knowledge, offering real-world skills for a lasting career.
                </span>
              </li>
              <li className="flex">
                <span className="mr-2 text-beauty-gold">
                  <ChevronRight size={20} />
                </span>
                <span>
                  <strong className="font-medium">Client-Centered Experience:</strong> Every service is 
                  customized to meet the unique needs and goals of our clients and students.
                </span>
              </li>
            </ul>
            
            <Link to="/about" className="beauty-button">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
