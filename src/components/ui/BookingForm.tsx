
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface BookingFormProps {
  type: "service" | "training";
}

const BookingForm: React.FC<BookingFormProps> = ({ type }) => {
  const { toast } = useToast();
  const { t } = useLanguage();
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
      title: type === "service" ? t('form.booking.success') : t('form.enrollment.success'),
      description: t('form.confirmation'),
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
        { value: "nail-service", label: t('services.nail.title') },
        { value: "eyelash-extensions", label: t('services.lashes.title') },
        { value: "depilation", label: t('services.depilation.title') },
      ]
    : [
        { value: "nail-technician", label: t('academy.programs.nailTech.title') },
        { value: "eyelash-artist", label: t('academy.programs.lashArtist.title') },
        { value: "beauty-specialist", label: t('academy.programs.specialist.title') },
      ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.name')}
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
              placeholder={t('form.namePlaceholder')}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.email')}
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
              placeholder={t('form.emailPlaceholder')}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.phone')}
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
              placeholder={t('form.phonePlaceholder')}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            {type === "service" ? t('form.serviceType') : t('form.programType')}
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
            {t('form.date')}
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
            {t('form.time')}
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
          {t('form.message')}
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
            placeholder={t('form.messagePlaceholder')}
          ></textarea>
        </div>
      </div>
      
      <div className="text-center pt-2">
        <button
          type="submit"
          className="beauty-button w-full md:w-auto"
        >
          {type === "service" ? t('form.bookAppointment') : t('form.enrollNow')}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
