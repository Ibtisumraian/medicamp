import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CampDetails from "../pages/CampDetails/CampDetails";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../hooks/PrivateRoute/PrivateRoute";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import Dashboard from "../layouts/Dashboard";
import Overview from "../pages/Overview/Overview";
import OrganizerProfile from "../pages/OrganizerProfile/OrganizerProfile";
import AddACamp from "../pages/AddACamp/AddACamp";

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
          path: '/AvailableCamps',
          Component: AvailableCamps
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
  {
    path: '/Dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      {
        index: true,
        element: <PrivateRoute><Overview/></PrivateRoute>
      },
      {
        path: '/Dashboard/OrganizerProfile',
        element: <PrivateRoute><OrganizerProfile/></PrivateRoute>
      },
      {
        path: '/Dashboard/AddACamp',
        element: <PrivateRoute><AddACamp/></PrivateRoute>
      }
    ]
  }
]);
