
import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Calendar, Check } from "lucide-react";

const AcademySection = () => {
  const courses = [
    {
      title: "Nail Technician Program",
      features: [
        "Comprehensive training in nail care techniques",
        "Advanced nail art and design",
        "Gel and acrylic nail application",
        "Business and client management skills"
      ],
      duration: "8 weeks",
      certification: "Professional Nail Technician Certificate",
    },
    {
      title: "Eyelash Extension Artist",
      features: [
        "Classic and volume lash application techniques",
        "Lash health and maintenance",
        "Client consultation and styling",
        "Safety and hygiene protocols"
      ],
      duration: "4 weeks",
      certification: "Certified Lash Technician",
    },
    {
      title: "Beauty Specialist Program",
      features: [
        "Combined nail, lash, and depilation training",
        "Advanced techniques in all areas",
        "Product knowledge and selection",
        "Salon management and entrepreneurship"
      ],
      duration: "12 weeks",
      certification: "Professional Beauty Specialist Certificate",
    }
  ];

  return (
    <section className="py-20 bg-beauty-lightpink">
      <div className="beauty-container">
        <h2 className="section-title">Beauty Academy</h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xl text-gray-700">
            Start or advance your career in the beauty industry with our professional 
            certification programs. Learn from experienced instructors in a hands-on environment.
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
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-beauty-darkpink" />
                    <span>Certification: {course.certification}</span>
                  </div>
                </div>
                
                <div className="border-t border-beauty-pink pt-4">
                  <h4 className="font-medium mb-2">What You'll Learn:</h4>
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
                    Learn More
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
