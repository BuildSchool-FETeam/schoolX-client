import { ColorToken } from 'theme/base/interfaces';
import { ExtendsColorEnum } from 'theme/colors/interfaces';

export const colorDarkBoxData = [
  {
    color: ExtendsColorEnum['darkLevel.700'],
    text: 'base 1'
  },
  {
    color: ExtendsColorEnum['darkLevel.900'],
    text: 'base 2'
  }
];

export const colorLightBoxData = [
  {
    color: ExtendsColorEnum['primary_dark.500'],
    text: 'primary 500'
  },
  {
    color: ExtendsColorEnum['warning_dark.500'],
    text: 'warning 500'
  }
];

export const colorTokenBox = [
  {
    color: ColorToken.primary_darker,
    text: 'primary darker'
  },
  {
    color: ColorToken.success_base,
    text: 'Success base'
  },

  {
    color: ColorToken.warning_light,
    text: 'Warning light'
  },

  {
    color: ColorToken.error_dark,
    text: 'Error dark'
  }
];
