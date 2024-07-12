import {SvgAdd} from "../../Svgs/SvgAdd.jsx";
import "./AddToCart.css"
import {useOutletContext} from "react-router-dom";

function AddToCartButton({id}) {
  const [products, addToCart] = useOutletContext();

  return (
    <button className="add-cart-button" onClick={() => addToCart(id)}>
      <SvgAdd />
    </button>
  )
}

export { AddToCartButton }