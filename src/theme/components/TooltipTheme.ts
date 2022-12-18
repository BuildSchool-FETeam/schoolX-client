import { ComponentStyleConfig } from "@chakra-ui/react";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { TextLayerEnum } from "theme/typography/interfaces";

export const TooltipTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    borderRadius: "10rem",
    // color: ExtendsColorEnum["success.500"],
    bgColor: ExtendsColorEnum["darkLevel.900"],
    layerStyle: TextLayerEnum.labelLg500,
    px: 3,
    py: 2,
    fontSize: "1rem",
  }),
};
