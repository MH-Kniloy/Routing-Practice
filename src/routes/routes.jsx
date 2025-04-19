import { Children, Component } from "react";
import { createBrowserRouter}  from "react-router";
import Root from "../components/Root";
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import UserDetails from "../pages/UserDetails";
import Book from "../pages/Book";
import BookDetails from "../pages/BookDetails";

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
      {
        path: "/book",
        loader: () => fetch("booksData.json"),
        Component: Book,
      },
      {
        path: "/userdetails/:id",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        Component: UserDetails,
      },
      {
        path: "/book/:id",
        loader: () => fetch(`booksData.json`),
        Component: BookDetails,
      },
    ],
  },
]);

export default router