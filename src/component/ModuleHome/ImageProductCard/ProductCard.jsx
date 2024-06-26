import "./ProductCard.css"

function ProductCard({product}) {
  const {title, price, image} = product

  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <img className="product-image" src={image} alt={title}/>
    </div>
  )
}

export { ProductCard }