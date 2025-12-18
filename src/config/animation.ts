/**
 * Animation and timing configuration
 * Centralized settings for all animations across the app
 */

// Logo Animation Configuration
export const logoAnimation = {
  duration: {
    letterSlide: 500,
    letterMove: 400,
    letterFade: 200,
  },
  delay: {
    martina: 500,
    solarova: 600,
    pauleova: 600,
  },
  transform: {
    sVertical: "1.2em",
    sHorizontal: "-1em",
    pVertical: "2.4em",
    pHorizontal: "-2em",
  },
} as const;

// Hero Section Animation
export const heroAnimation = {
  scroll: {
    blurThreshold: 300,
    maxBlur: 8,
  },
  subtitleTransform: "15em",
} as const;

// Navigation Configuration
export const navigation = {
  scrollOffset: 80,
  scrollThreshold: 50,
} as const;

// Staggered Animation Delays
export const animationDelays = {
  small: 0.05,
  medium: 0.1,
  large: 0.2,
} as const;

/**
 * Utility: Creates stagger delay style for list items
 */
export const staggerDelay = (index: number, increment: number = animationDelays.medium) => ({
  animationDelay: `${index * increment}s`,
});

/**
 * Utility: Creates text outline effect using text-shadow
 */
export const textOutline = (thickness: number = 2, color: string = "#000") => ({
  textShadow: [
    `-${thickness}px -${thickness}px 0 ${color}`,
    `${thickness}px -${thickness}px 0 ${color}`,
    `-${thickness}px ${thickness}px 0 ${color}`,
    `${thickness}px ${thickness}px 0 ${color}`,
    `-${thickness}px 0 0 ${color}`,
    `${thickness}px 0 0 ${color}`,
    `0 -${thickness}px 0 ${color}`,
    `0 ${thickness}px 0 ${color}`,
  ].join(", "),
});
