import {Nav} from "../components/Nav/Nav.jsx";
import {Outlet} from "react-router-dom";
import {useProducts} from "../hooks/use-products.js";
import {useState} from "react";
import {CartList} from "../components/CartList/CartList.jsx";

function Root() {
  const { products } = useProducts();
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (id) => {
    const product = cart.find(cartItem => cartItem.product.id === id)

    if (product) {
      product.amount += 1;
    } else {
      const newCartProduct = products.find(product => product.id === id);
      cart.push({product: newCartProduct, amount: 1})
    }

    setCart([...cart])
  }

  const toggleCart = () => setShowCart(!showCart)
  const totalItems = () => cart.reduce((total, cartItem) => total + cartItem.amount, 0)
  return (
    <>
      <Nav cart={cart} toggleCart={toggleCart} totalItems={totalItems}/>

      <main className="main-screen-container">
        { showCart && <CartList cart={cart} /> }
        <Outlet context={[products, addToCart]}/>
      </main>
    </>
  )
}

export { Root }