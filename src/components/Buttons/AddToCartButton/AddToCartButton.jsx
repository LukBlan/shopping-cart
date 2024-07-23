import {SvgAdd} from "../../Svgs/SvgAdd.jsx";
import "./AddToCart.css"
import {useOutletContext} from "react-router-dom";
import React from "react"

function AddToCartButton({id}) {
  const [, addToCart] = useOutletContext();

  return (
    <button role="add-cart-button" className="add-cart-button" onClick={(event) => {
      event.preventDefault();
      addToCart(id)
    }}>
      <SvgAdd />
    </button>
  )
}

export { AddToCartButton }