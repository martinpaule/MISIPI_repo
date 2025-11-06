import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'sk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About Me',
    'nav.works': 'My Works',
    'nav.travelling': 'Travelling Artist',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'Abstract Artist',
    'hero.description': 'Exploring color, memory and movement through abstract forms',
    
    // About Me
    'about.title': 'About Me',
    'about.bio': 'Martina Pauleová - Solárová (*1972) spent her first years in Handlová, later in Nedožery Brezany. She graduated from V.B. Nedožerský Grammar School in Prievidza (1990) and from the Academy of Fine Arts and Design in Bratislava - classical painting studio under Professor Ján Berger (1998). She lives and works in Bratislava with her husband and three sons.',
    'about.bio2': 'The work of Martina Pauleová - Solárová is characterized by revealing a layer of reality imperceptible at first glance, whether still lifes, landscapes or portraits. She uncovers adventures with vibrations of infinite amplitude, seemingly static at first sight. These adventures do not force themselves upon the viewer. One must set out to seek them independently, with quiet patience, lest they dissolve with the stroke of an eager hand.',
    'about.downloadCV': 'Download CV (PDF)',
    'about.articles': 'Articles & Interviews',
    
    // My Works
    'works.selected': 'Selected Works',
    'works.instagram': 'From Instagram',
    'works.follow': 'Follow me on Instagram',
    
    // Teaching
    'teaching.title': 'Teaching & Workshops',
    'teaching.description': 'I offer workshops and courses for artists of all levels',
    
    // Travelling Artist
    'travelling.title': 'Travelling Artist',
    'travelling.description': 'Exploring new places and finding inspiration around the world',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': 'Feel free to reach out for collaborations, commissions, or just to say hello',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  sk: {
    // Navigation
    'nav.about': 'O mne',
    'nav.works': 'Moje diela',
    'nav.travelling': 'Cestujúci umelec',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.subtitle': 'Abstraktná umelkyňa',
    'hero.description': 'Skúmanie farby, pamäti a pohybu prostredníctvom abstraktných foriem',
    
    // About Me
    'about.title': 'O mne',
    'about.bio': 'Martina Pauleová - Solárová (*1972) prvé roky prežila v Handlovej, neskôr v Nedožeroch Brezanoch. Vyštudovala na Gymnázium V.B. Nedožerského v Prievidzi (1990) a na VŠVU v Bratislave - ateliér klasickej maľby u profesora Jána Bergera (1998). S manželom a tromi synmi žije a pôsobí v Bratislave.',
    'about.bio2': 'Tvorbu Martiny Pauleovej - Solárovej charakterizuje odkrývanie na prvý pohľad nepostrehnuteľnej vrstvy reality, či už sú to zátišia, krajinomaľba alebo portréty. Odkrýva dobrodružstvá s vibráciami s nekonečnou amplitúdou, na prvý pohľad statické. Tieto dobrodružstvá sa k divákovi nedobýjajú násilím. Musí sa vybrať hľadať ich sám, s tichou trpezlivosťou, aby sa nerozplynuli šmahom dychtivej ruky.',
    'about.downloadCV': 'Stiahnuť životopis (PDF)',
    'about.articles': 'Články a rozhovory',
    
    // My Works
    'works.selected': 'Vybrané diela',
    'works.instagram': 'Z Instagramu',
    'works.follow': 'Sledujte ma na Instagrame',
    
    // Teaching
    'teaching.title': 'Vyučovanie a workshopy',
    'teaching.description': 'Ponúkam workshopy a kurzy pre umelcov všetkých úrovní',
    
    // Travelling Artist
    'travelling.title': 'Cestujúci umelec',
    'travelling.description': 'Objavovanie nových miest a hľadanie inšpirácie po celom svete',
    
    // Contact
    'contact.title': 'Kontaktujte ma',
    'contact.description': 'Neváhajte ma kontaktovať ohľadom spolupráce, zákaziek alebo len na pozdrav',
    'contact.name': 'Meno',
    'contact.email': 'Email',
    'contact.message': 'Správa',
    'contact.send': 'Odoslať správu',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
