
import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, image }) => {
  return (
    <div className="beauty-card p-8">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-playfair text-lg font-semibold mb-1">{name}</h4>
        <p className="text-beauty-darkpink text-sm mb-4">{role}</p>
        <div className="mb-4 text-beauty-gold">
          {/* Stars */}
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mx-0.5"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            ))}
          </div>
        </div>
        <blockquote>
          <p className="text-center text-gray-600 italic">{quote}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
