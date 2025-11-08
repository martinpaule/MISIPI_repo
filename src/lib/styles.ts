// Reusable style utilities

/**
 * Creates a thick black outline effect for text
 * @param thickness - Outline thickness in pixels (default: 2)
 */
export const textOutline = (thickness = 2): React.CSSProperties => ({
  textShadow: `
    -${thickness}px -${thickness}px 0 #000,
    ${thickness}px -${thickness}px 0 #000,
    -${thickness}px ${thickness}px 0 #000,
    ${thickness}px ${thickness}px 0 #000,
    -${thickness}px 0 0 #000,
    ${thickness}px 0 0 #000,
    0 -${thickness}px 0 #000,
    0 ${thickness}px 0 #000
  `.trim(),
});
