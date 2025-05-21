
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Available languages
type Language = 'fr' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.academy': 'Académie',
    'nav.gallery': 'Galerie',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',

    // Services
    'services.title': 'Nos Services',
    'services.nail.title': 'Services des Ongles',
    'services.nail.description': 'Des manucures et pédicures classiques à l\'art des ongles avancé et aux extensions, nos techniciens experts offrent précision et style.',
    'services.lashes.title': 'Extensions de Cils',
    'services.lashes.description': 'Améliorez votre beauté naturelle avec nos services d\'extensions de cils personnalisés qui ajoutent volume, longueur et définition à vos yeux.',
    'services.depilation.title': 'Épilation',
    'services.depilation.description': 'Profitez d\'une peau lisse et sans poils grâce à nos services d\'épilation efficaces et doux, conçus pour tous les types de peau.',
    'services.training.title': 'Formation Professionnelle',
    'services.training.description': 'Démarrez ou avancez votre carrière dans la beauté avec nos programmes de certification professionnelle, avec un apprentissage pratique et des instructions d\'experts.',
    
    // Academy
    'academy.title': 'Académie de Beauté',
    'academy.subtitle': 'Commencez ou avancez votre carrière dans l\'industrie de la beauté avec nos programmes de certification professionnelle.',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Nous aimerions avoir de vos nouvelles!',
    'contact.getInTouch': 'Entrer en Contact',
    'contact.location': 'Notre Emplacement',
    'contact.phone': 'Téléphone',
    'contact.email': 'E-mail',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.followUs': 'Suivez-Nous',
    'contact.bookAppointment': 'Prendre un Rendez-vous',
    'contact.bookDescription': 'Prêt à vivre nos services? Réservez votre rendez-vous en ligne avec notre système de planification facile.',
    'contact.findUs': 'Nous Trouver',
    
    // Business Hours
    'hours.monday': 'Lundi',
    'hours.tuesday': 'Mardi',
    'hours.wednesday': 'Mercredi',
    'hours.thursday': 'Jeudi',
    'hours.friday': 'Vendredi',
    'hours.saturday': 'Samedi',
    'hours.sunday': 'Dimanche',
    'hours.closed': 'Fermé',
    
    // General
    'bookNow': 'Réserver Maintenant',
    'viewAll': 'Voir Tout',
    'enrollNow': 'S\'inscrire Maintenant',
    'learnMore': 'En Savoir Plus',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.academy': 'Academia',
    'nav.gallery': 'Galería',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.nail.title': 'Servicios de Uñas',
    'services.nail.description': 'Desde manicuras y pedicuras clásicas hasta arte de uñas avanzado y extensiones, nuestros técnicos expertos proporcionan precisión y estilo.',
    'services.lashes.title': 'Extensiones de Pestañas',
    'services.lashes.description': 'Realce su belleza natural con nuestros servicios personalizados de extensiones de pestañas que añaden volumen, longitud y definición a sus ojos.',
    'services.depilation.title': 'Depilación',
    'services.depilation.description': 'Experimente una piel suave y sin vello con nuestros servicios efectivos y suaves de depilación, diseñados para todo tipo de piel.',
    'services.training.title': 'Formación Profesional',
    'services.training.description': 'Comience o avance su carrera en belleza con nuestros programas de certificación profesional, con aprendizaje práctico e instrucción experta.',
    
    // Academy
    'academy.title': 'Academia de Belleza',
    'academy.subtitle': 'Comience o avance su carrera en la industria de la belleza con nuestros programas de certificación profesional.',
    
    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': '¡Nos encantaría saber de usted!',
    'contact.getInTouch': 'Ponerse en Contacto',
    'contact.location': 'Nuestra Ubicación',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo Electrónico',
    'contact.hours': 'Horario',
    'contact.followUs': 'Síganos',
    'contact.bookAppointment': 'Reservar una Cita',
    'contact.bookDescription': '¿Listo para experimentar nuestros servicios? Reserve su cita en línea con nuestro fácil sistema de programación.',
    'contact.findUs': 'Encuéntrenos',
    
    // Business Hours
    'hours.monday': 'Lunes',
    'hours.tuesday': 'Martes',
    'hours.wednesday': 'Miércoles',
    'hours.thursday': 'Jueves',
    'hours.friday': 'Viernes',
    'hours.saturday': 'Sábado',
    'hours.sunday': 'Domingo',
    'hours.closed': 'Cerrado',
    
    // General
    'bookNow': 'Reservar Ahora',
    'viewAll': 'Ver Todo',
    'enrollNow': 'Inscribirse Ahora',
    'learnMore': 'Saber Más',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.academy': 'Academy',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',

    // Services
    'services.title': 'Our Services',
    'services.nail.title': 'Nail Services',
    'services.nail.description': 'From classic manicures and pedicures to advanced nail art and extensions, our expert technicians provide precision and style.',
    'services.lashes.title': 'Eyelash Extensions',
    'services.lashes.description': 'Enhance your natural beauty with customized lash extension services that add volume, length, and definition to your eyes.',
    'services.depilation.title': 'Depilation',
    'services.depilation.description': 'Experience smooth, hair-free skin with our effective and gentle waxing and hair removal services, designed for all skin types.',
    'services.training.title': 'Professional Training',
    'services.training.description': 'Start or advance your career in beauty with our professional certification programs, featuring hands-on learning and expert instruction.',
    
    // Academy
    'academy.title': 'Beauty Academy',
    'academy.subtitle': 'Start or advance your career in the beauty industry with our professional certification programs.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'d love to hear from you!',
    'contact.getInTouch': 'Get In Touch',
    'contact.location': 'Our Location',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.hours': 'Business Hours',
    'contact.followUs': 'Follow Us',
    'contact.bookAppointment': 'Book an Appointment',
    'contact.bookDescription': 'Ready to experience our services? Book your appointment online with our easy scheduling system.',
    'contact.findUs': 'Find Us',
    
    // Business Hours
    'hours.monday': 'Monday',
    'hours.tuesday': 'Tuesday',
    'hours.wednesday': 'Wednesday',
    'hours.thursday': 'Thursday',
    'hours.friday': 'Friday',
    'hours.saturday': 'Saturday',
    'hours.sunday': 'Sunday',
    'hours.closed': 'Closed',
    
    // General
    'bookNow': 'Book Now',
    'viewAll': 'View All',
    'enrollNow': 'Enroll Now',
    'learnMore': 'Learn More',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
