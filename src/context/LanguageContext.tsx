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
    // Hero Section
    'hero.title': 'Découvrez Art de la',
    'hero.beauty': 'Beauté',
    'hero.elegance': '',
    'hero.description': 'Un institut de beauté raffiné, dédié à la prestation de services esthétiques à Orléans, France.',
    'hero.servicesButton': 'Nos Services',
    'hero.academyButton': 'Formation de Beauté',
    'hero.imageAlt': 'Professionnel de beauté au travail',
    
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.academy': 'Formation',
    'nav.gallery': 'Galerie',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',

    // About Page
    'about.title': 'À propos de Art de la Beauté',
    'about.subtitle': 'Un institut de beauté distingué, basé à Orléans (France), dédié à l\'offre de services esthétiques',
    'about.story.title': 'Notre Histoire',
    'about.story.paragraph1': 'Art de la Beautée a été fondé en 2019 avec la vision de créer un espace où les services de beauté et l\'éducation professionnelle pourraient coexister, élevant la norme des soins de beauté en France.',
    'about.story.paragraph2': 'Ce qui a commencé comme un petit salon d\'ongles est devenu un institut de beauté complet offrant une large gamme de services et de programmes de certification professionnelle. Notre parcours a été guidé par un engagement envers l\'excellence, l\'innovation et l\'autonomisation des individus par la beauté.',
    'about.story.paragraph3': 'Aujourd\'hui, nous sommes fiers d\'être reconnus comme un institut de beauté de premier plan, connu à la fois pour nos services exceptionnels et nos programmes éducatifs rigoureux qui lancent des carrières réussies dans l\'industrie de la beauté.',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Améliorer la confiance et l\'expression de soi grâce à des services de beauté d\'experts tout en permettant aux individus de construire des carrières réussies dans l\'industrie de la beauté.',
    'about.whyChoose': 'Pourquoi Choisir Art de la Beauté?',
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
    'services.description': 'Découvrez nos services de beauté professionnels conçus pour améliorer votre beauté naturelle et vous offrir une expérience luxueuse et personnalisée.',
    'services.nail.title': 'Services des Ongles',
    'services.nail.description': 'Des manucures et pédicures classiques à l\'art des ongles avancé et aux extensions, nos techniciens experts offrent précision et style.',
    'services.lashes.title': 'Extensions de Cils',
    'services.lashes.description': 'Améliorez votre beauté naturelle avec nos services d\'extensions de cils personnalisés qui ajoutent volume, longueur et définition à vos yeux.',
    'services.depilation.title': 'Épilation',
    'services.depilation.description': 'Profitez d\'une peau lisse et sans poils grâce à nos services d\'épilation efficaces et doux, conçus pour tous les types de peau.',
    'services.training.title': 'Formation Professionnelle',
    'services.training.description': 'Démarrez ou avancez votre carrière dans la beauté avec nos programmes de certification professionnelle, avec un apprentissage pratique et des instructions d\'experts.',
    'services.treatments.title': 'Traitements',
    'services.cta.title': 'Prêt à Expérimenter Nos Services?',
    'services.cta.description': 'Réservez votre rendez-vous aujourd\'hui et laissez notre équipe d\'experts s\'occuper de tous vos besoins beauté.',
    
    // Service treatments
    'services.treatments.nail.manicure.name': 'Manucure Classique',
    'services.treatments.nail.manicure.description': 'Mise en forme des ongles, soin des cuticules, massage des mains et application de vernis',
    'services.treatments.nail.pedicure.name': 'Pédicure Classique',
    'services.treatments.nail.pedicure.description': 'Bain de pieds, exfoliation, soin des ongles, massage et vernis',
    'services.treatments.nail.gel.name': 'Application de Vernis Semipermanent',
    'services.treatments.nail.gel.description': 'Vernis Semipermanent longue durée avec brillance et durabilité parfaites',
    'services.treatments.nail.extensions.name': 'Extensions d\'Ongles',
    'services.treatments.nail.extensions.description': 'Extensions en acrylique ou en gel avec longueur et forme personnalisées',
    'services.treatments.nail.art.name': 'Design Nail Art',
    'services.treatments.nail.art.description': 'Art personnalisé, pierres, autocollants ou designs peints à la main',
    
    'services.treatments.lashes.classic.name': 'Cils Classiques',
    'services.treatments.lashes.classic.description': 'Application 1:1 pour un look naturel amélioré',
    'services.treatments.lashes.volume.name': 'Cils Volume',
    'services.treatments.lashes.volume.description': 'Plusieurs extensions par cil naturel pour plus de plénitude',
    'services.treatments.lashes.hybrid.name': 'Cils Hybrides',
    'services.treatments.lashes.hybrid.description': 'Combinaison des techniques classiques et volumiques',
    'services.treatments.lashes.lift.name': 'Rehaussement & Teinture de Cils',
    'services.treatments.lashes.lift.description': 'Boucle et couleur semi-permanentes pour les cils naturels',
    'services.treatments.lashes.maintenance.name': 'Entretien des Cils',
    'services.treatments.lashes.maintenance.description': 'Service de remplissage pour maintenir les extensions de cils',
    
    'services.treatments.depilation.eyebrow.name': 'Épilation des Sourcils',
    'services.treatments.depilation.eyebrow.description': 'Redéfinir et façonner vos sourcils',
    'services.treatments.depilation.facial.name': 'Épilation Lèvre & Menton',
    'services.treatments.depilation.facial.description': 'Élimination rapide et efficace des poils du visage',
    'services.treatments.depilation.halfLeg.name': 'Épilation Demi-Jambes',
    'services.treatments.depilation.halfLeg.description': 'De la cheville au genou ou du genou à la cuisse',
    'services.treatments.depilation.fullLeg.name': 'Épilation Jambes Entières',
    'services.treatments.depilation.fullLeg.description': 'Élimination complète des poils des jambes',
    'services.treatments.depilation.brazilian.name': 'Épilation Brésilienne',
    'services.treatments.depilation.brazilian.description': 'Épilation complète de la zone bikini',
    
    // Academy
    'academy.title': 'Formation de Beauté',
    'academy.subtitle': 'Commencez ou avancez votre carrière dans l\'industrie de la beauté avec nos programmes de certification professionnelle.',
    'academy.whyChoose.title': 'Pourquoi Choisir Notre Formation',
    'academy.whyChoose.instructors.title': 'Instructeurs Experts',
    'academy.whyChoose.instructors.description': 'Apprenez avec des professionnels de l\'industrie ayant des années d\'expérience et d\'expertise.',
    'academy.whyChoose.training.title': 'Formation Pratique',
    'academy.whyChoose.training.description': 'Expérience pratique du monde réel avec beaucoup de temps de pratique supervisée.',
    'academy.whyChoose.certification.title': 'Certification Reconnue',
    'academy.whyChoose.certification.description': 'Obtenez des certificats reconnus dans l\'industrie pour booster vos qualifications professionnelles.',
    'academy.programs.title': 'Nos Programmes',
    
    'academy.programs.nailTech.title': 'Programme de Technicienne en Ongles',
    'academy.programs.nailTech.description': 'Devenez une technicienne en ongles certifiée avec notre programme de formation complet. Apprenez tous les aspects des soins des ongles, des manucures de base à l\'art des ongles avancé et aux extensions.',
    'academy.programs.nailTech.duration': '8 semaines',
    'academy.programs.nailTech.schedule': 'Options à temps plein et temps partiel disponibles',
    'academy.programs.nailTech.certification': 'Certificat Professionnel de Technicienne en Ongles',
    'academy.programs.nailTech.topics.anatomy': 'Anatomie et santé des ongles',
    'academy.programs.nailTech.topics.techniques': 'Techniques de manucure et pédicure',
    'academy.programs.nailTech.topics.application': 'Application de gel et d\'acrylique',
    'academy.programs.nailTech.topics.art': 'Art des ongles avancé et design',
    'academy.programs.nailTech.topics.safety': 'Sécurité et hygiène du salon',
    'academy.programs.nailTech.topics.consultation': 'Consultation et service client',
    'academy.programs.nailTech.topics.business': 'Gestion d\'entreprise et marketing',
    
    'academy.programs.lashArtist.title': 'Extensions de Cils Artiste',
    'academy.programs.lashArtist.description': 'Maîtrisez l\'art des extensions de cils avec notre programme de formation spécialisé. Apprenez à créer de belles extensions de cils d\'apparence naturelle pour les clients.',
    'academy.programs.lashArtist.duration': '4 semaines',
    'academy.programs.lashArtist.schedule': 'Options d\'horaires flexibles',
    'academy.programs.lashArtist.certification': 'Technicienne de Cils Certifiée',
    'academy.programs.lashArtist.topics.anatomy': 'Anatomie des cils et cycle de croissance',
    'academy.programs.lashArtist.topics.classic': 'Techniques d\'application classiques',
    'academy.programs.lashArtist.topics.volume': 'Méthodes de cils volume et hybrides',
    'academy.programs.lashArtist.topics.consultation': 'Consultation client et design',
    'academy.programs.lashArtist.topics.aftercare': 'Soins et entretien',
    'academy.programs.lashArtist.topics.safety': 'Protocoles de santé et sécurité',
    'academy.programs.lashArtist.topics.business': 'Construire votre entreprise de cils',
    
    'academy.programs.specialist.title': 'Programme de Spécialiste en Beauté',
    'academy.programs.specialist.description': 'Notre programme le plus complet couvre les soins des ongles, les extensions de cils et les techniques d\'épilation pour une éducation complète en beauté.',
    'academy.programs.specialist.duration': '12 semaines',
    'academy.programs.specialist.schedule': 'Options à temps plein et temps partiel disponibles',
    'academy.programs.specialist.certification': 'Certificat de Spécialiste en Beauté Professionnelle',
    'academy.programs.specialist.topics.nailTech': 'Formation complète de technicienne en ongles',
    'academy.programs.specialist.topics.lashExtension': 'Cours complet d\'extension de cils',
    'academy.programs.specialist.topics.depilation': 'Techniques d\'épilation professionnelles',
    'academy.programs.specialist.topics.makeup': 'Fondamentaux de l\'application du maquillage',
    'academy.programs.specialist.topics.consultation': 'Évaluation du client et consultation',
    'academy.programs.specialist.topics.advanced': 'Techniques de beauté avancées',
    'academy.programs.specialist.topics.business': 'Gestion d\'entreprise de beauté',
    
    'academy.programDetails.duration': 'Durée',
    'academy.programDetails.schedule': 'Horaire',
    'academy.programDetails.certification': 'Certification',
    'academy.programDetails.learn': 'Ce que vous apprendrez:',
    'academy.cta.title': 'Prêt à Commencer Votre Carrière Beauté?',
    'academy.cta.description': 'Faites le premier pas vers votre avenir dans l\'industrie de la beauté. Réservez une consultation pour en savoir plus sur nos programmes et commencer votre processus d\'inscription.',
    
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
    
    // Gallery
    'gallery.title': 'Notre Galerie',
    'gallery.description': 'Explorez notre collection de travaux et de réalisations dans les domaines de la manucure, des extensions de cils et de la formation professionnelle.',
    'gallery.filters.all': 'Tous',
    'gallery.filters.nailArt': 'Art des Ongles',
    'gallery.filters.eyelash': 'Extensions de Cils',
    'gallery.filters.team': 'Equipe',
    'gallery.categories.nailArt': 'Art des Ongles',
    'gallery.categories.eyelash': 'Extensions de Cils',
    'gallery.categories.team': 'Equipe',
    'gallery.noItems': 'Aucun élément ne correspond à ce filtre.',
    'gallery.viewAll': 'Voir la Galerie',
    
    // 404 Page
    'notFound.message': 'La page que vous recherchez n\'existe pas.',
    'notFound.returnHome': 'Retour à l\'accueil',
    
    // Form
    'form.name': 'Nom Complet',
    'form.namePlaceholder': 'Votre nom',
    'form.email': 'Email',
    'form.emailPlaceholder': 'Votre email',
    'form.phone': 'Numéro de Téléphone',
    'form.phonePlaceholder': 'Votre téléphone',
    'form.serviceType': 'Type de Service',
    'form.programType': 'Type de Programme',
    'form.date': 'Date Préférée',
    'form.time': 'Heure Préférée',
    'form.message': 'Informations Supplémentaires',
    'form.messagePlaceholder': 'Parlez-nous plus de votre demande...',
    'form.bookAppointment': 'Réserver un Rendez-vous',
    'form.enrollNow': 'S\'inscrire Maintenant',
    'form.booking.success': 'Demande de Réservation Envoyée',
    'form.enrollment.success': 'Demande d\'Inscription Envoyée',
    'form.confirmation': 'Nous vous contacterons prochainement pour confirmer votre demande.',
    
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
    'footer.description': 'Un institut de beauté raffiné, dédié à la prestation de services esthétiques à Orléans, France.',
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
    // Hero Section
    'hero.title': 'Descubre el Arte de la',
    'hero.beauty': 'Belleza',
    'hero.elegance': '',
    'hero.description': 'Un instituto de belleza refinado, dedicado a la prestación de servicios estéticos en Orleans, Francia',
    'hero.servicesButton': 'Nuestros Servicios',
    'hero.academyButton': 'Formación de Belleza',
    'hero.imageAlt': 'Profesional de belleza trabajando',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.academy': 'Formación',
    'nav.gallery': 'Galería',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar',
    
    // About Page
    'about.title': 'Acerca de Art de la Beautée',
    'about.subtitle': 'Un distinguido instituto de belleza con sede en Orleans, Francia, dedicado a ofrecer servicios estéticos.',
    'about.story.title': 'Nuestra Historia',
    'about.story.paragraph1': 'Art de la Beautée fue fundado en 2019 con la visión de crear un espacio donde los servicios de belleza y la educación profesional pudieran coexistir, elevando el estándar de cuidado de belleza en Francia.',
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
    'services.description': 'Descubra nuestros servicios de belleza profesionales diseñados para realzar su belleza natural y brindarle una experiencia lujosa y personalizada.',
    'services.nail.title': 'Servicios de Uñas',
    'services.nail.description': 'Desde manicuras y pedicuras clásicas hasta arte de uñas avanzado y extensiones, nuestros técnicos expertos proporcionan precisión y estilo.',
    'services.lashes.title': 'Extensiones de Pestañas',
    'services.lashes.description': 'Realce su belleza natural con nuestros servicios personalizados de extensiones de pestañas que añaden volumen, longitud y definición a sus ojos.',
    'services.depilation.title': 'Depilación',
    'services.depilation.description': 'Experimente una piel suave y sin vello con nuestros servicios efectivos y suaves de depilación, diseñados para todo tipo de piel.',
    'services.training.title': 'Formación Profesional',
    'services.training.description': 'Comience o avance su carrera en belleza con nuestros programas de certificación profesional, con aprendizaje práctico e instrucción experta.',
    'services.treatments.title': 'Tratamientos',
    'services.cta.title': '¿Listo para Experimentar Nuestros Servicios?',
    'services.cta.description': 'Reserve su cita hoy y deje que nuestro equipo de expertos se encargue de todas sus necesidades de belleza.',
    
    // Service treatments
    'services.treatments.nail.manicure.name': 'Manicura Clásica',
    'services.treatments.nail.manicure.description': 'Modelado de uñas, cuidado de cutículas, masaje de manos y aplicación de esmalte',
    'services.treatments.nail.pedicure.name': 'Pedicura Deluxe',
    'services.treatments.nail.pedicure.description': 'Baño de pies, exfoliación, cuidado de uñas, masaje y esmalte',
    'services.treatments.nail.gel.name': 'Aplicación de Esmalte en Gel',
    'services.treatments.nail.gel.description': 'Esmalte en gel de larga duración con brillo y durabilidad perfectos',
    'services.treatments.nail.extensions.name': 'Extensiones de Uñas',
    'services.treatments.nail.extensions.description': 'Extensiones acrílicas o de gel con longitud y forma personalizadas',
    'services.treatments.nail.art.name': 'Diseño de Arte de Uñas',
    'services.treatments.nail.art.description': 'Arte personalizado, piedras, calcomanías o diseños pintados a mano',
    
    'services.treatments.lashes.classic.name': 'Pestañas Clásicas',
    'services.treatments.lashes.classic.description': 'Aplicación 1:1 para un look natural mejorado',
    'services.treatments.lashes.volume.name': 'Pestañas Volumen',
    'services.treatments.lashes.volume.description': 'Múltiples extensiones por pestaña natural para mayor plenitud',
    'services.treatments.lashes.hybrid.name': 'Pestañas Híbridas',
    'services.treatments.lashes.hybrid.description': 'Combinación de técnicas clásicas y voluminosas',
    'services.treatments.lashes.lift.name': 'Levantamiento y Tinte de Pestañas',
    'services.treatments.lashes.lift.description': 'Rizo y color semipermanentes para pestañas naturales',
    'services.treatments.lashes.maintenance.name': 'Mantenimiento de Pestañas',
    'services.treatments.lashes.maintenance.description': 'Servicio de relleno para mantener las extensiones de pestañas',
    
    'services.treatments.depilation.eyebrow.name': 'Depilación de Cejas',
    'services.treatments.depilation.eyebrow.description': 'Redefinir y dar forma a sus cejas',
    'services.treatments.depilation.facial.name': 'Depilación de Labio y Mentón',
    'services.treatments.depilation.facial.description': 'Eliminación rápida y eficaz del vello facial',
    'services.treatments.depilation.halfLeg.name': 'Depilación de Media Pierna',
    'services.treatments.depilation.halfLeg.description': 'Desde el tobillo hasta la rodilla o desde la rodilla hasta el muslo',
    'services.treatments.depilation.fullLeg.name': 'Depilación de Piernas Completas',
    'services.treatments.depilation.fullLeg.description': 'Eliminación completa del vello de las piernas',
    'services.treatments.depilation.brazilian.name': 'Depilación Brasileña',
    'services.treatments.depilation.brazilian.description': 'Eliminación completa del vello en la zona del bikini',

    // Academy
    'academy.title': 'Formación de Belleza',
    'academy.subtitle': 'Comience o avance su carrera en la industria de la belleza con nuestros programas de certificación profesional.',
    'academy.whyChoose.title': 'Por Qué Elegir Nuestra Formación',
    'academy.whyChoose.instructors.title': 'Instructores Expertos',
    'academy.whyChoose.instructors.description': 'Aprenda de profesionales de la industria con años de experiencia y conocimientos.',
    'academy.whyChoose.training.title': 'Entrenamiento Práctico',
    'academy.whyChoose.training.description': 'Experiencia práctica del mundo real con mucho tiempo de práctica supervisada.',
    'academy.whyChoose.certification.title': 'Certificación Reconocida',
    'academy.whyChoose.certification.description': 'Obtenga certificados reconocidos por la industria para impulsar sus credenciales profesionales.',
    'academy.programs.title': 'Nuestros Programas',
    
    'academy.programs.nailTech.title': 'Programa de Técnico de Uñas',
    'academy.programs.nailTech.description': 'Conviértase en un técnico de uñas certificado con nuestro programa de formación integral. Aprenda todos los aspectos del cuidado de uñas, desde manicuras básicas hasta arte de uñas avanzado y extensiones.',
    'academy.programs.nailTech.duration': '8 semanas',
    'academy.programs.nailTech.schedule': 'Opciones de tiempo completo y parcial disponibles',
    'academy.programs.nailTech.certification': 'Certificado de Técnico Profesional de Uñas',
    'academy.programs.nailTech.topics.anatomy': 'Anatomía y salud de las uñas',
    'academy.programs.nailTech.topics.techniques': 'Técnicas de manicura y pedicura',
    'academy.programs.nailTech.topics.application': 'Aplicación de gel y acrílico',
    'academy.programs.nailTech.topics.art': 'Arte de uñas avanzado y diseño',
    'academy.programs.nailTech.topics.safety': 'Seguridad e higiene del salón',
    'academy.programs.nailTech.topics.consultation': 'Consulta y servicio al cliente',
    'academy.programs.nailTech.topics.business': 'Gestión empresarial y marketing',
    
    'academy.programs.lashArtist.title': 'Artista de Extensiones de Pestañas',
    'academy.programs.lashArtist.description': 'Domine el arte de las extensiones de pestañas con nuestro programa de formación especializado. Aprenda a crear hermosas mejoras de pestañas de aspecto natural para los clientes.',
    'academy.programs.lashArtist.duration': '4 semanas',
    'academy.programs.lashArtist.schedule': 'Opciones de horarios flexibles',
    'academy.programs.lashArtist.certification': 'Técnico Certificado de Pestañas',
    'academy.programs.lashArtist.topics.anatomy': 'Anatomía de las pestañas y ciclo de crecimiento',
    'academy.programs.lashArtist.topics.classic': 'Técnicas de aplicación clásicas',
    'academy.programs.lashArtist.topics.volume': 'Métodos de pestañas de volumen e híbridas',
    'academy.programs.lashArtist.topics.consultation': 'Consulta y diseño del cliente',
    'academy.programs.lashArtist.topics.aftercare': 'Cuidados posteriores y mantenimiento',
    'academy.programs.lashArtist.topics.safety': 'Protocolos de salud y seguridad',
    'academy.programs.lashArtist.topics.business': 'Construir su negocio de pestañas',
    
    'academy.programs.specialist.title': 'Programa de Especialista en Belleza',
    'academy.programs.specialist.description': 'Nuestro programa más completo cubre cuidado de uñas, extensiones de pestañas y técnicas de depilación para una educación completa en belleza.',
    'academy.programs.specialist.duration': '12 semanas',
    'academy.programs.specialist.schedule': 'Opciones de tiempo completo y parcial disponibles',
    'academy.programs.specialist.certification': 'Certificado de Especialista Profesional en Belleza',
    'academy.programs.specialist.topics.nailTech': 'Formación completa de técnico de uñas',
    'academy.programs.specialist.topics.lashExtension': 'Curso completo de extensión de pestañas',
    'academy.programs.specialist.topics.depilation': 'Técnicas profesionales de depilación',
    'academy.programs.specialist.topics.makeup': 'Fundamentos de aplicación de maquillaje',
    'academy.programs.specialist.topics.consultation': 'Evaluación y consulta del cliente',
    'academy.programs.specialist.topics.advanced': 'Técnicas avanzadas de belleza',
    'academy.programs.specialist.topics.business': 'Gestión empresarial de belleza',
    
    'academy.programDetails.duration': 'Duración',
    'academy.programDetails.schedule': 'Horario',
    'academy.programDetails.certification': 'Certificación',
    'academy.programDetails.learn': '¿Qué Aprenderás?:',
    'academy.cta.title': '¿Listo para Comenzar tu Carrera en Belleza?',
    'academy.cta.description': 'Da el primer paso hacia tu futuro en la industria de la belleza. Reserva una consulta para aprender más sobre nuestros programas e iniciar tu proceso de inscripción.',
    
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
    
    // Gallery
    'gallery.title': 'Nuestra Galería',
    'gallery.description': 'Explore nuestra colección de trabajos y logros en las áreas de arte de uñas, extensiones de pestañas y formación profesional.',
    'gallery.filters.all': 'Todos',
    'gallery.filters.nailArt': 'Arte de Uñas',
    'gallery.filters.eyelash': 'Extensiones de Pestañas',
    'gallery.filters.team': 'Equipo',
    'gallery.categories.nailArt': 'Arte de Uñas',
    'gallery.categories.eyelash': 'Extensiones de Pestañas',
    'gallery.categories.team': 'Equipo',
    'gallery.noItems': 'No hay elementos que coincidan con este filtro.',
    'gallery.viewAll': 'Ver Galería',
    
    // 404 Page
    'notFound.message': 'La página que busca no existe.',
    'notFound.returnHome': 'Volver al inicio',
    
    // Form
    'form.name': 'Nombre Completo',
    'form.namePlaceholder': 'Su nombre',
    'form.email': 'Correo Electrónico',
    'form.emailPlaceholder': 'Su correo electrónico',
    'form.phone': 'Número de Teléfono',
    'form.phonePlaceholder': 'Su teléfono',
    'form.serviceType': 'Tipo de Servicio',
    'form.programType': 'Tipo de Programa',
    'form.date': 'Fecha Preferida',
    'form.time': 'Hora Preferida',
    'form.message': 'Información Adicional',
    'form.messagePlaceholder': 'Cuéntenos más sobre su solicitud...',
    'form.bookAppointment': 'Reservar Cita',
    'form.enrollNow': 'Inscribirse Ahora',
    'form.booking.success': 'Solicitud de Reserva Enviada',
    'form.enrollment.success': 'Solicitud de Inscripción Enviada',
    'form.confirmation': 'Nos pondremos en contacto con usted en breve para confirmar su solicitud.',
    
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
    'footer.description': 'Un instituto de belleza refinado, dedicado a la prestación de servicios estéticos en Orleans, Francia.',
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
    // Hero Section
    'hero.title': 'Discover the Art of',
    'hero.beauty': 'Beauty',
    'hero.elegance': 'Elegance',
    'hero.description': 'A refined beauty institute dedicated to providing aesthetic services in Orleans, France.',
    'hero.servicesButton': 'Our Services',
    'hero.academyButton': 'Beauty Training',
    'hero.imageAlt': 'Beauty professional working',
    
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.academy': 'Training',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // About Page
    'about.title': 'About Art de la Beautée',
    'about.subtitle': 'A distinguished beauty institute based in Orleans, France, dedicated to delivering aesthetic services.',
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
    'services.description': 'Discover our professional beauty services designed to enhance your natural beauty and provide you with a luxurious, personalized experience.',
    'services.nail.title': 'Nail Services',
    'services.nail.description': 'From classic manicures and pedicures to advanced nail art and extensions, our expert technicians provide precision and style.',
    'services.lashes.title': 'Eyelash Extensions',
    'services.lashes.description': 'Enhance your natural beauty with customized lash extension services that add volume, length, and definition to your eyes.',
    'services.depilation.title': 'Depilation',
    'services.depilation.description': 'Experience smooth, hair-free skin with our effective and gentle waxing and hair removal services, designed for all skin types.',
    'services.training.title': 'Professional Training',
    'services.training.description': 'Start or advance your career in beauty with our professional certification programs, featuring hands-on learning and expert instruction.',
    'services.treatments.title': 'Treatments',
    'services.cta.title': 'Ready to Experience Our Services?',
    'services.cta.description': 'Book your appointment today and let our expert team take care of all your beauty needs.',
    
    // Service treatments
    'services.treatments.nail.manicure.name': 'Classic Manicure',
    'services.treatments.nail.manicure.description': 'Nail shaping, cuticle care, hand massage, and polish application',
    'services.treatments.nail.pedicure.name': 'Deluxe Pedicure',
    'services.treatments.nail.pedicure.description': 'Foot soak, exfoliation, nail care, massage, and polish',
    'services.treatments.nail.gel.name': 'Gel Polish Application',
    'services.treatments.nail.gel.description': 'Long-lasting gel polish with perfect shine and durability',
    'services.treatments.nail.extensions.name': 'Nail Extensions',
    'services.treatments.nail.extensions.description': 'Acrylic or gel extensions with custom length and shape',
    'services.treatments.nail.art.name': 'Nail Art Design',
    'services.treatments.nail.art.description': 'Custom art, stones, stickers, or hand-painted designs',
    
    'services.treatments.lashes.classic.name': 'Classic Lashes',
    'services.treatments.lashes.classic.description': '1:1 application for a natural, enhanced look',
    'services.treatments.lashes.volume.name': 'Volume Lashes',
    'services.treatments.lashes.volume.description': 'Multiple extensions per natural lash for added fullness',
    'services.treatments.lashes.hybrid.name': 'Hybrid Lashes',
    'services.treatments.lashes.hybrid.description': 'Combination of classic and volume techniques',
    'services.treatments.lashes.lift.name': 'Lash Lift & Tint',
    'services.treatments.lashes.lift.description': 'Semi-permanent curl and color for natural lashes',
    'services.treatments.lashes.maintenance.name': 'Lash Maintenance',
    'services.treatments.lashes.maintenance.description': 'Fill-in service for maintaining lash extensions',
    
    'services.treatments.depilation.eyebrow.name': 'Eyebrow Waxing',
    'services.treatments.depilation.eyebrow.description': 'Reshape and define your brows',
    'services.treatments.depilation.facial.name': 'Lip & Chin Waxing',
    'services.treatments.depilation.facial.description': 'Quick and effective facial hair removal',
    'services.treatments.depilation.halfLeg.name': 'Half Leg Waxing',
    'services.treatments.depilation.halfLeg.description': 'From ankle to knee or knee to thigh',
    'services.treatments.depilation.fullLeg.name': 'Full Leg Waxing',
    'services.treatments.depilation.fullLeg.description': 'Complete leg hair removal',
    'services.treatments.depilation.brazilian.name': 'Brazilian Waxing',
    'services.treatments.depilation.brazilian.description': 'Full bikini area hair removal',
    
    // Academy
    'academy.title': 'Beauty Training',
    'academy.subtitle': 'Start or advance your career in the beauty industry with our professional certification programs.',
    'academy.whyChoose.title': 'Why Choose Our Training',
    'academy.whyChoose.instructors.title': 'Expert Instructors',
    'academy.whyChoose.instructors.description': 'Learn from industry professionals with years of experience and expertise.',
    'academy.whyChoose.training.title': 'Hands-On Training',
    'academy.whyChoose.training.description': 'Practical, real-world experience with plenty of supervised practice time.',
    'academy.whyChoose.certification.title': 'Recognized Certification',
    'academy.whyChoose.certification.description': 'Earn industry-recognized certificates to boost your professional credentials.',
    'academy.programs.title': 'Our Programs',
    
    'academy.programs.nailTech.title': 'Nail Technician Program',
    'academy.programs.nailTech.description': 'Become a certified nail technician with our comprehensive training program. Learn all aspects of nail care, from basic manicures to advanced nail art and extensions.',
    'academy.programs.nailTech.duration': '8 weeks',
    'academy.programs.nailTech.schedule': 'Full-time and part-time options available',
    'academy.programs.nailTech.certification': 'Professional Nail Technician Certificate',
    'academy.programs.nailTech.topics.anatomy': 'Nail anatomy and health',
    'academy.programs.nailTech.topics.techniques': 'Manicure and pedicure techniques',
    'academy.programs.nailTech.topics.application': 'Gel and acrylic nail application',
    'academy.programs.nailTech.topics.art': 'Advanced nail art and design',
    'academy.programs.nailTech.topics.safety': 'Salon safety and hygiene',
    'academy.programs.nailTech.topics.consultation': 'Client consultation and service',
    'academy.programs.nailTech.topics.business': 'Business management and marketing',
    
    'academy.programs.lashArtist.title': 'Eyelash Extension Artist',
    'academy.programs.lashArtist.description': 'Master the art of eyelash extensions with our specialized training program. Learn to create beautiful, natural-looking lash enhancements for clients.',
    'academy.programs.lashArtist.duration': '4 weeks',
    'academy.programs.lashArtist.schedule': 'Flexible scheduling options',
    'academy.programs.lashArtist.certification': 'Certified Lash Technician',
    'academy.programs.lashArtist.topics.anatomy': 'Eyelash anatomy and growth cycle',
    'academy.programs.lashArtist.topics.classic': 'Classic lash application techniques',
    'academy.programs.lashArtist.topics.volume': 'Volume and hybrid lash methods',
    'academy.programs.lashArtist.topics.consultation': 'Client consultation and design',
    'academy.programs.lashArtist.topics.aftercare': 'Aftercare and maintenance',
    'academy.programs.lashArtist.topics.safety': 'Health and safety protocols',
    'academy.programs.lashArtist.topics.business': 'Building your lash business',
    
    'academy.programs.specialist.title': 'Beauty Specialist Program',
    'academy.programs.specialist.description': 'Our most comprehensive program covers nail care, eyelash extensions, and depilation techniques for a complete beauty education.',
    'academy.programs.specialist.duration': '12 weeks',
    'academy.programs.specialist.schedule': 'Full-time and part-time options available',
    'academy.programs.specialist.certification': 'Professional Beauty Specialist Certificate',
    'academy.programs.specialist.topics.nailTech': 'Complete nail technician training',
    'academy.programs.specialist.topics.lashExtension': 'Full eyelash extension course',
    'academy.programs.specialist.topics.depilation': 'Professional depilation techniques',
    'academy.programs.specialist.topics.makeup': 'Makeup application fundamentals',
    'academy.programs.specialist.topics.consultation': 'Client assessment and consultation',
    'academy.programs.specialist.topics.advanced': 'Advanced beauty techniques',
    'academy.programs.specialist.topics.business': 'Beauty business management',
    
    'academy.programDetails.duration': 'Duration',
    'academy.programDetails.schedule': 'Schedule',
    'academy.programDetails.certification': 'Certification',
    'academy.programDetails.learn': 'What You\'ll Learn:',
    'academy.cta.title': 'Ready to Begin Your Beauty Career?',
    'academy.cta.description': 'Take the first step towards your future in the beauty industry. Book a consultation to learn more about our programs and start your enrollment process.',
    
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
    
    // Gallery
    'gallery.title': 'Our Gallery',
    'gallery.description': 'Explore our collection of work and achievements in nail art, eyelash extensions, and professional training.',
    'gallery.filters.all': 'All',
    'gallery.filters.nailArt': 'Nail Art',
    'gallery.filters.eyelash': 'Eyelash Extensions',
    'gallery.filters.team': 'Team',
    'gallery.categories.nailArt': 'Nail Art',
    'gallery.categories.eyelash': 'Eyelash Extensions',
    'gallery.categories.team': 'Team',
    'gallery.noItems': 'No items match this filter.',
    'gallery.viewAll': 'View Gallery',
    
    // 404 Page
    'notFound.message': 'The page you are looking for does not exist.',
    'notFound.returnHome': 'Return to home',
    
    // Form
    'form.name': 'Full Name',
    'form.namePlaceholder': 'Your name',
    'form.email': 'Email',
    'form.emailPlaceholder': 'Your email',
    'form.phone': 'Phone Number',
    'form.phonePlaceholder': 'Your phone',
    'form.serviceType': 'Service Type',
    'form.programType': 'Program Type',
    'form.date': 'Preferred Date',
    'form.time': 'Preferred Time',
    'form.message': 'Additional Information',
    'form.messagePlaceholder': 'Tell us more about your request...',
    'form.bookAppointment': 'Book Appointment',
    'form.enrollNow': 'Enroll Now',
    'form.booking.success': 'Booking Request Sent',
    'form.enrollment.success': 'Enrollment Request Sent',
    'form.confirmation': 'We\'ll contact you shortly to confirm your request.',
    
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
    'footer.description': 'A refined beauty institute, dedicated to providing aesthetic services in Orleans, France.',
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
