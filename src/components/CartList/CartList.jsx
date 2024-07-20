import {CartItemCard} from "../Cards/CartItemCard/CartItemCard.jsx";
import React from "react"
import "./CartList.css"

function CartList({cart, showCart}) {
  const activeCart = showCart ? "grow" : "shrink"

  return (
    <ul className={`cart-list ${activeCart}`}>
      {cart.map(cartItem => <CartItemCard key={cartItem.product.title} cartItem={cartItem} />)}
    </ul>
  )
}

export { CartList }