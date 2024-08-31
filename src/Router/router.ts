import { Blog, Home, Login, Register, Shop } from "../Pages";
import { ContactUs } from "../Pages/ContactUs";

export function Router() {
  switch (window.location.pathname) {
    case "/shop":
      return Shop();
    case "/blog":
      return Blog();
    case "/account":
      return Login();
    case "/register":
      return Register();
    case "/login":
      return Login();
    case "/contactus":
      return ContactUs();
    default:
      return Home();
  }
}
