import { extendTheme } from "@chakra-ui/react";
import { global } from "./colors/baseColor";
import { globalStyle } from "./base/globalStyle";
import { semanticTokens } from "./base/semanticToken";
import { textLayerStyle } from "./typography/textLayerStyle";
import { ButtonTheme } from "./components/ButtonTheme";
import { TooltipTheme } from "./components/TooltipTheme";
import { TextTheme } from "./components/TextTheme";
import { breakpoints } from "./base/breakPoints";

export const chakraTheme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  breakpoints: breakpoints,
  semanticTokens: semanticTokens,
  styles: {
    global: globalStyle,
  },
  colors: global,
  layerStyles: {
    ...textLayerStyle,
  },
  components: {
    Button: ButtonTheme,
    Tooltip: TooltipTheme,
    Text: TextTheme,
  },
});
