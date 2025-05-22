
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

    // About Page
    'about.title': 'À propos de Art de la Beautée',
    'about.subtitle': 'Un institut de beauté distingué basé à Orléans, France, dédié à la prestation de services de beauté et d\'éducation professionnelle de premier ordre.',
    'about.story.title': 'Notre Histoire',
    'about.story.paragraph1': 'Art de la Beautée a été fondé en 2010 avec la vision de créer un espace où les services de beauté et l\'éducation professionnelle pourraient coexister, élevant la norme des soins de beauté en France.',
    'about.story.paragraph2': 'Ce qui a commencé comme un petit salon d\'ongles est devenu un institut de beauté complet offrant une large gamme de services et de programmes de certification professionnelle. Notre parcours a été guidé par un engagement envers l\'excellence, l\'innovation et l\'autonomisation des individus par la beauté.',
    'about.story.paragraph3': 'Aujourd\'hui, nous sommes fiers d\'être reconnus comme un institut de beauté de premier plan, connu à la fois pour nos services exceptionnels et nos programmes éducatifs rigoureux qui lancent des carrières réussies dans l\'industrie de la beauté.',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Améliorer la confiance et l\'expression de soi grâce à des services de beauté d\'experts tout en permettant aux individus de construire des carrières réussies dans l\'industrie de la beauté.',
    'about.whyChoose': 'Pourquoi Choisir Art de la Beautée?',
    'about.reasons.expertise.title': 'Expertise Certifiée',
    'about.reasons.expertise.description': 'Notre équipe de professionnels est formée et certifiée pour offrir à la fois des services de beauté et une éducation de haut niveau.',
    'about.reasons.quality.title': 'Engagement envers la Qualité',
    'about.reasons.quality.description': 'Nous utilisons uniquement les meilleurs produits et suivons les normes de l\'industrie.',
    'about.reasons.education.title': 'Autonomisation par l\'Éducation',
    'about.reasons.education.description': 'Nous croyons en l\'élévation des autres par la connaissance, offrant des compétences réelles pour une carrière durable.',
    'about.reasons.experience.title': 'Expérience Centrée sur le Client',
    'about.reasons.experience.description': 'Chaque service est personnalisé pour répondre aux besoins et objectifs uniques de nos clients et étudiants.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.description': 'Nous visons la perfection dans chaque service et cours que nous offrons.',
    'about.values.integrity.title': 'Intégrité',
    'about.values.integrity.description': 'Nous opérons avec honnêteté, transparence et normes éthiques.',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.description': 'Nous restons à la pointe des techniques de beauté et des méthodes d\'éducation.',
    'about.values.empowerment.title': 'Autonomisation',
    'about.values.empowerment.description': 'Nous croyons en l\'élévation des autres par la connaissance et les services de renforcement de la confiance.',
    'about.cta.title': 'Découvrez la Différence Art de la Beautée',
    'about.cta.description': 'Que vous recherchiez des services de beauté premium ou que vous débutiez une carrière dans l\'industrie de la beauté, nous vous invitons à nous contacter et à découvrir la différence que l\'expertise, la qualité et l\'attention personnalisée peuvent faire.',
    'about.cta.services': 'Explorez Nos Services',
    'about.cta.contact': 'Contactez-Nous',

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
    
    // Footer
    'footer.description': 'Un institut de beauté distingué basé à Orléans, France, dédié à la prestation de services de beauté et d\'éducation professionnelle de premier ordre.',
    'footer.quickLinks': 'Liens Rapides',
    
    // General
    'bookNow': 'Réserver Maintenant',
    'viewAll': 'Voir Tout',
    'enrollNow': 'S\'inscrire Maintenant',
    'learnMore': 'En Savoir Plus',
    
    // Business Hours (Updated)
    'hours.schedule': 'Horaires',
    'hours.time': 'Heures',
    'hours.days': 'Jours',
    'hours.day': 'Jour',
    'hours.timeRange': '05:00 – 14:00'
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
    
    // About Page
    'about.title': 'Acerca de Art de la Beautée',
    'about.subtitle': 'Un distinguido instituto de belleza con sede en Orléans, Francia, dedicado a ofrecer servicios de belleza y educación profesional de primer nivel.',
    'about.story.title': 'Nuestra Historia',
    'about.story.paragraph1': 'Art de la Beautée fue fundado en 2010 con la visión de crear un espacio donde los servicios de belleza y la educación profesional pudieran coexistir, elevando el estándar de cuidado de belleza en Francia.',
    'about.story.paragraph2': 'Lo que comenzó como un pequeño salón de uñas se ha convertido en un instituto de belleza integral que ofrece una amplia gama de servicios y programas de certificación profesional. Nuestro viaje ha estado guiado por un compromiso con la excelencia, la innovación y el empoderamiento de las personas a través de la belleza.',
    'about.story.paragraph3': 'Hoy, estamos orgullosos de ser reconocidos como un instituto de belleza líder, conocido tanto por nuestros servicios excepcionales como por nuestros rigurosos programas educativos que lanzan carreras exitosas en la industria de la belleza.',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.description': 'Mejorar la confianza y la autoexpresión a través de servicios de belleza expertos, mientras se capacita a las personas para construir carreras exitosas en la industria de la belleza.',
    'about.whyChoose': '¿Por Qué Elegir Art de la Beautée?',
    'about.reasons.expertise.title': 'Experiencia Certificada',
    'about.reasons.expertise.description': 'Nuestro equipo de profesionales está capacitado y certificado para ofrecer tanto servicios de belleza como educación de alto nivel.',
    'about.reasons.quality.title': 'Compromiso con la Calidad',
    'about.reasons.quality.description': 'Usamos solo los mejores productos y seguimos los estándares líderes de la industria.',
    'about.reasons.education.title': 'Empoderamiento a Través de la Educación',
    'about.reasons.education.description': 'Creemos en elevar a otros a través del conocimiento, ofreciendo habilidades del mundo real para una carrera duradera.',
    'about.reasons.experience.title': 'Experiencia Centrada en el Cliente',
    'about.reasons.experience.description': 'Cada servicio está personalizado para satisfacer las necesidades y objetivos únicos de nuestros clientes y estudiantes.',
    'about.values.excellence.title': 'Excelencia',
    'about.values.excellence.description': 'Nos esforzamos por la perfección en cada servicio y clase que brindamos.',
    'about.values.integrity.title': 'Integridad',
    'about.values.integrity.description': 'Operamos con honestidad, transparencia y estándares éticos.',
    'about.values.innovation.title': 'Innovación',
    'about.values.innovation.description': 'Nos mantenemos a la vanguardia de las técnicas de belleza y los métodos educativos.',
    'about.values.empowerment.title': 'Empoderamiento',
    'about.values.empowerment.description': 'Creemos en elevar a otros a través del conocimiento y servicios que construyen confianza.',
    'about.cta.title': 'Experimenta la Diferencia Art de la Beautée',
    'about.cta.description': 'Ya sea que estés buscando servicios de belleza premium o comenzando una carrera en la industria de la belleza, te invitamos a conectar con nosotros y descubrir la diferencia que la experiencia, la calidad y la atención personalizada pueden hacer.',
    'about.cta.services': 'Explora Nuestros Servicios',
    'about.cta.contact': 'Contáctanos',
    
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
    
    // Footer
    'footer.description': 'Un instituto de belleza distinguido con sede en Orléans, Francia, dedicado a ofrecer servicios de belleza y educación profesional de primer nivel.',
    'footer.quickLinks': 'Enlaces Rápidos',
    
    // General
    'bookNow': 'Reservar Ahora',
    'viewAll': 'Ver Todo',
    'enrollNow': 'Inscribirse Ahora',
    'learnMore': 'Saber Más',
    
    // Business Hours (Updated)
    'hours.schedule': 'Horario',
    'hours.time': 'Horas',
    'hours.days': 'Días',
    'hours.day': 'Día',
    'hours.timeRange': '05:00 – 14:00'
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
    
    // About Page
    'about.title': 'About Art de la Beautée',
    'about.subtitle': 'A distinguished beauty institute based in Orleans, France, dedicated to delivering top-tier beauty services and professional education.',
    'about.story.title': 'Our Story',
    'about.story.paragraph1': 'Art de la Beautée was founded in 2010 with a vision to create a space where beauty services and professional education could coexist, elevating the standard of beauty care in France.',
    'about.story.paragraph2': 'What began as a small nail salon has grown into a comprehensive beauty institute offering a wide range of services and professional certification programs. Our journey has been guided by a commitment to excellence, innovation, and empowering individuals through beauty.',
    'about.story.paragraph3': 'Today, we are proud to be recognized as a leading beauty institute, known for both our exceptional services and our rigorous educational programs that launch successful careers in the beauty industry.',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To enhance confidence and self-expression through expert beauty services while empowering individuals to build successful careers in the beauty industry.',
    'about.whyChoose': 'Why Choose Art de la Beautée?',
    'about.reasons.expertise.title': 'Certified Expertise',
    'about.reasons.expertise.description': 'Our team of professionals is trained and certified to deliver both beauty services and high-level education.',
    'about.reasons.quality.title': 'Commitment to Quality',
    'about.reasons.quality.description': 'We use only the best products and follow industry-leading standards.',
    'about.reasons.education.title': 'Empowerment Through Education',
    'about.reasons.education.description': 'We believe in lifting others through knowledge, offering real-world skills for a lasting career.',
    'about.reasons.experience.title': 'Client-Centered Experience',
    'about.reasons.experience.description': 'Every service is customized to meet the unique needs and goals of our clients and students.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.description': 'We strive for perfection in every service and class we deliver.',
    'about.values.integrity.title': 'Integrity',
    'about.values.integrity.description': 'We operate with honesty, transparency, and ethical standards.',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.description': 'We stay at the forefront of beauty techniques and education methods.',
    'about.values.empowerment.title': 'Empowerment',
    'about.values.empowerment.description': 'We believe in lifting others through knowledge and confidence-building services.',
    'about.cta.title': 'Experience the Art de la Beautée Difference',
    'about.cta.description': 'Whether you\'re looking for premium beauty services or starting a career in the beauty industry, we invite you to connect with us and discover the difference that expertise, quality, and personalized attention can make.',
    'about.cta.services': 'Explore Our Services',
    'about.cta.contact': 'Contact Us',
    
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
    
    // Footer
    'footer.description': 'A distinguished beauty institute based in Orleans, France, dedicated to delivering top-tier beauty services and professional education.',
    'footer.quickLinks': 'Quick Links',
    
    // General
    'bookNow': 'Book Now',
    'viewAll': 'View All',
    'enrollNow': 'Enroll Now',
    'learnMore': 'Learn More',
    
    // Business Hours (Updated)
    'hours.schedule': 'Schedule',
    'hours.time': 'Hours',
    'hours.days': 'Days',
    'hours.day': 'Day',
    'hours.timeRange': '05:00 – 14:00'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    // @ts-ignore - This is a safe operation because we're checking the key exists
    return translations[language][key] || key;
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
