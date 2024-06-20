import "./ImageProductCard.css"

function ImageProductCard({product}) {
  const { image } = product

  return (
    <li className="image-product-card">
      <img className="product-image" src={image}/>
    </li>
    )
}

export { ImageProductCard }