import { ComponentStyleConfig } from "@chakra-ui/react";
import { lighten, mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { CSSObject } from "@emotion/react";
import { ExtendsColorEnum } from "theme/colors/interfaces";

export enum ExtendsColorScheme {
  primary = "primary",
}

function generateColorScheme(props: StyleFunctionProps): CSSObject {
  let cssObject: CSSObject = {};
  const basicBgPrimaryColor = ExtendsColorEnum["primary.500"];

  switch (props.colorScheme as ExtendsColorScheme) {
    case ExtendsColorScheme.primary:
      cssObject = {
        bgColor: mode(
          ExtendsColorEnum["primary.400"],
          basicBgPrimaryColor
        )(props),

        _hover: {
          bgColor: mode(
            ExtendsColorEnum["primary.500"],
            lighten(basicBgPrimaryColor, 15)
          )(props),
        },
      };
      break;

    default:
      break;
  }

  return cssObject;
}

export const ButtonTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    borderRadius: "10rem",
    fontFamily: "content",

    color: mode(
      ExtendsColorEnum["grayScale.900"],
      ExtendsColorEnum["grayScale.50"]
    )(props),

    _disabled: {
      opacity: 1,
      pointerEvents: "none",
      cursor: "pointer",

      bg: mode(
        ExtendsColorEnum["darkLevel.200"],
        ExtendsColorEnum["darkLevel.400"]
      )(props),
      color: mode(
        ExtendsColorEnum["darkLevel.700"],
        ExtendsColorEnum["darkLevel.200"]
      )(props),
    },
  }),

  variants: {
    primary: (props) => ({
      ...generateColorScheme(props),
    }),

    secondary: (props) => ({
      bgColor: mode(
        ExtendsColorEnum["secondary.400"],
        ExtendsColorEnum["secondary.500"]
      )(props),

      _hover: {
        bgColor: mode(
          ExtendsColorEnum["secondary.500"],
          ExtendsColorEnum["secondary.400"]
        )(props),
      },
    }),

    ghost: (props) => ({
      backgroundColor: "transparent",
      color: ExtendsColorEnum["secondary.500"],
      _hover: {
        backgroundColor: "whiteAlpha.300",
      },
      _disabled: {
        bg: "transparent",
        color: mode(
          ExtendsColorEnum["grayScale.400"],
          ExtendsColorEnum["grayScale.600"]
        )(props),
      },
    }),
  },

  defaultProps: {
    colorScheme: ExtendsColorScheme.primary,
    variant: "primary",
  },
};
