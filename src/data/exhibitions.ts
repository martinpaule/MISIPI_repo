import retrospektivaCover from "@/assets/retrospektiva-cover.jpg";
import retrospektivaSecond from "@/assets/retrospektiva-second.jpg";
import bienaleCover from "@/assets/bienale-cover.jpg";
import bienaleSecond from "@/assets/bienale-second.jpg";

export const exhibitions = [
  {
    title: {
      en: "Retrospective Exhibition",
      sk: "Výstava Retrospektíva"
    },
    description: {
      en: "A comprehensive look at the artist's journey",
      sk: "Komplexný pohľad na umeleckú cestu"
    },
    publication: {
      en: "RKCPD Prievidza",
      sk: "RKCPD Prievidza"
    },
    link: "https://www.rkcpd.sk/hlavna-stranka/podujatia/vystava-retrospektiva.html?page_id=9142",
    coverImage: retrospektivaCover,
    secondImage: retrospektivaSecond,
  },
  {
    title: {
      en: "Bienále FORMA",
      sk: "Bienále FORMA"
    },
    description: {
      en: "Seventh edition of applied arts exhibition",
      sk: "Siedmy ročník výstavy úžitkového umenia"
    },
    publication: {
      en: "Slovenská výtvarná únia - Galéria Umelka",
      sk: "Slovenská výtvarná únia - Galéria Umelka"
    },
    link: "https://www.archinfo.sk/kalendarium/bienale-forma-13163.html",
    coverImage: bienaleCover,
    secondImage: bienaleSecond,
  },
];
