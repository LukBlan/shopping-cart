import "./Nav.css"
import { Link } from "react-router-dom";
import { SvgCart } from "../Svgs/SvgCart.jsx";
import {NavbarLinks} from "./NavbarLinks.jsx";

function Nav() {
  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="navbar-header">Shopping Cart</h1>
      </Link>

      <div className="shopping-elements-container">
        <NavbarLinks />

        <button className="cart-button">
          <SvgCart />
        </button>
      </div>

    </nav>
  )
}

export { Nav }