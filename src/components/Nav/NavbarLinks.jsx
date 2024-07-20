import {NavLink} from "react-router-dom";

function NavbarLinks() {
  return (
    <ul className="nav-links">
      <li><NavLink className="link" to="products">Shop</NavLink></li>
    </ul>
  )
}

export { NavbarLinks }