import { describe, expect, it } from 'vitest';
import { parseRichText } from './richText';

describe('parseRichText', () => {
  it('returns plain text as a single segment', () => {
    expect(parseRichText('Rustig wandelen.')).toEqual([
      { text: 'Rustig wandelen.', bold: false },
    ]);
  });

  it('marks text between ** as bold', () => {
    expect(parseRichText('Gebruik de **Leg Press machine**.')).toEqual([
      { text: 'Gebruik de ', bold: false },
      { text: 'Leg Press machine', bold: true },
      { text: '.', bold: false },
    ]);
  });

  it('handles bold text at the start and several bold parts', () => {
    expect(
      parseRichText('**6 × 2 min vlot**\nmet telkens **2 min rustig herstel**.'),
    ).toEqual([
      { text: '6 × 2 min vlot', bold: true },
      { text: '\nmet telkens ', bold: false },
      { text: '2 min rustig herstel', bold: true },
      { text: '.', bold: false },
    ]);
  });

  it('returns no segments for an empty string', () => {
    expect(parseRichText('')).toEqual([]);
  });

  it('keeps characters that look like HTML as plain text', () => {
    expect(parseRichText('<b>x</b>')).toEqual([{ text: '<b>x</b>', bold: false }]);
  });
});
