/**
 * Centralized translations file
 * To add a new language, add a new key to the Translations type and implement all translations
 */

export type Language = "en" | "sk";

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Navigation
    "nav.about": "About Me",
    "nav.works": "Gallery",

    // Hero
    "hero.subtitle": "Ceramics, Painting, Photography",
    "hero.description": "Exploring color, composition and memory through abstract forms",

    // About Me
    "about.title": "About Me",
    "about.profile": "Profile",
    "about.artInterest": "Art Interest",
    "about.teaching": "Teaching",
    "about.travelingArtist": "Traveling Artist",
    "about.exhibitions": "Exhibitions",
    "about.bio":
      "I am Martina Pauleová - Solárová (*1972). I grew up in Handlová, then moved to Nedožery Brezany. I finished high school in Prievidza (1990) and studied classical painting at the Academy of Fine Arts in Bratislava with Professor Ján Berger (1998). I now live and work in Bratislava with my husband and three sons.",
    "about.bio2":
      "In my work, I try to show what we often miss at first glance - whether in still lifes, landscapes, or portraits. I look for quiet moments and hidden stories that seem still but are full of life. These moments do not jump out at you. You need to slow down and look carefully to find them.",
    "about.downloadCV": "Download CV (PDF)",
    "about.artInterestText":
      "My art is about memory, feelings, and what we see. I use abstract shapes and colors to create emotions. Each painting is a mix of planning and letting things happen naturally.",
    "about.artInterestText2":
      "I mostly work with acrylics and mixed materials. I build up layers to create depth. My paintings are open to different meanings - each person can find their own story in them.",
    "about.teachingIntro": "I love sharing my passion for art through hands-on workshops",
    "about.travelingIntro": "Art residencies and creative journeys around the world",
    "about.articles": "Articles & Interviews",

    // Work Experience
    "work.experienceTitle": "WORK EXPERIENCE",
    "work.job1.title": "External Ceramics Lecturer",
    "work.job1.company": "Center for Folk Art Production",
    "work.job1.period": "July 2004 - Present",
    "work.job1.description": "Teaching wheel throwing, developing creativity, introducing traditional folk crafts",
    "work.job2.title": "Art Club Instructor",
    "work.job2.company": "1st Private Kindergarten Štvorlístok",
    "work.job2.period": "September 2011 - August 2017",
    "work.job2.description": "Working with clay, developing motor skills",
    "work.job3.title": "Teacher of Art Subjects",
    "work.job3.company": "United Secondary School of Scenic Arts - Bratislava, Slovakia",
    "work.job3.period": "September 1995 - June 1996",
    "work.job3.description": "Teaching art history and drawing",

    // Workshops
    "workshop1.title": "Abstract Expression Workshop",
    "workshop1.description": "A hands-on exploration of color, form, and intuitive mark-making",
    "workshop1.duration": "2 days",
    "workshop1.level": "All levels",
    "workshop2.title": "Mixed Media Techniques",
    "workshop2.description": "Combining collage, paint, and found materials in contemporary art",
    "workshop2.duration": "1 day",
    "workshop2.level": "Intermediate",
    "workshop3.title": "Color Theory in Practice",
    "workshop3.description": "Understanding color relationships and creating dynamic palettes",
    "workshop3.duration": "Half day",
    "workshop3.level": "Beginners",

    // Residencies
    "residency1.location": "Barcelona, Spain",
    "residency1.period": "Spring 2024",
    "residency1.description":
      "A transformative three-month residency exploring the relationship between Mediterranean light and abstract form. Working in a converted industrial space near the Gothic Quarter, I developed a new series combining organic shapes with architectural elements inspired by Gaudí's vision.",
    "residency1.extendedDescription":
      "The residency allowed me to experiment with new color palettes inspired by the city's tiles and mosaics. Daily walks through the Barri Gòtic influenced the layering techniques in my work, creating depth through historical accumulation.",
    "residency2.location": "Kyoto, Japan",
    "residency2.period": "Fall 2023",
    "residency2.description":
      "An immersive experience in traditional Japanese aesthetics and contemporary art dialogue. The residency at a temple-adjacent studio provided unique insights into wabi-sabi philosophy and its application to abstract painting.",
    "residency2.extendedDescription":
      "Working alongside local artists, I explored the concept of ma (negative space) and its role in composition. The changing autumn colors and temple gardens deeply influenced my approach to subtle gradation and atmospheric effects.",
    "residency3.location": "Reykjavik, Iceland",
    "residency3.period": "Winter 2023",
    "residency3.description":
      "A winter residency focused on light, darkness, and the sublime landscape. The extreme conditions and minimal daylight hours pushed my work toward more introspective and atmospheric directions.",
    "residency3.extendedDescription":
      "The volcanic landscape and northern lights provided endless inspiration for color relationships and emotional intensity. Working in near-darkness for much of the day created a meditative studio practice that transformed my approach to painting.",

    // Press Articles
    "article1.title": "Retrospective Exhibition",
    "article1.description": "A comprehensive look at the artist's journey",
    "article1.publication": "RKCPD Prievidza",
    "article2.title": "Bienále FORMA",
    "article2.description": "Seventh edition of applied arts exhibition",
    "article2.publication": "Slovenská výtvarná únia - Galéria Umelka",

    // Teaching Page
    "teaching.title": "Teaching & Workshops",
    "teaching.description": "Sharing my passion for abstract art through hands-on workshops and creative sessions",
    "teaching.stat1.title": "15+ Years Experience",
    "teaching.stat1.description": "Teaching abstract painting techniques to students of all levels",
    "teaching.stat2.title": "500+ Students",
    "teaching.stat2.description": "From beginners to advanced artists across workshops and residencies",
    "teaching.stat3.title": "Custom Workshops",
    "teaching.stat3.description": "Tailored sessions for groups, schools, and corporate events",
    "teaching.workshopsTitle": "Available Workshops",
    "teaching.workshopDuration": "Duration",
    "teaching.workshopLevel": "Level",
    "teaching.bookingText": "Interested in booking a workshop or private session?",
    "teaching.getInTouch": "Get in Touch",

    // Traveling Artist Page
    "travelling.title": "Travelling Artist",
    "travelling.description": "Residencies, journeys, and creative explorations around the world",
    "travelling.readMore": "Read more",
    "travelling.showLess": "Show less",

    // Gallery
    "works.selected": "Selected Works",
    "works.documents": "Documents",
    "works.instagram": "Instagram",
    "works.instagramDescription": "A large number of my artworks live on my Instagram profile. Follow me there to see my latest creations, works in progress, and studio updates.",
    "works.follow": "Follow me on Instagram",
    "works.document1.title": "Conversations of Colors and Clay",
    "works.document1.description": "A visual exploration of colors and ceramic art",
    "works.document2.title": "Polly's Project",
    "works.document2.description": "An artistic journey through form and expression",
    "works.viewDocument": "View PDF",

    // Common
    "common.readMore": "Read more",
    "common.showLess": "Show less",
  },
  sk: {
    // Navigation
    "nav.about": "O mne",
    "nav.works": "Moje diela",

    // Hero
    "hero.subtitle": "Keramika, Maľba, Fotografia",
    "hero.description": "Skúmanie farby, pamäti a pohybu prostredníctvom abstraktných foriem",

    // About Me
    "about.title": "O mne",
    "about.profile": "Profil",
    "about.artInterest": "Umelecký záujem",
    "about.teaching": "Vyučovanie",
    "about.travelingArtist": "Cestujúci umelec",
    "about.exhibitions": "Výstavy",
    "about.bio":
      "Som Martina Pauleová - Solárová (*1972). Vyrastala som v Handlovej, potom v Nedožeroch Brezanoch. Maturovala som v Prievidzi (1990) a študovala klasickú maľbu na VŠVU v Bratislave u profesora Jána Bergera (1998). Teraz žijem a pracujem v Bratislave s manželom a tromi synmi.",
    "about.bio2":
      "Vo svojej tvorbe sa snažím ukázať to, čo na prvý pohľad nevidíme - či už v zátiší, krajinách alebo portrétoch. Hľadám tiché momenty a skryté príbehy, ktoré vyzerajú pokojne, no sú plné života. Tieto momenty sa samy neukážu. Treba spomaliť a dobre sa pozerať.",
    "about.downloadCV": "Stiahnuť životopis (PDF)",
    "about.artInterestText":
      "Moje umenie je o spomienkach, pocitoch a tom, čo vidíme. Používam abstraktné tvary a farby, aby som vyvolala emócie. Každý obraz je mix plánovania a prirodzeného tvorenia.",
    "about.artInterestText2":
      "Najčastejšie pracujem s akrylom a rôznymi materiálmi. Vrstvím farby, aby som vytvorila hĺbku. Moje maľby sú otvorené rôznym významom - každý si v nich môže nájsť svoj vlastný príbeh.",
    "about.teachingIntro": "Rada zdieľam svoju lásku k umeniu cez praktické workshopy",
    "about.travelingIntro": "Umelecké rezidencie a tvorivé cesty po svete",
    "about.articles": "Články a rozhovory",

    // Work Experience
    "work.experienceTitle": "PRACOVNÉ SKÚSENOSTI",
    "work.job1.title": "Externý lektor keramiky",
    "work.job1.company": "Ústredie ľudovej umeleckej výroby",
    "work.job1.period": "Júl 2004 - Súčastnosť",
    "work.job1.description": "Výučba točenia na kruhu, rozvoj kreativity, oboznámenie s tradičnými ľudovými remeslami",
    "work.job2.title": "Lektor výtvarného krúžku",
    "work.job2.company": "1.súkromná škôlka Štvorlístok",
    "work.job2.period": "September 2011 - August 2017",
    "work.job2.description": "Práca s hlinou, rozvoj motorických zručností",
    "work.job3.title": "Učiteľka odborných predmetov výtvarného zamerania",
    "work.job3.company": "Združená stredná škola scénického výtvarníctva - Bratislava, Slovenská republika",
    "work.job3.period": "September 1995 - Jún 1996",
    "work.job3.description": "Vyučovanie dejín umenia a kresby",

    // Workshops
    "workshop1.title": "Workshop abstraktnej expresie",
    "workshop1.description": "Praktické skúmanie farby, formy a intuitívneho vytvárania stôp",
    "workshop1.duration": "2 dni",
    "workshop1.level": "Všetky úrovne",
    "workshop2.title": "Techniky zmiešaných médií",
    "workshop2.description": "Kombinácia koláže, farby a nájdených materiálov v súčasnom umení",
    "workshop2.duration": "1 deň",
    "workshop2.level": "Stredne pokročilí",
    "workshop3.title": "Teória farieb v praxi",
    "workshop3.description": "Pochopenie vzťahov farieb a vytváranie dynamických paliet",
    "workshop3.duration": "Pol dňa",
    "workshop3.level": "Začiatočníci",

    // Residencies
    "residency1.location": "Barcelona, Španielsko",
    "residency1.period": "Jar 2024",
    "residency1.description":
      "Transformačná trojmesačná rezidenčná pobyt skúmajúca vzťah medzi stredomorským svetlom a abstraktnou formou. Pracujúc v prestavenom priemyselnom priestore pri Gotickom štvrte, som vyvinula novú sériu kombinujúcu organické tvary s architektonickými prvkami inšpirovanými Gaudího víziou.",
    "residency1.extendedDescription":
      "Rezidenčný pobyt mi umožnil experimentovať s novými farebnými paletami inšpirovanými mestskými dlaždicami a mozaikami. Denné prechádzky cez Barri Gòtic ovplyvnili techniky vrstvenia v mojej práci, vytvárajúc hĺbku prostredníctvom historickej akumulácie.",
    "residency2.location": "Kjóto, Japonsko",
    "residency2.period": "Jeseň 2023",
    "residency2.description":
      "Ponorná skúsenosť v tradičnej japonskej estetike a dialógu súčasného umenia. Rezidenčný pobyt v štúdiu priľahlom k chrámu poskytol jedinečné pohľady na filozofiu wabi-sabi a jej aplikáciu na abstraktnú maľbu.",
    "residency2.extendedDescription":
      "Pracujúc s miestnymi umelcami, som skúmala koncept ma (negatívny priestor) a jeho úlohu v kompozícii. Menšie sa jesenné farby a chrámové záhrady hlboko ovplyvnili môj prístup k jemným gradáciám a atmosférickým efektom.",
    "residency3.location": "Reykjavík, Island",
    "residency3.period": "Zima 2023",
    "residency3.description":
      "Zimný rezidenčný pobyt zameraný na svetlo, tmu a vznešenú krajinu. Extrémne podmienky a minimálne hodiny denného svetla posunuli moju prácu k introspekatívnejším a atmosférickejším smerom.",
    "residency3.extendedDescription":
      "Sopečná krajina a polárna žiara poskytli nekonečnú inšpiráciu pre vzťahy farieb a emocionálnu intenzitu. Práca v takmer tme počas väčšiny dňa vytvorila meditatívnu ateliérovú prax, ktorá transformovala môj prístup k maľbe.",

    // Press Articles
    "article1.title": "Výstava Retrospektíva",
    "article1.description": "Komplexný pohľad na umeleckú cestu",
    "article1.publication": "RKCPD Prievidza",
    "article2.title": "Bienále FORMA",
    "article2.description": "Siedmy ročník výstavy úžitkového umenia",
    "article2.publication": "Slovenská výtvarná únia - Galéria Umelka",

    // Teaching Page
    "teaching.title": "Vyučovanie a workshopy",
    "teaching.description":
      "Zdieľanie mojej vášne pre abstraktné umenie prostredníctvom praktických workshopov a kreatívnych stretnutí",
    "teaching.stat1.title": "15+ rokov skúseností",
    "teaching.stat1.description": "Výučba techník abstraktnej maľby študentom všetkých úrovní",
    "teaching.stat2.title": "500+ študentov",
    "teaching.stat2.description": "Od začiatočníkov po pokročilých umelcov naprieč workshopmi a rezidenčnými pobytmi",
    "teaching.stat3.title": "Workshopy na mieru",
    "teaching.stat3.description": "Prispôsobené stretnutia pre skupiny, školy a firemné podujatia",
    "teaching.workshopsTitle": "Dostupné workshopy",
    "teaching.workshopDuration": "Trvanie",
    "teaching.workshopLevel": "Úroveň",
    "teaching.bookingText": "Máte záujem o rezerváciu workshopu alebo súkromného stretnutia?",
    "teaching.getInTouch": "Kontaktujte ma",

    // Traveling Artist Page
    "travelling.title": "Cestujúci umelec",
    "travelling.description": "Rezidencie, cesty a tvorivé objavy po celom svete",
    "travelling.readMore": "Čítať viac",
    "travelling.showLess": "Zobraziť menej",

    // Gallery
    "works.selected": "Vybrané diela",
    "works.documents": "Dokumenty",
    "works.instagram": "Instagram",
    "works.instagramDescription": "Veľké množstvo mojich umeleckých diel nájdete na mojom Instagrame. Sledujte ma tam a pozrite si moje najnovšie tvorby, rozpracované diela a novinky z ateliéru.",
    "works.follow": "Sledujte ma na Instagrame",
    "works.document1.title": "Rozhovory farieb a hliny",
    "works.document1.description": "Vizuálne skúmanie farieb a keramického umenia",
    "works.document2.title": "Projekt Polly",
    "works.document2.description": "Umelecká cesta cez formu a výraz",
    "works.viewDocument": "Zobraziť PDF",

    // Common
    "common.readMore": "Čítať viac",
    "common.showLess": "Zobraziť menej",
  },
} as const;
