import {Nav} from "../components/Nav/Nav.jsx";
import {Outlet} from "react-router-dom";
import {useProducts} from "../hooks/use-products.js";

function Root() {
  const { products } = useProducts();

  return (
    <>
      <Nav />
      <Outlet context={[products]}/>
    </>
  )
}

export { Root }