import { Button } from "../../Components/Button/button"
import { Textfields } from "../../Components/Textfields/textfields"
import { Box } from "../../Lib"

export const ContactUs = () => {
    return Box({
        element: "div",
        children: [
            Box({
                element: "div",
                attr: {
                    class: "border-t mx-16"
                }
            }),
            Box({
                element: "h1",
                children: "Contact Us",
                attr: {
                    class: "text-xl font-bold flex justify-center mt-32"
                }
            }),
            Box({
                element: "div",
                attr: {
                    class: "mt-12"
                },
                children: [
                    Box({
                        element: "p",
                        children: "Say Hello send us your thoughts about our products or share",
                        attr:{
                            class: "flex justify-center"
                        }
                    }),
                    Box({
                        element: "p",
                        children: "your ideas with our Team!",
                        attr:{
                            class: "flex justify-center"
                        }
                    })
                ]
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex justify-center w-full"
                },
                children: Box({
                    element: "form",
                    children: [
                        Box({
                            element: "div",
                            attr: {
                                class: "flex gap-32 mt-20 w-full"
                            },
                            children: [
                                Textfields({
                                    placeholder: "First name",
                                }),
                                Textfields({
                                    placeholder: "Last name"
                                })
                            ]
                        }),
                        Box({
                            element: "div",
                            attr: {
                                class: "flex gap-32 mt-5 pb-16"
                            },
                            children: [
                                Textfields({
                                    placeholder: "Email",
                                }),
                                Textfields({
                                    placeholder: "Subject"
                                })
                            ]
                        }),
                        Textfields({
                            placeholder: "Message"
                        }),
                        Button({
                            children: "SEND",
                            attr: {
                                class:"my-20 w-full px-20 py-2 text-sm font-medium text-center text-white bg-black rounded-md hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                            }
                        })
                    ]
                })
            })
        ]
    })
}