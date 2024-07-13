import "./ProductCard.css"

function ProductCard({product}) {
  const {title, price, image} = product

  return (
    <li className="product-card">
      <h2 className="product-card-title">{title}</h2>
      <p>{price}</p>

      <div className="product-card-image-container">
        <img className="product-card-image" src={image} alt={title}/>
      </div>
    </li>
  )
}

export { ProductCard }