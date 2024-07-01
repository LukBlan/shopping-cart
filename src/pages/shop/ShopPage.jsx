import {Outlet, useOutletContext} from "react-router-dom";

function ShopPage() {
  const products = useOutletContext();

  return (
    <>
      <p>Shop</p>
      <Outlet context={products} />
    </>
  )
}

export { ShopPage }