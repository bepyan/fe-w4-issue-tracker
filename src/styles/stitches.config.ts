import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'Noto Sans KR',
    },
    fontSizes: {
      display: '32px',
      large: '24px',
      medium: '18px',
      small: '16px',
      'x-small': '12px',
    },
    fontWeights: {
      bold: 700,
      medium: 500,
      regular: 400,
    },

    colors: {
      // greyscale
      'off-white': '#FEFEFE',
      background: '#F7F7FC',
      'input-background': '#EFF0F6',
      line: '#D9DBE9',
      placeholder: '#A0A3BD',
      label: '#6E7191',
      body: '#4E4B66',
      'title-active': '#14142B',

      // colors
      primary100: '#C7EBFF',
      primary300: '#007AFF',
      primary500: '#004DE3',
      secondary100: '#CCD4FF',
      secondary300: '#0025E7',
      secondary500: '#020070',
      success100: '#DDFFE6',
      success300: '#34C759',
      success500: '#00A028',
      error100: '#FFD1CF',
      error300: '#FF3B30',
      error500: '#C60B00',
    },
  },
  utils: {
    flexCenter: (flexDirection?: Stitches.PropertyValue<'flexDirection'>) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: flexDirection || 'row',
    }),
    iconColor: (color: Stitches.PropertyValue<'color'>) => ({
      path: {
        stroke: color,
      },
    }),
    replaceIconStrokeToFill: (color: Stitches.PropertyValue<'color'>) => ({
      path: {
        stroke: 'none',
        fill: color,
      },
    }),
  },
});
