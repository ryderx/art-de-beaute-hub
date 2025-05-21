
import React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
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
    {
      name: "Luisa Hernandez",
      role: "Beauty Specialist Graduate",
      quote: "Learning at Art de la Beautée was transformative. The comprehensive curriculum and hands-on practice prepared me fully for a career in the beauty industry.",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    }
  ];

  return (
    <section className="py-20 bg-beauty-lightpink">
      <div className="beauty-container">
        <h2 className="section-title">Client Testimonials</h2>
        
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
