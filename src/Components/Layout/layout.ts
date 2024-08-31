import { Box } from "../../Lib";
import { layoutType } from "./types";

export const Layout = (props: layoutType) => {
  return Box({
    element: "div",
    children: Box({
      element: "main",
      children: props.children,
    }),
    attr: {
      className: "bg-red-300 max-w-lg mx-auto py-6 px-10",
    },
  });
};
