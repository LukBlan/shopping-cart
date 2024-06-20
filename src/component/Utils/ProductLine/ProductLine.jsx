import "./ProductLine.css"
import {ImageProductCard} from "../ImageProductCard/ImageProductCard.jsx";

function ProductLine({products}) {
  return (
    <ul className="product-list">
      { products.map(product => <ImageProductCard key={product.id} product={product} />) }
    </ul>
  )
}

export { ProductLine }