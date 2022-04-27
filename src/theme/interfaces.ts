import { CSSObject } from "@chakra-ui/react";
import { CSSProperties } from "react";

export interface IStyleSheet {
  [key: string]: CSSProperties | CSSObject;
}
