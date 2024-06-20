import {ProductCard} from "../ProductCard/ProductCard.jsx";
import "./ProductLine.css"

function ProductLine({products}) {
  return (
    <ul className="product-list">
      { products.map(product => <ProductCard key={product.id} product={product} />) }
    </ul>
  )
}

export { ProductLine }