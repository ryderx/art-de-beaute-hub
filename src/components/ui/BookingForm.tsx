
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

interface BookingFormProps {
  type: "service" | "training";
}

const BookingForm: React.FC<BookingFormProps> = ({ type }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: type === "service" ? "nail-service" : "nail-technician",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: type === "service" ? "Booking Request Sent" : "Enrollment Request Sent",
      description: "We'll contact you shortly to confirm your request.",
      variant: "default",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: type === "service" ? "nail-service" : "nail-technician",
      message: ""
    });
  };

  const serviceOptions = type === "service" 
    ? [
        { value: "nail-service", label: "Nail Services" },
        { value: "eyelash-extensions", label: "Eyelash Extensions" },
        { value: "depilation", label: "Depilation" },
      ]
    : [
        { value: "nail-technician", label: "Nail Technician Program" },
        { value: "eyelash-artist", label: "Eyelash Artist Program" },
        { value: "beauty-specialist", label: "Beauty Specialist Program" },
      ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-gray-400" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 rounded-md focus:ring-beauty-darkpink focus:border-beauty-darkpink p-3"
              placeholder="Your name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 rounded-md focus:ring-beauty-darkpink focus:border-beauty-darkpink p-3"
              placeholder="Your email"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone size={18} className="text-gray-400" />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 rounded-md focus:ring-beauty-darkpink focus:border-beauty-darkpink p-3"
              placeholder="Your phone"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            {type === "service" ? "Service" : "Program"} Type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md focus:ring-beauty-darkpink focus:border-beauty-darkpink p-3"
            required
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar size={18} className="text-gray-400" />
            </div>
            <input
              id="date"
              name="date"
              type="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 rounded-md focus:ring-beauty-darkpink focus:border-beauty-darkpink p-3"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock size={18} className="text-gray-400" />
            </div>
            <input
              id="time"
              name="time"
              type="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="pl-10 w-full border border-gray-300 rounded-md focus:ring-beauty-darkpink focus:border-beauty-darkpink p-3"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
            <MessageSquare size={18} className="text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="pl-10 w-full border border-gray-300 rounded-md focus:ring-beauty-darkpink focus:border-beauty-darkpink p-3"
            placeholder="Tell us more about your request..."
          ></textarea>
        </div>
      </div>
      
      <div className="text-center pt-2">
        <button
          type="submit"
          className="beauty-button w-full md:w-auto"
        >
          {type === "service" ? "Book Appointment" : "Enroll Now"}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
