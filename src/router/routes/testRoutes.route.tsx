import { DemoPage } from "pages/demo/DemoPage";
import { Page1 } from "pages/testPages/Page1/page1";
import { Page2 } from "pages/testPages/Page2/page2";
import { IRoute } from "router/interfaces";

export const testRoutes: IRoute[] = [
  {
    path: "/",
    ReactComponent: Page1,
  },
  {
    path: "/page2",
    ReactComponent: Page2,
    children: [
      {
        path: "demo",
        ReactComponent: DemoPage,
      },
    ],
  },
];
