// Animation constants for MISIPI logo
export const LOGO_ANIMATION = {
  EXPAND_DURATION: 400, // ms - duration for S and P letter movements
  SLIDE_DURATION: 500, // ms - duration for text sliding out
  FADE_DURATION: 200, // ms - duration for I letters fading
  EXPAND_DELAY: 500, // ms - delay before M expands
  SLIDE_DELAY: 600, // ms - delay before S and P slide
} as const;

// Hero section animation constants
export const HERO_ANIMATION = {
  BLUR_THRESHOLD: 300, // px - scroll distance to reach max blur
  MAX_BLUR: 8, // px - maximum blur amount
  SUBTITLE_TRANSLATE_Y: "15em", // vertical movement of subtitle when logo expands
} as const;

// Common animation delays (in seconds, for use with style)
export const ANIMATION_DELAYS = {
  SHORT: "0.1s",
  MEDIUM: "0.15s",
  LONG: "0.2s",
  EXTRA_LONG: "0.3s",
} as const;
