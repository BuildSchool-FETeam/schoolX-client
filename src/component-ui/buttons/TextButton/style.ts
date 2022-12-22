import { defineStyleConfig } from '@chakra-ui/react';
import { ColorToken, ShadowToken } from 'theme/base/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';

export const TextButtonStyle = defineStyleConfig({
  baseStyle: {
    transition: 'all .3s',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    _hover: {
      shadow: ShadowToken.z4
    }
  },

  variants: {
    primary: {
      color: ColorToken.primary_base,
      _hover: {
        backgroundColor: ExtendedColor['darkLevel.800'],
        color: ColorToken.primary_light
      },
      _disabled: {
        color: ExtendedColor['darkLevel.500'],
        backgroundColor: 'transparent',
        cursor: 'not-allowed'
      }
    }
  },
  sizes: {
    sm: {
      fontSize: '14px',
      padding: '6px 8px'
    },
    md: {
      fontSize: '16px',
      padding: '6px 12px'
    },
    lg: {
      fontSize: '18px',
      padding: '6px 12px'
    }
  },

  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
});
