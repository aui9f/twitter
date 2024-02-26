import { RouterProvider } from "react-router-dom";
import GlobalStyles from "@/assets/styled/GlobalStyles";

import router from "./Router";
function App() {
  return (
    <div>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
