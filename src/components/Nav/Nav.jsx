import "./Nav.css"
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../router/router.jsx";
import { SvgCart } from "../Svgs/SvgCart.jsx";

function Nav() {
  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="navbar-header">Shopping Cart</h1>
      </Link>

      <div className="shopping-elements-container">
        <ul className="nav-links">
          {routes.map(
            route => (route.nav) ?
              <li key={route.path}><NavLink className="link" to={route.path}>{route.path}</NavLink></li> :
              <></>
          )}
        </ul>

        <button className="cart-button">
          <SvgCart />
        </button>
      </div>

    </nav>
  )
}

export { Nav }