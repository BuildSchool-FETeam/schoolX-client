import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { ExtendedColor } from 'theme/colors/interfaces';

export const ButtonVariants: ComponentStyleConfig['variants'] = {
  primary: (props) => ({
    bg: mode(
      ExtendedColor['primary_light.500'],
      ExtendedColor['primary_dark.500']
    )(props),
    _hover: {
      bg: mode(
        ExtendedColor['primary_light.500'],
        ExtendedColor['primary_dark.500']
      )(props)
    }
  }),

  success: (props) => ({
    color: mode(
      ExtendedColor['darkLevel.900'],
      ExtendedColor['darkLevel.100']
    )(props),
    bg: mode(
      ExtendedColor['success_light.500'],
      ExtendedColor['success_dark.500']
    )(props),
    _hover: {
      bg: mode(
        ExtendedColor['success_light.500'],
        ExtendedColor['success_dark.500']
      )(props)
    }
  })
};
