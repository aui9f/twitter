import { createBrowserRouter } from "react-router-dom";

import Signup from "@/routes/Signup";
import Login from "@/routes/Login";
import Layout from "@/Layout";
import ProtectedRoutes from "./core/ProtectedRoutes";
import Home from "./Home";
const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes><Layout/></ProtectedRoutes>,
    children: [
      { 
        path: '/',
        element: <Home/>
      }
    ]
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
