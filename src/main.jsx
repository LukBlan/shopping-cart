import "./styles.css"
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";

const app = <StrictMode>{<RouterProvider router={router} /> }</StrictMode>
const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app)
