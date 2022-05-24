import { ConnectionLost } from "svgs/empty_state/ConnectionLost";
import { EmptyFavorite } from "svgs/empty_state/EmptyFavorite";
import { EmptyMessage } from "svgs/empty_state/EmptyMessage";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { ItemState } from "./DemoEmptyState";

export const colorDarkBoxData = [
  {
    color: ExtendsColorEnum["darkLevel.700"],
    text: "base 1",
  },
  {
    color: ExtendsColorEnum["darkLevel.900"],
    text: "base 2",
  },
];

export const colorLightBoxData = [
  {
    color: ExtendsColorEnum["primary.500"],
    text: "primary 500",
  },
  {
    color: ExtendsColorEnum["secondary.500"],
    text: "secondary 500",
  },
  {
    color: ExtendsColorEnum["danger.500"],
    text: "error 500",
  },
  {
    color: ExtendsColorEnum["warning.500"],
    text: "warning 500",
  },
];

export const emptyStateData: ItemState[] = [
  {
    IconComp: <EmptyMessage h={"13rem"} w={"13rem"} />,
    title: "No Messages",
    content: "When you have messages you’ll see them here",
  },
  {
    IconComp: <EmptyFavorite h={"13rem"} w={"13rem"} />,
    title: "No Favorites",
    content: "You can add an item to your favourites by clicking “Star Icon”",
  },
  {
    IconComp: <ConnectionLost h={"13rem"} w={"13rem"} />,
    title: "Connection Lost",
    content:
      "Whoops, no internet connection found. Please check your connection",
  },
];
