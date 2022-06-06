import { ExtendsColorEnum } from "theme/colors/interfaces";
import { IStyleSheet } from "theme/interfaces";

export const styles: IStyleSheet = {
  outer: {
    px: "4px",
    py: "3px",
    bg: ExtendsColorEnum["secondary.500"],
    borderRadius: "5rem",
    width: "5rem",
  },

  inner: {
    height: "2rem",
    width: "2rem",
    borderRadius: "50%",
    bg: "white",
  },
};
