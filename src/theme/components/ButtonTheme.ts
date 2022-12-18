import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { ButtonVariants } from "./ButtonVariants";

export const ButtonTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    borderRadius: "10rem",
    fontFamily: "content",

    color: mode(
      ExtendsColorEnum["darkLevel.100"],
      ExtendsColorEnum["darkLevel.100"]
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

  variants: ButtonVariants,

  defaultProps: {
    variant: "primary",
  },
};
