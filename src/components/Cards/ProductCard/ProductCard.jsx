import "./ProductCard.css"

function ProductCard({product}) {
  const {title, price, image} = product

  return (
    <li className="product-card">
      <h2>{title}</h2>
      <p>{price}</p>
      <img className="product-card-image" src={image} alt={title}/>
    </li>
  )
}

export { ProductCard }