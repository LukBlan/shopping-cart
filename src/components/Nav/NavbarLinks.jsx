import {NavLink} from "react-router-dom";
import React from "react"

function NavbarLinks() {
  return (
    <ul className="nav-links">
      <li><NavLink className="link" to="products">Shop</NavLink></li>
    </ul>
  )
}

export { NavbarLinks }