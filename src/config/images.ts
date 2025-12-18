/**
 * Centralized image configuration
 * All image imports and their metadata in one place
 */

// Artist & Background Images
import artistPortrait from "@/assets/artist-portrait.jpg";
import artistPortraitLowres from "@/assets/artist-portrait-lowres.png";
import heroArtwork from "@/assets/hero-artwork.jpg";

// Section Images
import profileImage from "@/assets/profile-section.jpg";
import artInterestImage from "@/assets/art-interest-section.jpg";
import teachingImage from "@/assets/teaching-section.jpg";
import travellingArtistImage from "@/assets/travelling-artist-section.jpg";
import exhibitionsImage from "@/assets/exhibitions-section.jpg";

// Artwork Images
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

// Press/Exhibition Images
import retrospektivaCover from "@/assets/retrospektiva-cover.jpg";
import retrospektivaSecond from "@/assets/retrospektiva-second.jpg";
import bienaleCover from "@/assets/bienale-cover.jpg";
import bienaleSecond from "@/assets/bienale-second.jpg";

// Export individual images
export const images = {
  artistPortrait,
  artistPortraitLowres,
  heroArtwork,
  profile: profileImage,
  artInterest: artInterestImage,
  teaching: teachingImage,
  travellingArtist: travellingArtistImage,
  exhibitions: exhibitionsImage,
  artworks: [artwork1, artwork2, artwork3, artwork4, artwork5, artwork6],
  retrospektiva: { cover: retrospektivaCover, second: retrospektivaSecond },
  bienale: { cover: bienaleCover, second: bienaleSecond },
} as const;

// Section images map for tab navigation
export const sectionImages = {
  profile: profileImage,
  art: artInterestImage,
  teaching: teachingImage,
  travelling: travellingArtistImage,
  exhibitions: exhibitionsImage,
} as const;

export type SectionKey = keyof typeof sectionImages;
