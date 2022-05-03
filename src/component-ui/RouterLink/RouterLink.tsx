import { Link } from "react-router-dom";
import { chakra, LinkProps } from "@chakra-ui/react";
import React from "react";

export interface IRouterLinkProps extends LinkProps {
  to: string;
}

/**
 * The wrapper of the router link coming from @React-router-dom.
 * You can use as normal chakraUI component
 */
export function RouterLink(props: IRouterLinkProps) {
  const { to, children, color = "blue.600" } = props;
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
