import "./ProductLine.css"
import {ImageProductCard} from "../ImageProductCard/ImageProductCard.jsx";

function ProductLine({products, animationClass}) {
  return (
    <ul className={`product-list ${animationClass}`}>
      { products.map(product => <ImageProductCard key={product.id} product={product} />) }
    </ul>
  )
}

export { ProductLine }