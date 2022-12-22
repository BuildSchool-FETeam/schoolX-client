import { defineStyleConfig } from '@chakra-ui/react';
import { ColorToken } from 'theme/base/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';

export const fitButtonReusableStyle = {
  color: 'white',
  borderRadius: '.4rem',
  fontFamily: 'content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .3s'
};

export const PrisButtonSecStyle = defineStyleConfig({
  baseStyle: {
    ...fitButtonReusableStyle
  },

  variants: {
    primary: {
      color: ColorToken.primary_base,
      bgColor: ExtendedColor['darkLevel.100'],

      _hover: {
        color: ColorToken.primary_dark
      },
      _loading: {
        color: ColorToken.primary_light + ' !important',
        bgColor: 'white !important'
      },
      _focus: {
        color: ColorToken.primary_darker,
        outline: `3px solid`,
        outlineColor: ExtendedColor['darkLevel.500']
      },
      _disabled: {
        bgColor: ExtendedColor['darkLevel.100'],
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
