import "./ModuleHome.css"
import {useEffect, useState} from "react";
import {fetchProducts} from "../../services/fetch-products.js";
import {ProductCard} from "../Utils/ProductCard/ProductCard.jsx";
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

  return (
    <ProductLine products={products}/>
  )
}

export { ModuleHome }