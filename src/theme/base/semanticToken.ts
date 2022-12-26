import { borders } from './semanticTokens/borderTokens';
import { btnTokens } from './semanticTokens/buttonToken';
import { cboxTokens } from './semanticTokens/checkboxToken';
import { colorTokens } from './semanticTokens/colorToken';
import { shadowsToken } from './semanticTokens/shadowsToken';

export const semanticTokens = {
  fonts: {
    title: "'Bai Jamjuree', sans-serif",
    content: "'Inter', sans-serif"
  },
  colors: {
    ...colorTokens,
    ...btnTokens,
    ...cboxTokens
  },
  shadows: shadowsToken,
  borders: borders
};
