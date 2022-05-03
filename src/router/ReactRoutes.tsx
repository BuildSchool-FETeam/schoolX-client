import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { IRoute } from "./interfaces";

export interface IRoutesProps {
  routes: IRoute[];
}

const ReactRoutesPre = (props: IRoutesProps) => {
  function renderRoutes(routes: IRoute[]) {
    return routes.map((r) => {
      return renderRoute(r);
    });
  }

  function renderRoute(route: IRoute) {
    if (route.children) {
      const childrenRoutes = renderRoutes(route.children);

      return (
        <Route
          key={route.path}
          path={route.path}
          element={<route.ReactComponent />}
          children={childrenRoutes}
        />
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={<route.ReactComponent />}
      />
    );
  }

  return <Routes>{renderRoutes(props.routes)}</Routes>;
};

export const ReactRoutes = memo(ReactRoutesPre);
