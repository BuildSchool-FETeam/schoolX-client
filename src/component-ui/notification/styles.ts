import { ExtendedColor } from 'theme/colors/interfaces';
import { IStyleSheet } from 'theme/interfaces';

export const styles: IStyleSheet = {
  noticCount: {
    alignItems: 'center',
    justifyContent: 'center',
    w: '1.25rem',
    h: '1.25rem',
    bg: ExtendedColor['error_dark.500'],
    borderRadius: '5rem',
    position: 'absolute',
    top: '-8px',
    right: '-13px'
  }
};
