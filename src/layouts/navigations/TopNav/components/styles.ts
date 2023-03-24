import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import { defineStyle } from '@chakra-ui/react';

const commonBtnStyle = {
  transition: 'all .2s',
  boxSize: '2.75rem',
  minW: 0,
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-1px'
};
export const styles = defineStyle({
  noticCount: {
    alignItems: 'center',
    justifyContent: 'center',
    w: '1.25rem',
    h: '1.25rem',
    bg: ExtendedColor['error_dark.500'],
    borderRadius: '5rem',
    position: 'absolute',
    top: '-3px',
    right: '-5px'
  },

  profilePanel: {
    w: '23.8rem',
    mr: '1rem',
    my: '.5rem',
    alignItems: 'center',
    borderRadius: '.75rem',
    transition: 'all .3s',
    overflow: 'hidden',
    maxH: 'calc(100vh - 5rem)',
    overflowY: 'auto',

    '.avatarBadge': {
      transform: 'translateY(-1.25rem)'
    },
    '.settingNav': {
      mt: '1rem'
    },
    '.switchButton': {
      mb: '1rem',
      animation: 'slideIn .4s ease-in'
    }
  },

  bigProfileImg: {
    boxSize: '10.5rem',
    border: '4px solid',
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
  },

  switchButtonWrapper: {
    w: '100%',
    h: '3rem',
    px: '1rem',
    borderRadius: '.5rem',
    cursor: 'pointer',
    _hover: {
      bgColor: 'rgba(255,255,255, .16)'
    },
    transition: 'all .3s'
  },

  switchButtonBgActive: {
    bgColor: NavTokenColor.cpn_nav_ver_bg_active,
    _hover: {
      opacity: 0.64
    }
  },
  switchButtonContentActive: {
    fill: NavTokenColor.cpn_nav_ver_content_active,
    color: NavTokenColor.cpn_nav_ver_content_active
  },

  notificationBellBox: {
    ml: '1.25rem',
    boxSize: '2.25rem !important',
    borderRadius: '50%',
    minW: 0
  },
  notificationPanel: {
    w: '23rem',
    mt: '.5rem',
    mr: '1rem'
  },

  notificationList: {
    pb: '1rem',
    maxH: 'calc(100vh - 15.3rem)',
    overflowY: 'auto'
  },

  slideRightBtn: {
    ...commonBtnStyle,
    right: '7px'
  },

  slideLeftBtn: {
    ...commonBtnStyle,
    left: '7px'
  }
});
