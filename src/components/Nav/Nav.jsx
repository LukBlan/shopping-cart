import "./Nav.css"
import { Link } from "react-router-dom";
import {NavbarLinks} from "./NavbarLinks.jsx";
import {CartButton} from "../Buttons/Cartbutton/CartButton.jsx";

function Nav({toggleCart, totalItems}) {
  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="navbar-header">Shopping Cart</h1>
      </Link>

      <div className="shopping-elements-container">
        <NavbarLinks />

        <CartButton toggleCart={toggleCart} totalItems={totalItems} />
      </div>

    </nav>
  )
}

export { Nav }