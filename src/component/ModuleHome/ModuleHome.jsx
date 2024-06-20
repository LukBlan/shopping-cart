import "./ModuleHome.css"
import {useEffect, useState} from "react";
import {fetchProducts} from "../../services/fetch-products.js";
import {ProductLine} from "../Utils/ProductLine/ProductLine.jsx";

function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(newProducts => setProducts(newProducts))
  }, [])

  return { products }
}

function ModuleHome() {
  const { products } = useProducts();
  const firstTenProducts = products.filter((product, index) => index < 10);

  return (
    <main className="main-screen-container">
      <ProductLine products={firstTenProducts}/>
    </main>
  )
}

export { ModuleHome }