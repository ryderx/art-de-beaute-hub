
import React from "react";
import Layout from "../components/layout/Layout";
import { NailPolish, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import BookingForm from "../components/ui/BookingForm";

const Services = () => {
  const services = [
    {
      id: "nail-services",
      title: "Nail Services",
      description: "From classic manicures and pedicures to advanced nail art and extensions, our expert technicians provide precision and style tailored to each client's personality and preferences.",
      image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <NailPolish size={32} />,
      treatments: [
        {
          name: "Classic Manicure",
          description: "Nail shaping, cuticle care, hand massage, and polish application",
          price: "$25"
        },
        {
          name: "Deluxe Pedicure",
          description: "Foot soak, exfoliation, nail care, massage, and polish",
          price: "$35"
        },
        {
          name: "Gel Polish Application",
          description: "Long-lasting gel polish with perfect shine and durability",
          price: "$30"
        },
        {
          name: "Nail Extensions",
          description: "Acrylic or gel extensions with custom length and shape",
          price: "$45+"
        },
        {
          name: "Nail Art Design",
          description: "Custom art, stones, stickers, or hand-painted designs",
          price: "$10-$30"
        }
      ]
    },
    {
      id: "eyelash-extensions",
      title: "Eyelash Extensions",
      description: "Enhance your natural beauty with customized lash extension services that add volume, length, and definition to your eyes.",
      image: "https://images.unsplash.com/photo-1562625964-ffe11143e6fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
      treatments: [
        {
          name: "Classic Lashes",
          description: "1:1 application for a natural, enhanced look",
          price: "$80"
        },
        {
          name: "Volume Lashes",
          description: "Multiple extensions per natural lash for added fullness",
          price: "$120"
        },
        {
          name: "Hybrid Lashes",
          description: "Combination of classic and volume techniques",
          price: "$100"
        },
        {
          name: "Lash Lift & Tint",
          description: "Semi-permanent curl and color for natural lashes",
          price: "$65"
        },
        {
          name: "Lash Maintenance",
          description: "Fill-in service for maintaining lash extensions",
          price: "$45-$65"
        }
      ]
    },
    {
      id: "depilation",
      title: "Depilation",
      description: "Experience smooth, hair-free skin with our effective and gentle waxing and hair removal services, designed for all skin types.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Scissors size={32} />,
      treatments: [
        {
          name: "Eyebrow Waxing",
          description: "Reshape and define your brows",
          price: "$15"
        },
        {
          name: "Lip & Chin Waxing",
          description: "Quick and effective facial hair removal",
          price: "$12"
        },
        {
          name: "Half Leg Waxing",
          description: "From ankle to knee or knee to thigh",
          price: "$30"
        },
        {
          name: "Full Leg Waxing",
          description: "Complete leg hair removal",
          price: "$50"
        },
        {
          name: "Brazilian Waxing",
          description: "Full bikini area hair removal",
          price: "$45"
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Our Beauty Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our professional beauty services designed to enhance your natural beauty
            and provide you with a luxurious, personalized experience.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16">
        <div className="beauty-container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-12 ${
                index !== services.length - 1 ? "border-b border-beauty-pink" : ""
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-beauty-pink w-12 h-12 rounded-full flex items-center justify-center text-beauty-darkpink mr-4">
                      {service.icon}
                    </div>
                    <h2 className="font-playfair text-3xl font-semibold text-beauty-darkpink">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-8">{service.description}</p>
                  
                  <h3 className="font-playfair text-xl font-semibold mb-4">
                    Treatments & Pricing
                  </h3>
                  <div className="space-y-4 mb-8">
                    {service.treatments.map((treatment, i) => (
                      <div key={i} className="flex justify-between items-start pb-2 border-b border-dashed border-beauty-pink">
                        <div>
                          <h4 className="font-medium">{treatment.name}</h4>
                          <p className="text-sm text-gray-600">{treatment.description}</p>
                        </div>
                        <span className="font-semibold text-beauty-darkpink">{treatment.price}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="beauty-button">
                    Book This Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-beauty-lightpink">
        <div className="beauty-container">
          <h2 className="section-title">Book Your Appointment</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <BookingForm type="service" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
