import {ProductCard} from "../ProductCard/ProductCard.jsx";

function ProductLine({products}) {
  return (
    <ul>
      { products.map(product => <ProductCard product={product} />) }
    </ul>
  )
}

export { ProductLine }