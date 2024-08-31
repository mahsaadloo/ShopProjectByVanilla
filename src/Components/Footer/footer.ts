import { Box } from "../../Lib";

export const Footer = () => {
  return Box({
    element: "div",
    attr: {
      class: "px-16",
    },
    children: [
      Box({
        element: "div",
        attr: {
          class: "border-t mt-32 py-5",
        },
      }),
      Box({
        element: "div",
        children: [
          Box({
            element: "div",
            attr: {
              class: "flex justify-between",
            },
            children: [
              Box({
                element: "div",
                attr: {
                  class: "flex gap-10 text-gray-500 text-sm",
                },
                children: [
                  Box({
                    element: "a",
                    children: "CONTACT",
                    attr: {
                      href: "./contactus",
                    },
                  }),
                  Box({
                    element: "a",
                    children: "TERMS OF SERVICES",
                  }),
                  Box({
                    element: "a",
                    children: "SHIPPING AND RETURNS",
                  }),
                ],
              }),
              Box({
                element: "div",
                children: [
                  Box({
                    element: "div",
                    attr: {
                      class: "flex gap-28 items-center",
                    },
                    children: [
                      Box({
                        element: "p",
                        attr: {
                          class: "text-slate-500",
                        },
                        children: "Give an email, get the newsletter.",
                      }),
                      Box({
                        element: "a",
                        attr: {
                          href: "/contactus",
                        },
                        children: Box({
                          element: "img",
                          attr: {
                            src: "./mark.svg",
                          },
                        }),
                      }),
                    ],
                  }),
                  Box({
                    element: "div",
                    attr: {
                      class: "border-b-2 mt-5 border-slate-500",
                    },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Box({
        element: "div",
        attr: {
          class: "flex justify-between my-20 text-slate-500 items-center",
        },
        children: [
          Box({
            element: "p",
            children: "© 2021 Shelly. Terms of use and privacy policy.",
          }),
          Box({
            element: "div",
            attr: {
              class: "flex gap-8",
            },
            children: [
              Box({
                element: "a",
                attr: {
                  href: "www.linkedin.com",
                },
                children: Box({
                  element: "img",
                  attr: {
                    src: "./linkedin.svg",
                  },
                }),
              }),
              Box({
                element: "a",
                attr: {
                  href: "www.facebook.com",
                },
                children: Box({
                  element: "img",
                  attr: {
                    src: "./facebook.svg",
                  },
                }),
              }),
              Box({
                element: "a",
                attr: {
                  href: "www.instagram.com",
                },
                children: Box({
                  element: "img",
                  attr: {
                    src: "./instagram.svg",
                  },
                }),
              }),
              Box({
                element: "a",
                attr: {
                  href: "www.twitter.com",
                },
                children: Box({
                  element: "img",
                  attr: {
                    src: "./twitter.svg",
                  },
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
