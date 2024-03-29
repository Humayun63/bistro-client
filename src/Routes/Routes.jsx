import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import ManageItem from "../pages/DashBoard/ManageItem/ManageItem";
import Payment from "../pages/DashBoard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'my-cart',
        element: <MyCart></MyCart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },


      // Admin routes
      {
        path:'all-users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'add-items',
        element:<AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path:'manage-items',
        element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
      }
    ]
  }
]);