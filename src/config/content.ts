/**
 * Content configuration
 * Static content data for artworks, press articles, etc.
 * Translatable text uses translation keys from translations.ts
 */

import { images } from "./images";

// Artwork data for gallery
export const artworks = [
  {
    id: 1,
    image: images.artworks[0],
    title: "Studio Mural",
    year: "2024",
    medium: "Mixed media on wall",
    dimensions: "Large scale",
    description: "Striking cat mural in studio workspace with vibrant teal patterns",
  },
  {
    id: 2,
    image: images.artworks[1],
    title: "Interior Studies",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "Various sizes",
    description: "A series exploring domestic spaces and still life compositions",
  },
  {
    id: 3,
    image: images.artworks[2],
    title: "Landscape Journey",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "Framed",
    description: "Atmospheric landscape with flowing colors and emotional depth",
  },
  {
    id: 4,
    image: images.artworks[3],
    title: "Colorful Creature",
    year: "2024",
    medium: "Mixed media on wood",
    dimensions: "Large scale",
    description: "Bold cat face artwork merging graphic design with expressive color",
  },
  {
    id: 5,
    image: images.artworks[4],
    title: "Body Art",
    year: "2024",
    medium: "Tattoo design",
    dimensions: "Various",
    description: "Exploring art on skin with distinctive cat motif designs",
  },
  {
    id: 6,
    image: images.artworks[5],
    title: "Coastal Moment",
    year: "2024",
    medium: "Photography",
    dimensions: "Digital",
    description: "Capturing natural beauty and serene coastal landscapes",
  },
] as const;

// Instagram posts (reuses artwork images)
export const instagramPosts = artworks.map((art) => ({
  id: art.id,
  image: art.image,
}));

// Press articles configuration
export const pressArticles = [
  {
    id: 1,
    titleKey: "article1.title" as const,
    descriptionKey: "article1.description" as const,
    publicationKey: "article1.publication" as const,
    link: "https://www.rkcpd.sk/hlavna-stranka/podujatia/vystava-retrospektiva.html?page_id=9142",
    coverImage: images.retrospektiva.cover,
    secondImage: images.retrospektiva.second,
  },
  {
    id: 2,
    titleKey: "article2.title" as const,
    descriptionKey: "article2.description" as const,
    publicationKey: "article2.publication" as const,
    link: "https://www.archinfo.sk/kalendarium/bienale-forma-13163.html",
    coverImage: images.bienale.cover,
    secondImage: images.bienale.second,
  },
] as const;

// Workshops configuration (uses translation keys)
export const workshops = [
  { id: 1, titleKey: "workshop1.title", descriptionKey: "workshop1.description", durationKey: "workshop1.duration", levelKey: "workshop1.level" },
  { id: 2, titleKey: "workshop2.title", descriptionKey: "workshop2.description", durationKey: "workshop2.duration", levelKey: "workshop2.level" },
  { id: 3, titleKey: "workshop3.title", descriptionKey: "workshop3.description", durationKey: "workshop3.duration", levelKey: "workshop3.level" },
] as const;

// Residencies configuration (uses translation keys)
export const residencies = [
  {
    id: 1,
    locationKey: "residency1.location",
    periodKey: "residency1.period",
    descriptionKey: "residency1.description",
    extendedDescriptionKey: "residency1.extendedDescription",
    images: [images.artworks[0], images.artworks[1], images.artworks[2]],
  },
  {
    id: 2,
    locationKey: "residency2.location",
    periodKey: "residency2.period",
    descriptionKey: "residency2.description",
    extendedDescriptionKey: "residency2.extendedDescription",
    images: [images.artworks[1], images.artworks[2], images.artworks[0]],
  },
  {
    id: 3,
    locationKey: "residency3.location",
    periodKey: "residency3.period",
    descriptionKey: "residency3.description",
    extendedDescriptionKey: "residency3.extendedDescription",
    images: [images.artworks[2], images.artworks[0], images.artworks[1]],
  },
] as const;

// Work experience configuration (uses translation keys)
export const workExperience = [
  { id: 1, titleKey: "work.job1.title", companyKey: "work.job1.company", periodKey: "work.job1.period", descriptionKey: "work.job1.description" },
  { id: 2, titleKey: "work.job2.title", companyKey: "work.job2.company", periodKey: "work.job2.period", descriptionKey: "work.job2.description" },
  { id: 3, titleKey: "work.job3.title", companyKey: "work.job3.company", periodKey: "work.job3.period", descriptionKey: "work.job3.description" },
] as const;
