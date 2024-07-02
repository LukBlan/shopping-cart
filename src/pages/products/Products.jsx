import {Outlet, useOutletContext} from "react-router-dom";
import {ProductCard} from "../../components/Cards/ProductCard/ProductCard.jsx";
import "./Product.css"


function Products() {
  const [products] = useOutletContext();
  console.log(products)

  return (
    <>
      <ul className="products-section">
        {products.map(product => <ProductCard key={product.id} product={product}/>)}
      </ul>

      <Outlet context={products} />
    </>
  )
}

export { Products }