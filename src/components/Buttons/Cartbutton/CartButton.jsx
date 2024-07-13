import {SvgCart} from "../../Svgs/SvgCart.jsx";

function CartButton({totalItems, toggleCart}) {
  return (
    <button onClick={toggleCart} className="cart-button">
      <SvgCart />

      <span className="cart-counter">{totalItems()}</span>
    </button>
  )
}

export { CartButton }