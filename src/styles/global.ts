import './font-face.css';
import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Noto Sans KR',
  },
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
