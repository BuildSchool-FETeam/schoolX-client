import { ExtendsColorEnum } from 'theme/colors/interfaces';

const primary = {
  primary_lighter: {
    default: ExtendsColorEnum['primary_light.100'],
    _dark: ExtendsColorEnum['primary_dark.100']
  },

  primary_light: {
    default: ExtendsColorEnum['primary_light.300'],
    _dark: ExtendsColorEnum['primary_dark.300']
  },

  primary_base: {
    default: ExtendsColorEnum['primary_light.500'],
    _dark: ExtendsColorEnum['primary_dark.500']
  },

  primary_dark: {
    default: ExtendsColorEnum['primary_light.700'],
    _dark: ExtendsColorEnum['primary_dark.700']
  },

  primary_darker: {
    default: ExtendsColorEnum['primary_light.700'],
    _dark: ExtendsColorEnum['primary_dark.700']
  }
};

const success = {
  success_lighter: {
    default: ExtendsColorEnum['success_light.100'],
    _dark: ExtendsColorEnum['success_dark.100']
  },

  success_light: {
    default: ExtendsColorEnum['success_light.300'],
    _dark: ExtendsColorEnum['success_dark.300']
  },

  success_base: {
    default: ExtendsColorEnum['success_light.500'],
    _dark: ExtendsColorEnum['success_dark.500']
  },

  success_dark: {
    default: ExtendsColorEnum['success_light.700'],
    _dark: ExtendsColorEnum['success_dark.700']
  },

  success_darker: {
    default: ExtendsColorEnum['success_light.700'],
    _dark: ExtendsColorEnum['success_dark.700']
  }
};

const warning = {
  warning_lighter: {
    default: ExtendsColorEnum['warning_light.100'],
    _dark: ExtendsColorEnum['warning_dark.100']
  },

  warning_light: {
    default: ExtendsColorEnum['warning_light.300'],
    _dark: ExtendsColorEnum['warning_dark.300']
  },

  warning_base: {
    default: ExtendsColorEnum['warning_light.500'],
    _dark: ExtendsColorEnum['warning_dark.500']
  },

  warning_dark: {
    default: ExtendsColorEnum['warning_light.700'],
    _dark: ExtendsColorEnum['warning_dark.700']
  },

  warning_darker: {
    default: ExtendsColorEnum['warning_light.700'],
    _dark: ExtendsColorEnum['warning_dark.700']
  }
};

const error = {
  error_lighter: {
    default: ExtendsColorEnum['error_light.100'],
    _dark: ExtendsColorEnum['error_dark.100']
  },

  error_light: {
    default: ExtendsColorEnum['error_light.300'],
    _dark: ExtendsColorEnum['error_dark.300']
  },

  error_base: {
    default: ExtendsColorEnum['error_light.500'],
    _dark: ExtendsColorEnum['error_dark.500']
  },

  error_dark: {
    default: ExtendsColorEnum['error_light.700'],
    _dark: ExtendsColorEnum['error_dark.700']
  },

  error_darker: {
    default: ExtendsColorEnum['error_light.700'],
    _dark: ExtendsColorEnum['error_dark.700']
  }
};

const info = {
  info_lighter: {
    default: ExtendsColorEnum['info_light.100'],
    _dark: ExtendsColorEnum['info_dark.100']
  },

  info_light: {
    default: ExtendsColorEnum['info_light.300'],
    _dark: ExtendsColorEnum['info_dark.300']
  },

  info_base: {
    default: ExtendsColorEnum['info_light.500'],
    _dark: ExtendsColorEnum['info_dark.500']
  },

  info_dark: {
    default: ExtendsColorEnum['info_light.700'],
    _dark: ExtendsColorEnum['info_dark.700']
  },

  info_darker: {
    default: ExtendsColorEnum['info_light.700'],
    _dark: ExtendsColorEnum['info_dark.700']
  }
};

// push the token here as you go
const colorTokens = {
  ...primary,
  ...success,
  ...warning,
  ...error,
  ...info
};

export const semanticTokens = {
  fonts: {
    title: "'Bai Jamjuree', sans-serif",
    content: "'Work Sans', sans-serif;"
  },
  colors: colorTokens
};
