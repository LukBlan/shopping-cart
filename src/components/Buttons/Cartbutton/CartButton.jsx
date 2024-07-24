import {SvgCart} from "../../Svgs/SvgCart.jsx";
import React from "react"

function CartButton({totalItems, toggleCart}) {
  return (
    <button role="cart-button" onClick={toggleCart} className="cart-button">
      <SvgCart />

      <span className="cart-counter">{totalItems()}</span>
    </button>
  )
}

export { CartButton }