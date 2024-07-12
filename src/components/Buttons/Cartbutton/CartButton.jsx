import {SvgCart} from "../../Svgs/SvgCart.jsx";

function CartButton({totalItems, toggleCart}) {
  return (
    <button onClick={toggleCart} className="cart-button">
      <SvgCart />

      <span>{totalItems()}</span>
    </button>
  )
}

export { CartButton }