import { Layout } from "./Components";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar/navbar";
import { Router } from "./Router/router";

export const App = () => {
  return Layout({ children: [Navbar(), Router(), Footer()] });
};
