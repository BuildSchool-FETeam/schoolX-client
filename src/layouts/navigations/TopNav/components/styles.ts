import { popoverStyleFromTopBar } from 'component-ui/inputs/NavSearchInput.tsx/SearchResult/styles';
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
  },

  profilePanel: {
    ...popoverStyleFromTopBar,

    minW: '25.75rem',
    mr: '1rem',
    my: '.5rem',
    alignItems: 'center',
    borderRadius: '.75rem',
    '.avatarBadge': {
      transform: 'translateY(-1.25rem)'
    },
    '.settingNav': {
      mt: '1rem'
    }
  },

  bigProfileImg: {
    boxSize: '10.5rem',
    border: '4px solid',
    // borderColor: ExtendedColor['darkLevel.100'],
    borderRadius: '10.5rem',
    objectFit: 'cover',
    mt: '-6.3rem'
  },

  settingNav: {
    alignItems: 'center',
    minW: '23.75rem',
    minH: '3rem',
    px: '.75rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all .2s',

    _hover: {
      bgColor: 'rgba(255, 255, 255, 0.16)'
    }
  },
  settingNavDisabled: {
    opacity: 0.25,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  }
};
