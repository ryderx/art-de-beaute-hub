
import React from "react";
import Layout from "../components/layout/Layout";
import { GraduationCap, Award, Clock, CheckCircle, Users, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Academy = () => {
  const { t } = useLanguage();
  
  const programs = [
    {
      id: "nail-technician",
      title: "Nail Technician Program",
      description: "Become a certified nail technician with our comprehensive training program. Learn all aspects of nail care, from basic manicures to advanced nail art and extensions.",
      duration: "8 weeks",
      schedule: "Full-time and part-time options available",
      certification: "Professional Nail Technician Certificate",
      topics: [
        "Nail anatomy and health",
        "Manicure and pedicure techniques",
        "Gel and acrylic nail application",
        "Advanced nail art and design",
        "Salon safety and hygiene",
        "Client consultation and service",
        "Business management and marketing"
      ],
      image: "https://images.unsplash.com/photo-1610992754290-22e8f8338a4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "eyelash-artist",
      title: "Eyelash Extension Artist",
      description: "Master the art of eyelash extensions with our specialized training program. Learn to create beautiful, natural-looking lash enhancements for clients.",
      duration: "4 weeks",
      schedule: "Flexible scheduling options",
      certification: "Certified Lash Technician",
      topics: [
        "Eyelash anatomy and growth cycle",
        "Classic lash application techniques",
        "Volume and hybrid lash methods",
        "Client consultation and design",
        "Aftercare and maintenance",
        "Health and safety protocols",
        "Building your lash business"
      ],
      image: "https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "beauty-specialist",
      title: "Beauty Specialist Program",
      description: "Our most comprehensive program covers nail care, eyelash extensions, and depilation techniques for a complete beauty education.",
      duration: "12 weeks",
      schedule: "Full-time and part-time options available",
      certification: "Professional Beauty Specialist Certificate",
      topics: [
        "Complete nail technician training",
        "Full eyelash extension course",
        "Professional depilation techniques",
        "Makeup application fundamentals",
        "Client assessment and consultation",
        "Advanced beauty techniques",
        "Beauty business management"
      ],
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t('academy.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('academy.subtitle')}
          </p>
        </div>
      </section>

      {/* Why Choose Our Academy */}
      <section className="py-16">
        <div className="beauty-container">
          <h2 className="section-title">Why Choose Our Academy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-beauty-pink rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of experience and expertise.
              </p>
            </div>
            
            <div className="p-6 border border-beauty-pink rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                  <CheckCircle size={32} />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Hands-On Training</h3>
              <p className="text-gray-600">
                Practical, real-world experience with plenty of supervised practice time.
              </p>
            </div>
            
            <div className="p-6 border border-beauty-pink rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                  <Award size={32} />
                </div>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Recognized Certification</h3>
              <p className="text-gray-600">
                Earn industry-recognized certificates to boost your professional credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">Our Programs</h2>

          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className={`py-12 ${
                index !== programs.length - 1 ? "mb-8 border-b border-beauty-pink" : ""
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-beauty-pink w-12 h-12 rounded-full flex items-center justify-center text-beauty-darkpink mr-4">
                      <GraduationCap size={28} />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-beauty-darkpink">
                      {program.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Clock size={20} className="text-beauty-gold mr-2" />
                      <span><strong>Duration:</strong> {program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={20} className="text-beauty-gold mr-2" />
                      <span><strong>Schedule:</strong> {program.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={20} className="text-beauty-gold mr-2" />
                      <span><strong>Certification:</strong> {program.certification}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">What You'll Learn:</h4>
                  <ul className="list-disc list-inside space-y-1 mb-6">
                    {program.topics.map((topic, i) => (
                      <li key={i} className="text-gray-700">{topic}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href="https://www.kalendes.com/site/artdelabeaute/reserve"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="beauty-button"
                  >
                    {t('enrollNow')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="py-16 bg-beauty-lightpink">
        <div className="beauty-container text-center">
          <h2 className="section-title">Ready to Begin Your Beauty Career?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards your future in the beauty industry. 
            Book a consultation to learn more about our programs and start your enrollment process.
          </p>
          <a 
            href="https://www.kalendes.com/site/artdelabeaute/reserve"
            target="_blank"
            rel="noopener noreferrer" 
            className="beauty-button inline-block"
          >
            {t('enrollNow')}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Academy;
