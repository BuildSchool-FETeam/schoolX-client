import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ColorToken } from 'theme/base/interfaces';
import { IStyleSheet } from 'theme/interfaces';

export const styles: IStyleSheet = {
  resultBox: {
    bg: ColorToken.global_dark_level_transparent_56,
    minH: '10rem',
    position: 'absolute',
    top: '3.6rem',
    right: '0px',
    border: '1px solid',
    borderColor: NavTokenColor.alias_divider_1,
    borderRadius: '.5rem'
  }
};
