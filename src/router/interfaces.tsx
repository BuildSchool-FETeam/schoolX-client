import { FC } from "react";

export interface IRoute {
  path: Path;
  ReactComponent: FC;
  isProtected?: boolean;
  children?: IRoute[];
}

type Path = string;
