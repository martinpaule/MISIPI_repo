/**
 * Reusable style utilities
 * Functions for generating common styles used across components
 */

/**
 * Creates a text outline effect using text-shadow
 * @param thickness - Thickness of the outline in pixels (default: 2)
 * @param color - Color of the outline (default: '#000')
 * @returns CSSProperties object with textShadow
 */
export const textOutline = (thickness: number = 2, color: string = '#000') => ({
  textShadow: [
    `-${thickness}px -${thickness}px 0 ${color}`,
    `${thickness}px -${thickness}px 0 ${color}`,
    `-${thickness}px ${thickness}px 0 ${color}`,
    `${thickness}px ${thickness}px 0 ${color}`,
    `-${thickness}px 0 0 ${color}`,
    `${thickness}px 0 0 ${color}`,
    `0 -${thickness}px 0 ${color}`,
    `0 ${thickness}px 0 ${color}`,
  ].join(', '),
});

/**
 * Generates animation delay for staggered elements
 * @param index - Index of the element
 * @param increment - Time increment between elements in seconds
 * @returns Style object with animationDelay
 */
export const staggerDelay = (index: number, increment: number = 0.1) => ({
  animationDelay: `${index * increment}s`,
});
