
import React from "react";
import Layout from "../components/layout/Layout";
import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialCard from "../components/ui/TestimonialCard";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service and class we deliver.",
      icon: <Star size={32} />,
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical standards.",
      icon: <CheckCircle size={32} />,
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of beauty techniques and education methods.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
    },
    {
      title: "Empowerment",
      description: "We believe in lifting others through knowledge and confidence-building services.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-raised"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>,
    },
  ];

  const team = [
    {
      name: "Isabella Gomez",
      role: "Founder & Master Nail Technician",
      bio: "With over 15 years of experience in the beauty industry, Isabella founded Art de la Beautée with a vision to provide exceptional beauty services and education in the Dominican Republic.",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "Sofia Rodriguez",
      role: "Head of Academy",
      bio: "Sofia oversees all educational programs, bringing her extensive teaching experience and passion for beauty education to help students achieve their professional goals.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Miguel Sanchez",
      role: "Master Eyelash Artist",
      bio: "Miguel is an internationally certified lash artist who specializes in creating natural-looking, customized lash extensions for each client's unique eye shape and style.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Gabriela Martinez",
      role: "Senior Nail Art Specialist",
      bio: "Known for her intricate designs and creative approach, Gabriela brings artistry to every nail service, turning simple manicures into works of art.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Client",
      quote: "The nail art service at Art de la Beautée exceeded all my expectations. Their attention to detail is unmatched, and the results were stunning!",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      name: "Carmen Diaz",
      role: "Nail Technician Graduate",
      quote: "The training program gave me all the skills I needed to start my own successful nail business. The instructors were knowledgeable and supportive throughout my journey.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Josefina Perez",
      role: "Client",
      quote: "I've been getting my lash extensions here for years, and I wouldn't go anywhere else. The technique is flawless and the staff is always professional.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            About Art de la Beautée
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            A distinguished beauty institute based in the Dominican Republic, dedicated to delivering 
            top-tier beauty services and professional education.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="beauty-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-playfair text-3xl font-semibold mb-6 text-beauty-darkpink">
                Our Story
              </h2>
              <p className="text-gray-700 mb-6">
                Art de la Beautée was founded in 2010 with a vision to create a space where beauty services 
                and professional education could coexist, elevating the standard of beauty care in the Dominican Republic.
              </p>
              <p className="text-gray-700 mb-6">
                What began as a small nail salon has grown into a comprehensive beauty institute offering 
                a wide range of services and professional certification programs. Our journey has been guided 
                by a commitment to excellence, innovation, and empowering individuals through beauty.
              </p>
              <p className="text-gray-700">
                Today, we are proud to be recognized as a leading beauty institute, known for both our 
                exceptional services and our rigorous educational programs that launch successful careers 
                in the beauty industry.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-beauty-gold rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Our Beauty Institute"
                  className="relative z-10 rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">Our Mission & Values</h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-700">
              To enhance confidence and self-expression through expert beauty services 
              while empowering individuals to build successful careers in the beauty industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="beauty-card h-full">
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="beauty-container">
          <h2 className="section-title">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="beauty-card h-full">
                <div className="p-6 text-center">
                  <div className="mb-4 w-32 h-32 rounded-full overflow-hidden mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-beauty-darkpink mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="beauty-container text-center">
          <h2 className="section-title">Experience the Art de la Beautée Difference</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Whether you're looking for premium beauty services or starting a career in the beauty industry, 
            we invite you to connect with us and discover the difference that expertise, quality, and 
            personalized attention can make.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="beauty-button">
              Explore Our Services
            </Link>
            <Link to="/contact" className="beauty-button-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
