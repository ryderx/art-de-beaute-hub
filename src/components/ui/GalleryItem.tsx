
import React, { useState } from "react";

interface GalleryItemProps {
  image: string;
  category: string;
  title: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, category, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-beauty-pink text-sm font-medium mb-2">{category}</span>
        <h3 className="text-white font-playfair text-xl">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
