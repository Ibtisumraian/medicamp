import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CampDetails from "../pages/CampDetails/CampDetails";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
          path: '/CampDetails/:id',
          element: <CampDetails/>
        },
        {
          path: '/SignIn',
          Component: SignIn,
        },
        {
          path: '/SignUp',
          Component: SignUp,
        }
    ]
  },
]);
