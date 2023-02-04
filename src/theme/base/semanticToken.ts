import { aliasNavToken } from './aliasTokens/nav';
import { borders } from './semanticTokens/borderTokens';
import { btnTokens } from './semanticTokens/buttonToken';
import { cboxTokens } from './semanticTokens/checkboxToken';
import { chipTokenDef } from './semanticTokens/chipToken';
import { colorTokens } from './semanticTokens/colorToken';
import { shadowsToken } from './semanticTokens/shadowsToken';
import { typographyTokens } from './semanticTokens/typography';

export const semanticTokens = {
  fonts: typographyTokens,
  colors: {
    ...colorTokens,
    ...btnTokens,
    ...cboxTokens,

    ...aliasNavToken,
    ...chipTokenDef
  },
  shadows: shadowsToken,
  borders: borders
};
