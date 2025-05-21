
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import GalleryItem from "../components/ui/GalleryItem";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "nail-art",
      title: "Elegant French Manicure"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1604659522058-4e9ef02d0b3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "nail-art",
      title: "Floral Nail Design"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "nail-art",
      title: "Crystal Embellishments"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1607779097040-28d8190595df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "eyelash",
      title: "Volume Lashes"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "eyelash",
      title: "Natural Lash Extensions"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "eyelash",
      title: "Dramatic Lash Look"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "training",
      title: "Student Certification"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "training",
      title: "Hands-on Training"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1621178356935-bf9c56c0cca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "nail-art",
      title: "Geometric Nail Art"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1599206676335-193c82b13c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "training",
      title: "Classroom Instruction"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1647626941504-59965d502947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "eyelash",
      title: "Classic Lash Set"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1635368725375-0231a5513151?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "nail-art",
      title: "Glitter Accent Nails"
    }
  ];

  const filters = [
    { id: "all", name: "All" },
    { id: "nail-art", name: "Nail Art" },
    { id: "eyelash", name: "Eyelash Extensions" },
    { id: "training", name: "Training" },
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
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our portfolio of nail art, eyelash extensions, and training programs.
            Get inspired for your next beauty appointment or career path.
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
                    ? "Nail Art" 
                    : item.category === "eyelash" 
                    ? "Eyelash Extensions" 
                    : "Training"
                }
                title={item.title}
              />
            ))}
          </div>

          {/* Empty state if no items match filter */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No gallery items found for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
