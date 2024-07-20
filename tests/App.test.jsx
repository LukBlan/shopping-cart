import { render } from '@testing-library/react';
import { describe, it} from "vitest"
import {Root} from "../src/pages/Root.jsx";
import {HomePage} from "../src/pages/home/HomePage.jsx";
import {Products} from "../src/pages/products/Products.jsx";
import {ProductModal} from "../src/components/Modals/ProductModal.jsx";
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import React from "react"

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <HomePage /> },
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

describe('App', () => {
  it('renders headline', () => {
    const router = createMemoryRouter(routes);
    const { debug } = render(<RouterProvider router={router} />)
    debug()
  });
});