import { Children, Component } from "react";
import { createBrowserRouter}  from "react-router";
import Root from "../components/Root";
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

export default router