import "./styles.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from "./router/router.jsx";
import {RouterProvider} from "react-router-dom";

const app = <React.StrictMode>{<RouterProvider router={router} /> }</React.StrictMode>
const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app)
