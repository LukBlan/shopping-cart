import "./Nav.css"
import {Link, NavLink} from "react-router-dom";
import {routes} from "../../routes/router.jsx";

function Nav() {
  const mapRoutes = []

  routes.forEach(route => {
    if (route.nav) {
      mapRoutes.push(<li key={route.path}><NavLink className="link" to={route.path}>{route.path}</NavLink></li>)
    }
  })

  return (
    <nav>
      <Link className="link" to="/">
        <h1 className="navbar-header">Shopping Cart</h1>
      </Link>

      <ul className="nav-links">
        {mapRoutes}
      </ul>
    </nav>
  )
}

export { Nav }