import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import SinglePost from "../pages/SinglePost";

export const ROOT = "/";
export const ABOUT = "/about";
export const CONTACT = "/contact";
export const SIGNUP = "/signup";
export const SIGNIN = "/signin";
export const POST = "/post/:id";

export const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      {
        path: ROOT,
        element: <Home />,
      },
      {
        path: ABOUT,
        element: <About />,
      },
      {
        path: CONTACT,
        element: <Contact />,
      },
      {
        path: POST,
        element: <SinglePost />,
      },
      {
        path: SIGNUP,
        element: <SignUp />,
      },
      {
        path: SIGNIN,
        element: <SignIn />,
      },
    ],
  },
]);
