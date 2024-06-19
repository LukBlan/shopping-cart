import "./ModuleHome.css"
import {useEffect, useState} from "react";
import {fetchProducts} from "../../services/fetch-products.js";
import {ProductCard} from "../Utils/ProductCard/ProductCard.jsx";

function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(newProducts => setProducts(newProducts))
  }, [])

  return { products }
}

function ModuleHome() {
  const { products } = useProducts();

  return (
    <>
      {products.map(product => <ProductCard key={product.id} product={product}/>)}
    <div className="background-home-image"></div>
    </>
  )
}

export { ModuleHome }