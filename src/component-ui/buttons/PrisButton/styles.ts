import { defineStyleConfig } from '@chakra-ui/react';
import { ColorToken } from 'theme/base/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import { fitButtonReusableStyle } from '../PrisButtonSec/styles';

export const PrisButtonStyle = defineStyleConfig({
  baseStyle: {
    ...fitButtonReusableStyle
  },

  variants: {
    primary: {
      backgroundColor: ColorToken.primary_base,
      color: 'white',

      _hover: {
        bg: ColorToken.primary_dark
      },
      _loading: {
        bg: ColorToken.primary_light + ' !important',
        color: 'white !important'
      },
      _focus: {
        bg: ColorToken.primary_darker,
        outline: `3px solid`,
        outlineColor: ColorToken.primary_light
      },
      _disabled: {
        bg: 'white',
        color: ExtendedColor['darkLevel.500'],
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
