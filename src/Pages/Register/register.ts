import { Button } from "../../Components/Button/button";
import { Textfields } from "../../Components/Textfields/textfields";
import { Box } from "../../Lib";

export const Register = () => {
    const RegisterForm = {
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
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
                    children: "Sign Up"
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
                                class: "text-slate-900 bg-slate-200 hover:bg-gray-400 py-2 px-20 rounded-l"
                            },
                            children: "Sign in"
                        }),
                        Button({
                            attr: {
                                onClick: (e:Event) => {
                                    e.preventDefault();
                                    location.assign("/register");
                                },
                                class: "text-slate-900 bg-white border-4 border-slate-200 hover:bg-gray-400 py-1 px-20 rounded-r"
                            },
                            children: "Register"
                        })
                    ]
                }),
                Box({
                    element: "form",
                    children: [
                        Textfields({
                            placeholder: "UserName",
                            onKeyup: (e:any) => {
                                RegisterForm.username = e.target.value;
                            }
                        }),
                        Textfields({
                            placeholder: "Email",
                            onKeyup: (e:any) => {
                                RegisterForm.email = e.target.value;
                            }
                        }),
                        Textfields({
                            placeholder: "Password",
                            onKeyup: (e:any) => {
                                RegisterForm.password = e.target.value;
                            },
                        }),
                        Textfields({
                            placeholder: "Repeat Password",
                            onKeyup: (e:any) => {
                                RegisterForm.repeatPassword = e.target.value;
                            },
                        }),
                        Button({
                            children: "Register",
                            attr: {
                                class: "mt-20 w-full px-20 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                            }
                        }),
                        Box({
                            element: "p",
                            children: "Sign Up with Google account ?",
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