import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import GalleryItem from "../components/ui/GalleryItem";
import { useLanguage } from "../context/LanguageContext";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: 1,
      image: "/images/image1.png",
      category: "nail-art",
      title: "Elegant French Manicure"
    },
    {
      id: 2,
      image: "/images/image5.png",
      category: "nail-art",
      title: "Floral Nail Design"
    },
    {
      id: 3,
      image: "/images/image4.png",
      category: "nail-art",
      title: "Crystal Embellishments"
    },
    {
      id: 4,
      image: "images/volumee-lashes.jpg",
      category: "eyelash",
      title: "Volume Lashes"
    },
    {
      id: 5,
      image: "images/team1.jpg",
      category: "team",
      title: "Natural Lash Extensions"
    },
    {
      id: 6,
      image: "images/team2.jpg",
      category: "team",
      title: "Dramatic Lash Look"
    },
    {
      id: 7,
      image: "/images/team4.jpg",
      category: "team",
      title: "Student Certification"
    },
    {
      id: 8,
      image: "/images/team5.jpg",
      category: "team",
      title: "Hands-on Training"
    },
    {
      id: 9,
      image: "/images/image6.png",
      category: "nail-art",
      title: "Geometric Nail Art"
    },
    {
      id: 10,
      image: "/images/nail1.jpg",
      category: "nail-art",
      title: "Classroom Instruction"
    },
    {
      id: 11,
      image: "/images/team3.jpg",
      category: "team",
      title: "Classic Lash Set"
    },
    {
      id: 12,
      image: "/images/image2.png",
      category: "nail-art",
      title: "Glitter Accent Nails"
    }
  ];

  const filters = [
    { id: "all", name: t('gallery.filters.all') },
    { id: "nail-art", name: t('gallery.filters.nailArt') },
    { id: "eyelash", name: t('gallery.filters.eyelash') },
    { id: "team", name: t('gallery.filters.team') },
  ];
  
  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-beauty-gradient">
        <div className="beauty-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            {t('gallery.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="beauty-container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter.id 
                    ? "bg-beauty-darkpink text-white" 
                    : "bg-beauty-pink text-beauty-darkpink hover:bg-beauty-darkpink hover:text-white"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <GalleryItem
                key={item.id}
                image={item.image}
                category={
                  item.category === "nail-art" 
                    ? t('gallery.categories.nailArt')
                    : item.category === "eyelash" 
                    ? t('gallery.categories.eyelash')
                    : t('gallery.categories.training')
                }
                title={item.title}
              />
            ))}
          </div>

          {/* Empty state if no items match filter */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">{t('gallery.noItems')}</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
