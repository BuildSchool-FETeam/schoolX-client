import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { ExtendsColorEnum } from 'theme/colors/interfaces';

export const ButtonVariants: ComponentStyleConfig['variants'] = {
  primary: (props) => ({
    bg: mode(ExtendsColorEnum['primary_light.500'], ExtendsColorEnum['primary_dark.500'])(props),
    _hover: {
      bg: mode(ExtendsColorEnum['primary_light.500'], ExtendsColorEnum['primary_dark.500'])(props)
    }
  }),

  success: (props) => ({
    color: mode(ExtendsColorEnum['darkLevel.900'], ExtendsColorEnum['darkLevel.100'])(props),
    bg: mode(ExtendsColorEnum['success_light.500'], ExtendsColorEnum['success_dark.500'])(props),
    _hover: {
      bg: mode(ExtendsColorEnum['success_light.500'], ExtendsColorEnum['success_dark.500'])(props)
    }
  })
};
