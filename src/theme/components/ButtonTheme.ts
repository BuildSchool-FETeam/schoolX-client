import { ComponentStyleConfig } from "@chakra-ui/react";
import { ExtendsColorEnum } from "theme/colors/interfaces";

export const ButtonTheme: ComponentStyleConfig = {
  baseStyle: props =>  ({
    borderRadius: '10rem',
    fontFamily: 'content',
    _disabled: {
      bg: 'gray.400',
      opacity: 1,  
      pointerEvents: 'none',
      cursor: 'pointer',
      color: 'gray.300'
    },
  }),

  variants: {
    ghosh: props => ({
      backgroundColor: 'transparent',
      color: ExtendsColorEnum["secondary.500"],
      _hover: {
        backgroundColor: 'whiteAlpha.300'
      },
      _disabled: {
        bg: 'transparent',
        color: 'gray.400'
      }
    })
  }
} 