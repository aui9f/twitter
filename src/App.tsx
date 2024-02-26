
import { RouterProvider } from 'react-router-dom'
import router from "./Router"
function App() {
  return (
    <div>
      <p>App</p>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
