import { BoxProps } from ".";

export const Box = (props: BoxProps) => {
    const el = document.createElement(props.element);

    if(!Array.isArray(props.children)) el.append(props.children ?? '');
    else el.append(...props.children.filter((i) => !! i));

    if(props.attr)Object.keys(props.attr).forEach((key:string) => {
        if(key.startsWith("on")){
            el.addEventListener(key.slice(2).toLowerCase(), props.attr[key])
        };

        el.setAttribute(key, props.attr[key]);
    })
    return el;
}