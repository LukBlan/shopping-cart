import "./Nav.css"
import {NavLink} from "react-router-dom";
import {routes} from "../../routes/router.jsx";

function Nav() {
  const mapRoutes = []

  routes.forEach(route => {
    if (route.nav) {
      mapRoutes.push(<li key={route.path}><NavLink className="link" to={route.path}>{route.path}</NavLink></li>)
    }
  })

    console.log(mapRoutes)
  return (
    <nav>
      <h1>Shopping Cart</h1>

      <ul className="nav-links">
        {mapRoutes}
      </ul>
    </nav>
  )
}

export { Nav }