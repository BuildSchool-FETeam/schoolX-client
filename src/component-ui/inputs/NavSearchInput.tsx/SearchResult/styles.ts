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
    borderRadius: '.5rem',

    '.chip': {
      marginRight: '.7rem'
    }
  },

  searchItemBox: {
    p: '.75rem',
    cursor: 'pointer',
    borderRadius: '.7rem',
    border: '1px solid transparent',
    alignItems: 'center',

    _hover: {
      borderColor: NavTokenColor.alias_divider_1
    }
  }
};
