import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CampDetails from "../pages/CampDetails/CampDetails";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../hooks/PrivateRoute/PrivateRoute";

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
          element: <PrivateRoute><CampDetails/></PrivateRoute>
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
