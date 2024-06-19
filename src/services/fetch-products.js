async function fetchProducts() {
  return await fetch('https://fakestoreapi.com/products').then(res=>res.json())
}

export { fetchProducts }