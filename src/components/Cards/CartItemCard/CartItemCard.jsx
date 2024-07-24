import {ProductCard} from "../ProductCard/ProductCard.jsx";
import React from "react"

function CartItemCard({cartItem}) {
  const {product, amount} = cartItem

  return (
    <>
      <ProductCard product={product} />
      <p className="product-amount-counter">x{amount}</p>
    </>
  )
}

export { CartItemCard }