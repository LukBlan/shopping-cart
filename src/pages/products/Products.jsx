import {Outlet, useOutletContext} from "react-router-dom";

function Products() {
  const products = useOutletContext();

  return (
    <>
      <p>Shop</p>
      <Outlet context={products} />
    </>
  )
}

export { Products }