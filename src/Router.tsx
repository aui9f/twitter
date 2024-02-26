import { createBrowserRouter } from "react-router-dom";
import Home from "@/Home";
import Signup from "@/routes/Signup";
import Login from "@/routes/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
