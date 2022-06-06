import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { omit } from "lodash";

export interface IDisplayContainerProps extends PropsWithChildren<any> {
  isFluid?: boolean;
}

/**
 * This is the Box component as original but it help you center align the content in the safe space
 */
export const DisplayContainer = (props: IDisplayContainerProps & BoxProps) => {
  const { isFluid = false } = props;

  let maxWidth: { [key: string]: any } = {};
  let px: { [key: string]: any } = {};

  if (!isFluid) {
    maxWidth = { base: "full", md: "800px", lg: "1200px" };
    px = { base: "2px", md: "1px" };
  } else {
    maxWidth = { base: "full" };
    px = { base: "1px" };
  }

  return (
    <Box px={px} m="0 auto" maxW={maxWidth} {...omit(props, "isFluid")}>
      {props.children}
    </Box>
  );
};
