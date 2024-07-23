import {findAllByRole, render, screen} from '@testing-library/react';
import { describe, it, expect} from "vitest"
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import React from "react"
import {routes} from "../src/router/router.jsx";


describe('ImageProductCard', () => {
  it('should render images on screen', async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />)
    const firstList = screen.getAllByRole("product-list", {name: ""})[0]
    const addButtons = await findAllByRole(firstList, "add-cart-button", {name: ""}, {timeout: 5000})
    expect(addButtons.length).not.toBe(0)
  });

  it("should add elements to cart when add to cart button is clicked", async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />)
    const firstList = screen.getAllByRole("product-list", {name: ""})[0]
    const addButton = await findAllByRole(firstList, "add-cart-button", {name: ""}, {timeout: 5000})
  })

});