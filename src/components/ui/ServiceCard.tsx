
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="beauty-card group">
      <div className="p-6">
        <div className="flex justify-center mb-6">
          <div className="bg-beauty-pink w-16 h-16 rounded-full flex items-center justify-center text-beauty-darkpink">
            {icon}
          </div>
        </div>
        <h3 className="font-playfair text-xl text-center font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 text-center mb-6">{description}</p>
        <div className="text-center">
          <Link
            to={link}
            className="inline-flex items-center text-beauty-darkpink hover:text-beauty-gold transition-colors"
          >
            Learn more <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
