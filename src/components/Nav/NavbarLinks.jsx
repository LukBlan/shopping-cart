import {routes} from "../../router/router.jsx";
import {NavLink} from "react-router-dom";
import {Fragment} from "react";

function NavbarLinks() {
  return (
    <ul className="nav-links">
      {routes.map(
        (route, index) => (route.nav) ?
          <li key={index}><NavLink className="link" to={route.path}>{route.name}</NavLink></li> :
          <Fragment key={index}></Fragment>
      )}
    </ul>
  )
}

export { NavbarLinks }