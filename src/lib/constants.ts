/**
 * Application-wide constants
 * Centralized configuration for animations, layout, and other reusable values
 */

// Logo Animation Configuration
export const LOGO_ANIMATION = {
  // Duration values (in ms for style delays, without unit for Tailwind classes)
  DURATION: {
    LETTER_SLIDE: 500, // Duration for name sliding out
    LETTER_MOVE: 400, // Duration for letter position changes
    LETTER_FADE: 200, // Duration for letter opacity changes
  },
  // Delay values (in ms)
  DELAY: {
    MARTINA: 500, // Delay before MARTINA appears
    SOLAROVA: 600, // Delay before SOLÁROVÁ appears
    PAULEOVA: 600, // Delay before PAULEOVÁ appears
  },
  // Transform values
  TRANSFORM: {
    S_VERTICAL: '1.2em', // How far S moves down
    S_HORIZONTAL: '-1em', // How far S moves left
    P_VERTICAL: '2.4em', // How far P moves down
    P_HORIZONTAL: '-2em', // How far P moves left
  },
} as const;

// Hero Section Configuration
export const HERO_ANIMATION = {
  SCROLL: {
    BLUR_THRESHOLD: 300, // Pixels to scroll before reaching max blur
    MAX_BLUR: 8, // Maximum blur amount in pixels
  },
  SUBTITLE_TRANSFORM: '15em', // How far subtitle moves when logo expands
} as const;

// Navigation Configuration
export const NAVIGATION = {
  SCROLL_OFFSET: 80, // Offset for scroll-to-section (in pixels)
  SCROLL_THRESHOLD: 50, // Scroll distance before nav style changes
} as const;

// Animation Delays (for staggered elements)
export const ANIMATION_DELAYS = {
  INCREMENT_SMALL: 0.05, // For quick sequences (e.g., Instagram grid)
  INCREMENT_MEDIUM: 0.1, // For medium sequences (e.g., artwork grid)
  INCREMENT_LARGE: 0.2, // For larger, slower sequences
  BASE_DELAYS: [0.2, 0.3, 0.4], // Common base delays for elements
} as const;
