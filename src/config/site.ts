/**
 * Site-wide configuration
 * Metadata, social links, and other global settings
 */

export const site = {
  name: "MISIPI",
  fullName: "Martina Pauleová - Solárová",
  tagline: "Ceramics, Painting, Photography",
  cvPath: "/CV_MISIPI.pdf",
} as const;

export const social = {
  instagram: {
    url: "https://www.instagram.com/martinaemisipi/",
    handle: "@martinaemisipi",
  },
} as const;

// Logo letter colors
export const logoColors = {
  m: "#FFB5C5", // Pink
  s: "#A8D8EA", // Light blue
  p: "#E0BBE4", // Lavender
  i: "white",
} as const;
