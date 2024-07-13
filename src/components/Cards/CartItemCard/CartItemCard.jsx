function CartItemCard({cartItem}) {
  const {product, amount} = cartItem
  return (
    <li>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{amount}</p>
    </li>
  )
}

export { CartItemCard }