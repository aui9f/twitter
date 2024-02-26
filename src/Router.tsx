import { createBrowserRouter } from "react-router-dom";
import Signup from "./routes/Signup";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
},
  {
      path: '/signup',
      element: <Signup/>
  }
])

export default router;