import {CartItemCard} from "../Cards/CartItemCard/CartItemCard.jsx";

function CartList({cart}) {
  return (
    <ul>
      {cart.map(cartItem => <CartItemCard key={cartItem.product.title} cartItem={cartItem} />)}
    </ul>
  )
}

export { CartList }