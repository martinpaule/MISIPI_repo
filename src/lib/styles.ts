// Reusable style objects

/**
 * Creates a text outline effect (stroke around text)
 * @param width - The width of the outline in pixels
 * @param color - The color of the outline
 */
export const createTextOutline = (width: number = 2, color: string = '#000') => ({
  textShadow: [
    `-${width}px -${width}px 0 ${color}`,
    `${width}px -${width}px 0 ${color}`,
    `-${width}px ${width}px 0 ${color}`,
    `${width}px ${width}px 0 ${color}`,
    `-${width}px 0 0 ${color}`,
    `${width}px 0 0 ${color}`,
    `0 -${width}px 0 ${color}`,
    `0 ${width}px 0 ${color}`,
  ].join(', '),
});

// Commonly used text outline styles
export const TEXT_OUTLINES = {
  thin: createTextOutline(1, '#000'),
  thinWhite: createTextOutline(1, '#fff'),
  medium: createTextOutline(2, '#000'),
  thick: createTextOutline(3, '#000'),
  white: createTextOutline(2, '#fff'),
} as const;
