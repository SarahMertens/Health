export interface TextSegment {
  text: string;
  bold: boolean;
}

/**
 * Splits a string with `**bold**` markers into plain and bold segments.
 *
 * The content files stay readable plain text, and the UI can render the
 * segments as real elements instead of injecting HTML with `v-html`.
 *
 * @example
 * parseRichText('Gebruik de **Leg Press**.')
 * // [{ text: 'Gebruik de ', bold: false },
 * //  { text: 'Leg Press', bold: true },
 * //  { text: '.', bold: false }]
 */
export function parseRichText(input: string): TextSegment[] {
  const segments: TextSegment[] = [];

  // Splitting on the marker puts bold parts at the odd positions.
  input.split('**').forEach((text, index) => {
    if (text !== '') {
      segments.push({ text, bold: index % 2 === 1 });
    }
  });

  return segments;
}
