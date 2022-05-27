import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ExtendsColorEnum } from "theme/colors/interfaces";

export const ButtonVariants: ComponentStyleConfig["variants"] = {
  primary: (props) => ({
    bg: mode(
      ExtendsColorEnum["primary.300"],
      ExtendsColorEnum["primary.500"]
    )(props),
    _hover: {
      bg: mode(
        ExtendsColorEnum["primary.400"],
        ExtendsColorEnum["primary.400"]
      )(props),
    },
  }),

  secondary: (props) => ({
    bg: mode(
      ExtendsColorEnum["secondary.300"],
      ExtendsColorEnum["secondary.500"]
    )(props),
    _hover: {
      bg: mode(
        ExtendsColorEnum["secondary.400"],
        ExtendsColorEnum["secondary.400"]
      )(props),
    },
  }),

  info: (props) => ({
    bg: mode(ExtendsColorEnum["info.300"], ExtendsColorEnum["info.500"])(props),
    _hover: {
      bg: mode(
        ExtendsColorEnum["info.400"],
        ExtendsColorEnum["info.400"]
      )(props),
    },
  }),

  error: (props) => ({
    bg: mode(
      ExtendsColorEnum["danger.300"],
      ExtendsColorEnum["danger.500"]
    )(props),
    _hover: {
      bg: mode(
        ExtendsColorEnum["danger.400"],
        ExtendsColorEnum["danger.400"]
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
};
