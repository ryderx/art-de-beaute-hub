
import React from "react";
import { Link } from "react-router-dom";
import GalleryItem from "../ui/GalleryItem";
import { useLanguage } from "../../context/LanguageContext";

const GallerySection = () => {
  const { t } = useLanguage();
  
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: t('gallery.categories.nailArt'),
      title: t('gallery.items.manicure')
    },
    {
      image: "https://images.unsplash.com/photo-1607779097040-28d8190595df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: t('gallery.categories.eyelash'),
      title: t('gallery.items.lashes')
    },
    {
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: t('gallery.categories.training'),
      title: t('gallery.items.certification')
    },
    {
      image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
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
