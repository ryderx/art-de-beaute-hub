
import React from "react";
import Layout from "../components/layout/Layout";
import { GraduationCap, Award, Clock, CheckCircle, Users, Calendar } from "lucide-react";
import BookingForm from "../components/ui/BookingForm";
import TestimonialCard from "../components/ui/TestimonialCard";

const Academy = () => {
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

  const testimonials = [
    {
      name: "Carmen Diaz",
      role: "Nail Technician Graduate",
      quote: "The training program gave me all the skills I needed to start my own successful nail business. The instructors were knowledgeable and supportive throughout my journey.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Luisa Hernandez",
      role: "Beauty Specialist Graduate",
      quote: "Learning at Art de la Beautée was transformative. The comprehensive curriculum and hands-on practice prepared me fully for a career in the beauty industry.",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      name: "Isabella Martinez",
      role: "Eyelash Artist Graduate",
      quote: "I'm so grateful for the eyelash extension program. The small class sizes and personalized attention helped me perfect my technique. Now I have my own loyal clientele!",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Beauty Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Start or advance your career in the beauty industry with our professional 
            certification programs. Learn from experienced instructors in a hands-on environment.
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
                  
                  <a href="#enroll" className="beauty-button">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16">
        <div className="beauty-container">
          <h2 className="section-title">Student Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enroll" className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">Enroll in a Program</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <BookingForm type="training" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academy;
