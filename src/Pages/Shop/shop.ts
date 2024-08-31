import { Textfields } from "../../Components/Textfields/textfields"
import { Box } from "../../Lib"

export const Shop = () => {
    return Box({
        element: "div",
        attr: {
            class: "px-20 mt-10"
        },
        children:[
            Box({
                element: "h1",
                children: "Shop The Latest",
                attr: {
                    class: "text-lg font-bold"
                }
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex"
                },
                children: [
                    Box({
                        element: "div",
                        children: [
                            Box({
                                element: "div",
                                attr: {
                                    class: "border-b-2 border-slate-100 mt-20 flex justify-between p-2"
                                },
                                children: [
                                    Box({
                                        element: "p",
                                        children: "Search...",
                                        attr: {
                                            class: "text-slate-400"
                                        }
                                    }),
                                    Box({
                                        element: "img",
                                        attr: {
                                            src: "/search.svg"
                                        }
                                    })
                                ]
                            }),
                            Textfields({
                                placeholder: "Shop by"
                            })
                        ]
                    }),
                    Box({
                        element: "div"
                    })
                ]
            })
        ]
    })
}