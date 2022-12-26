import { defineStyleConfig } from '@chakra-ui/react';
import { ButtonTokenColor, ColorToken } from 'theme/base/interfaces';

export const fitButtonReusableStyle = {
  color: 'white',
  borderRadius: '.4rem',
  fontFamily: 'content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .3s',
  minW: '100px'
};

export const PrisButtonStyle = defineStyleConfig({
  baseStyle: {
    ...fitButtonReusableStyle
  },

  variants: {
    primary: {
      backgroundColor:
        ButtonTokenColor.cpn_btn_primary_background_default,
      color: 'white',

      _hover: {
        bg: ButtonTokenColor.cpn_btn_primary_background_hover
      },
      _loading: {
        bg:
          ButtonTokenColor.cpn_btn_primary_background_loading +
          ' !important',
        color: 'white !important'
      },
      _focus: {
        bg: ButtonTokenColor.cpn_btn_primary_background_focus,
        outline: `3px solid`,
        outlineColor: ColorToken.primary_light
      },
      _disabled: {
        bg: 'white',
        color: ButtonTokenColor.cpn_btn_primary_content_disable,
        cursor: 'not-allowed'
      }
    }
  },

  sizes: {
    sm: {
      fontSize: '14px',
      padding: '8px 12px'
    },
    md: {
      fontSize: '16px',
      padding: '10px 16px'
    },
    lg: {
      fontSize: '18px',
      padding: '14px 20px'
    }
  },

  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
});
