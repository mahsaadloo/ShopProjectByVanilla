import { Button } from "../../Components/Button/button"
import { Box } from "../../Lib"

export const Home = () => {
    return Box({
        element: "div",
        children: [
            Box({
                element: "div",
                children: [
                    Box({
                        element: "img",
                        attr:{
                            src: "./Home-pic1.png",
                            class: "px-20 relative"
                        }
                    }),
                    Box({
                        element: "div",
                        attr:{
                            class: "absolute top-1/3 left-28 lg:absolute lg:top-1/2"
                        },
                        children: [
                            Box({
                            element: "h1",
                            children: "Gold big hoops",
                            attr: {
                                class: "text-white text-xl mb-1 lg:text-4xl lg:mb-2"
                            }
                            }),
                            Box({
                                element: "h1",
                                children: "$ 68,00",
                                attr:{
                                    class: "text-white text-sm mb-5 lg:text-xl lg:mb-8"
                                }
                            }),
                            Button({
                                children: "VIEW PRODUCT",
                                attr:{
                                    onClick: (e:Event) => {
                                        e.preventDefault();
                                        location.assign("/shop");
                                    },
                                    class: "text-white bg-inherit hover:bg-slate-100 border border-white focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium lg:font-bold text-xs rounded-sm text-sm w-full sm:w-auto px-4 py-2 lg:py-4 lg:px-10 text-center dark:bg-slate-100 dark:hover:bg-slate-100 dark:focus:ring-slate-100"
                                }
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex justify-between items-center px-20 mt-10"
                },
                children: [
                    Box({
                        element: "h1",
                        children: "Shop The Latest",
                        attr: {
                            class: "text-xl"
                        }
                    }),
                    Box({
                        element: "p",
                        children: "View All",
                        attr:{
                            class: "text-xs text-custom-gold"
                        }
                    })
                ]
                
            }),
            Box({
                element: "div",
                attr:{
                    class: "flex justify-between gap-5 px-20 py-8"
                },
                children: [
                    Box({
                        element: "div",
                        children: [
                            Box({
                                element: "img",
                                attr: {
                                    src: "./card-1.png",
                                    class: "w-80 mb-4"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "Lira Earrings",
                                attr: {
                                    class: "text-lg"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "$ 20,00",
                                attr: {
                                    class: "text-custom-gold mt-2"
                                }
                            })
                        ]
                    }),
                    Box({
                        element: "div",
                        children: [
                            Box({
                                element: "img",
                                attr: {
                                    src: "./card-2.png",
                                    class: "w-80 mb-4"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "Hal Earrings",
                                attr: {
                                    class: "text-lg"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "$ 25,00",
                                attr: {
                                    class: "text-custom-gold mt-2"
                                }
                            })
                        ]
                    }),
                    Box({
                        element: "div",
                        children: [
                            Box({
                                element: "img",
                                attr: {
                                    src: "./card-3.png",
                                    class: "w-80 mb-4"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "Kaede Hair Pin Set Of 3 ",
                                attr: {
                                    class: "text-lg"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "$ 30,00",
                                attr: {
                                    class: "text-custom-gold mt-2"
                                }
                            })
                        ]
                    })
                ]
            }),
            Box({
                element: "div",
                attr:{
                    class: "flex justify-between gap-5 px-20 py-8"
                },
                children: [
                    Box({
                        element: "div",
                        children: [
                            Box({
                                element: "img",
                                attr: {
                                    src: "./card-4.png",
                                    class: "w-80 mb-4"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "Hair Pin Set of 3",
                                attr: {
                                    class: "text-lg"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "$ 30,00",
                                attr: {
                                    class: "text-custom-gold mt-2"
                                }
                            })
                        ]
                    }),
                    Box({
                        element: "div",
                        children: [
                            Box({
                                element: "img",
                                attr: {
                                    src: "./card-5.png",
                                    class: "w-80 mb-4"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "Plaine Necklace",
                                attr: {
                                    class: "text-lg"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "$ 19,00",
                                attr: {
                                    class: "text-custom-gold mt-2"
                                }
                            })
                        ]
                    }),
                    Box({
                        element: "div",
                        children: [
                            Box({
                                element: "img",
                                attr: {
                                    src: "./card-6.png",
                                    class: "w-80 mb-4"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "Yuki Hair Pin Set of 3 ",
                                attr: {
                                    class: "text-lg"
                                }
                            }),
                            Box({
                                element: "p",
                                children: "$ 29,00",
                                attr: {
                                    class: "text-custom-gold mt-2"
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });


    
}