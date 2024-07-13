import {ProductCard} from "../ProductCard/ProductCard.jsx";

function CartItemCard({cartItem}) {
  const {product, amount} = cartItem

  return (
    <>
      <ProductCard product={product} />
      <p>{amount}</p>
    </>
  )
}

export { CartItemCard }