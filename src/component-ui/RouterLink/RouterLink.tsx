import { Link } from "react-router-dom";
import { chakra, LinkProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ExtendsColorEnum } from "theme/colors/interfaces";

export interface IRouterLinkProps extends LinkProps {
  to: string;
}

/**
 * The wrapper of the router link coming from @React-router-dom.
 * You can use as normal chakraUI component
 */
export function RouterLink(props: IRouterLinkProps) {
  const linkColor = useColorModeValue(
    ExtendsColorEnum["primary.500"],
    ExtendsColorEnum["primary.200"]
  );

  const { to, children, color = linkColor } = props;
  const RouterLinkBase = chakra(Link);

  return (
    <RouterLinkBase
      {...props}
      color={color}
      to={to}
      _hover={{
        textDecor: "underline",
      }}
    >
      {children}
    </RouterLinkBase>
  );
}
