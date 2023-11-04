import { Box } from "../../Lib";
import { buttonType } from "./types"

export const Button = (props: buttonType) => {
    return Box({
        element: "button",
        children: props.children,
        attr: {
            ...props.attr
        }
    });
}