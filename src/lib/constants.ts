// Animation constants
export const ANIMATION = {
  // MISIPI Logo animation speeds
  LOGO: {
    LETTER_EXPAND_DURATION: 800, // ms - how long it takes for letters to expand
    LETTER_MOVE_DURATION: 600, // ms - how long it takes for S and P to move
    TEXT_FADE_DURATION: 500, // ms - how long for I letters to fade
    NAME_EXPAND_DELAY: 800, // ms - delay before names (ARTINA, etc) expand
    SECOND_NAME_DELAY: 900, // ms - delay before SOLÁROVÁ and AULEOVÁ appear
  },

  // Hero section
  HERO: {
    BLUR_SCROLL_THRESHOLD: 300, // px - distance to scroll before reaching max blur
    MAX_BLUR: 8, // px - maximum blur amount
    TEXT_MOVE_DISTANCE: "15em", // distance text moves when logo expands
  },

  // General UI animations
  UI: {
    STAGGER_DELAY: 0.1, // seconds between staggered items
    FADE_IN_DURATION: 0.3,
    HOVER_SCALE_DURATION: 0.5,
  },
} as const;

// Transitions
export const TRANSITIONS = {
  THEME_SWITCH: 0.5, // seconds - smooth transition when switching themes
} as const;

// Scroll thresholds
export const SCROLL = {
  HEADER_SHADOW_THRESHOLD: 50, // px - when to add shadow to header
} as const;
