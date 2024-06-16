import {RouterProvider} from "react-router-dom";
import {router} from "../routes/router.jsx";

function App() {
  return <RouterProvider router={router} />
}

export { App }