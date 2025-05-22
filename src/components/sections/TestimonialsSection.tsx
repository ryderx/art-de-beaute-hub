
import React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "../../context/LanguageContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      quote: t('testimonials.client1.quote'),
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      name: t('testimonials.graduate1.name'),
      role: t('testimonials.graduate1.role'),
      quote: t('testimonials.graduate1.quote'),
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.role'),
      quote: t('testimonials.client2.quote'),
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: t('testimonials.graduate2.name'),
      role: t('testimonials.graduate2.role'),
      quote: t('testimonials.graduate2.quote'),
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    }
  ];

  return (
    <section className="py-20 bg-beauty-lightpink">
      <div className="beauty-container">
        <h2 className="section-title">{t('testimonials.title')}</h2>
        
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
