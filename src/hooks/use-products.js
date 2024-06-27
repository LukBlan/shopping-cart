import {useEffect, useState} from "react";
import {fetchProducts} from "../api/fetch-products.js";

function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then(newProducts => setProducts(newProducts))
  }, [])

  return { products }
}

export { useProducts }