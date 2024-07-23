import {HomePage} from "../pages/home/HomePage.jsx";
import {createBrowserRouter} from "react-router-dom";
import { Products } from "../pages/products/Products.jsx";
import {Root} from "../pages/Root.jsx";
import {ProductModal} from "../components/Modals/ProductModal.jsx";
import React from "react"

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "products",
        element: <Products />,
        children: [{
          path: ":id",
          element: <ProductModal />
        }]
      }
    ]
  },
]

const router = createBrowserRouter(routes)

export { routes, router }