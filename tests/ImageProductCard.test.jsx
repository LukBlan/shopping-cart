import {cleanup, findAllByRole, getByRole, getByText, render, screen} from '@testing-library/react';
import {describe, it, expect, afterEach} from "vitest"
import {createMemoryRouter, RouterProvider} from "react-router-dom";
import React from "react"
import userEvent from '@testing-library/user-event'
import {routes} from "../src/router/router.jsx";


describe('ImageProductCard', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render images on screen', async () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />)
    const firstList = screen.getAllByRole("product-list", {name: ""})[0]
    const addButtons = await findAllByRole(firstList, "add-cart-button", {name: ""}, {timeout: 5000})

    expect(addButtons.length).not.toBe(0)
  });

  it("should add elements to cart when add to cart button is clicked", async () => {
    const user = userEvent.setup()
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />)
    const firstList = screen.getAllByRole("product-list", {name: ""})[0]
    const addButtons = await findAllByRole(firstList, "add-cart-button", {name: ""}, {timeout: 5000})
    const firstButton = addButtons[0];
    const cartButton = screen.getByRole("cart-button")
    const cartCounter = getByText(cartButton, "0");

    await user.click(firstButton)

    expect(cartCounter.textContent).toBe("1")
  })

});