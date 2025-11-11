
import React from "react";
import { Link } from "react-router-dom";
import GalleryItem from "../ui/GalleryItem";
import { useLanguage } from "../../context/LanguageContext";

const GallerySection = () => {
  const { t } = useLanguage();
  
  const galleryItems = [
    {
      image: "/images/image1.png",
      category: t('gallery.categories.nailArt'),
      title: t('gallery.items.manicure')
    },
    {
      image: "/images/image6.png",
      category: t('gallery.categories.eyelash'),
      title: t('gallery.items.lashes')
    },
    {
      image: "/images/team4.jpg",
      category: t('gallery.categories.team'),
      title: t('gallery.items.team')
    },
    {
      image: "/images/image4.png",
      category: t('gallery.categories.nailArt'),
      title: t('gallery.items.crystal')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="beauty-container">
        <h2 className="section-title">{t('gallery.title')}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              image={item.image}
              category={item.category}
              title={item.title}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="beauty-button">
            {t('gallery.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
