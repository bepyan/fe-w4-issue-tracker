import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Noto Sans KR',
    src: 'local(../assets/fonts/NotoSansKR-Bold), local(../assets/fonts/NotoSansKR-Regular)',
  },
  '*': { margin: 0, padding: 0, fontFamily: 'Noto Sans KR' },
  'ol, ul, li, menu': {
    listStyle: 'none',
  },
  'textarea:focus, button:focus, input:focus': {
    outline: 'none',
  },
  textarea: {
    whiteSpace: 'revert',
  },
});
