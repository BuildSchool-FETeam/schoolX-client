import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import { IStyleSheet } from 'theme/interfaces';

export const styles: IStyleSheet = {
  input: {
    size: 'md',
    minW: '35rem',
    _placeholder: { color: ExtendedColor['darkLevel.500'] },
    color: ExtendedColor['darkLevel.500']
  },
  shortcut: {
    border: '1px solid',
    w: '40px',
    h: '20px',
    borderColor: NavTokenColor.cpn_shortcut_stroke,
    borderRadius: '4px',
    alignItems: 'center',
    justifyContent: 'center',
    mr: '.5rem'
  }
};
