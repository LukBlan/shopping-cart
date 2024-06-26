import {SvgAdd} from "../Svgs/SvgAdd.jsx";
import "./AddToCart.css"

function AddToCartButton() {
  return (
    <button className="add-cart-button">
      <SvgAdd />
    </button>
  )
}

export { AddToCartButton }