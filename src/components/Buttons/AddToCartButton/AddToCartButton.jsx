import {SvgAdd} from "../../Svgs/SvgAdd.jsx";
import "./AddToCart.css"
import {useOutletContext} from "react-router-dom";

function AddToCartButton({id}) {
  const [, addToCart] = useOutletContext();

  return (
    <button className="add-cart-button" onClick={(event) => {
      event.preventDefault();
      addToCart(id)
    }}>
      <SvgAdd />
    </button>
  )
}

export { AddToCartButton }