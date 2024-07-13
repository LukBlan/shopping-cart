import "./ProductCard.css"

function ProductCard({product}) {
  const {title, price, image} = product

  return (
    <li className="product-card">
      <h2 className="product-card-title">{title}</h2>

      <div className="product-card-image-container">
        <img className="product-card-image" src={image} alt={title}/>
      </div>

      <p className="product-tag">{price} $</p>
    </li>
  )
}

export { ProductCard }