import { Button } from "../../Components/Button/button"
import { Textfields } from "../../Components/Textfields/textfields"
import { Box } from "../../Lib"

export const Login = () => {
    const loginForm = {
        email: "",
        password: ""
    };
    return Box({
        element: "div",
        attr:{
            class: "flex justify-center mt-20"
        },
        children: Box({
            element: "div",
            children: [
                Box({
                    element: "h1",
                    attr: {
                        class: "flex justify-center text-xl font-bold mb-10"
                    },
                    children: "My account"
                }),
                Box({
                    element:"div",
                    attr: {
                        class: "mb-20"
                    },
                    children: [
                        Button({
                            attr: {
                                onClick: (e:Event) => {
                                    e.preventDefault();
                                    location.assign("/login");
                                },
                                class: "text-slate-900 bg-white border-4 border-slate-200 hover:bg-gray-400 py-1 px-20 rounded-l"
                            },
                            children: "Sign in"
                        }),
                        Button({
                            attr: {
                                onClick: (e:Event) => {
                                    e.preventDefault();
                                    location.assign("/register");
                                },
                                class: "text-slate-900 bg-slate-200 hover:bg-gray-400 py-2 px-20 rounded-r"
                            },
                            children: "Register"
                        })
                    ]
                }),
                Box({
                    element: "form",
                    children: [
                        Textfields({
                            placeholder: "Email",
                            onKeyup: (e:any) => {
                                loginForm.email = e.target.value;
                            }
                        }),
                        Textfields({
                            placeholder: "Password",
                            onKeyup: (e:any) => {
                                loginForm.password = e.target.value;
                            },
                        }),
                        Box({
                            element: "input",
                            attr:{
                                name: "Remember me",
                                type: "checkbox"
                            }
                        }),
                        Button({
                            children: "Remember me",
                            attr: { class: "px-3"}
                        }),
                        Button({
                            children: "SIGN IN",
                            attr: {
                                class: "mt-20 w-full px-20 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                            }
                        }),
                        Box({
                            element: "p",
                            children: "Have you forgotten your password?",
                            attr: {
                                class: "flex justify-center my-5"
                            }
                        })
                    ]
                })
            ]
        })
    })
}