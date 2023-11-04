import { Box } from "../../Lib"
import { Routes } from "../../Router/routes"

export const Navbar = () => {
    return Box({
        element: "navbar",
        children: Box({
            element: "div",
            attr: {
                class: "flex justify-between px-20 py-10"
            },
            children: [
                Box({
                    element: "h1",
                    children: "SHOPPE",
                    attr: { class: "text-xl font-bold" }
                }),
                Box({
                    element: "div",
                    attr: { class: "flex"},
                    children: [
                        Box({
                            element: "div",
                            children: Routes.map(route => route.title ? Box({
                                element: "a",
                                children: route.title,
                                attr: {
                                    href: route.path,
                                    class: "me-10 text-sm"
                                }
                            }):null )
                        }),
                        " | ",
                        Box({
                            element: "div",
                            attr:{ class: "flex"},
                            children: Routes.map(route => Box({
                                element: "a",
                                attr: { href: route.path },
                                children: route.icon? Box({
                                    element: "img",
                                    attr: {
                                        src: route.icon,
                                        class: "ml-10"
                                    }
                                }):null
                            }) )
                        })
                    ]
                })
            ]
        })
    })
}