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
    'about.profile': 'Profile',
    'about.artInterest': 'Art Interest',
    'about.teaching': 'Teaching',
    'about.travelingArtist': 'Traveling Artist',
    'about.exhibitions': 'Exhibitions',
    'about.bio': 'Martina Pauleová - Solárová (*1972) spent her first years in Handlová, later in Nedožery Brezany. She graduated from V.B. Nedožerský Grammar School in Prievidza (1990) and from the Academy of Fine Arts and Design in Bratislava - classical painting studio under Professor Ján Berger (1998). She lives and works in Bratislava with her husband and three sons.',
    'about.bio2': 'The work of Martina Pauleová - Solárová is characterized by revealing a layer of reality imperceptible at first glance, whether still lifes, landscapes or portraits. She uncovers adventures with vibrations of infinite amplitude, seemingly static at first sight. These adventures do not force themselves upon the viewer. One must set out to seek them independently, with quiet patience, lest they dissolve with the stroke of an eager hand.',
    'about.downloadCV': 'Download CV (PDF)',
    'about.artInterestText': 'My artistic practice revolves around capturing the subtle interplay between memory, emotion, and visual experience. Through abstract and semi-abstract compositions, I explore how color and form can evoke deep psychological responses. Each piece is an investigation into the delicate balance between control and spontaneity, structure and chaos.',
    'about.artInterestText2': 'Working primarily with acrylics and mixed media, I layer textures and hues to create depth that mirrors the complexity of human experience. My paintings invite viewers to engage in their own interpretative journey, finding personal meaning within the abstract landscapes I create.',
    'about.teachingIntro': 'Sharing my passion for abstract art through hands-on workshops and creative sessions',
    'about.travelingIntro': 'Residencies, journeys, and creative explorations around the world',
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
    'about.profile': 'Profil',
    'about.artInterest': 'Umelecký záujem',
    'about.teaching': 'Vyučovanie',
    'about.travelingArtist': 'Cestujúci umelec',
    'about.exhibitions': 'Výstavy',
    'about.bio': 'Martina Pauleová - Solárová (*1972) prvé roky prežila v Handlovej, neskôr v Nedožeroch Brezanoch. Vyštudovala na Gymnázium V.B. Nedožerského v Prievidzi (1990) a na VŠVU v Bratislave - ateliér klasickej maľby u profesora Jána Bergera (1998). S manželom a tromi synmi žije a pôsobí v Bratislave.',
    'about.bio2': 'Tvorbu Martiny Pauleovej - Solárovej charakterizuje odkrývanie na prvý pohľad nepostrehnuteľnej vrstvy reality, či už sú to zátišia, krajinomaľba alebo portréty. Odkrýva dobrodružstvá s vibráciami s nekonečnou amplitúdou, na prvý pohľad statické. Tieto dobrodružstvá sa k divákovi nedobýjajú násilím. Musí sa vybrať hľadať ich sám, s tichou trpezlivosťou, aby sa nerozplynuli šmahom dychtivej ruky.',
    'about.downloadCV': 'Stiahnuť životopis (PDF)',
    'about.artInterestText': 'Moja umelecká prax sa točí okolo zachytenia jemnej súhry medzi pamäťou, emóciami a vizuálnym zážitkom. Prostredníctvom abstraktných a polo-abstraktných kompozícií skúmam, ako farba a forma môžu vyvolať hlboké psychologické reakcie. Každé dielo je vyšetrovaním jemnej rovnováhy medzi kontrolou a spontánnosťou, štruktúrou a chaosom.',
    'about.artInterestText2': 'Pracujúc predovšetkým s akrylom a zmiešanými médiami, vrstvím textúry a odtiene, aby som vytvorila hĺbku, ktorá zrkadlí komplexnosť ľudskej skúsenosti. Moje maľby pozývajú divákov, aby sa zapojili do vlastnej interpretačnej cesty a našli osobný význam v abstraktných krajinách, ktoré vytváram.',
    'about.teachingIntro': 'Zdieľanie mojej vášne pre abstraktné umenie prostredníctvom praktických workshopov a kreatívnych stretnutí',
    'about.travelingIntro': 'Rezidencie, cesty a tvorivé objavy po celom svete',
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
