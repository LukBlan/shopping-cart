import {HomePage} from "../pages/home/HomePage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { ShopPage } from "../pages/shop/ShopPage.jsx";
import {Root} from "../pages/Root.jsx";

const routes = [
  {
    path: "/",
    element: <HomePage />, nav: false,
    children: [{
      path: ":id",
      element: <div>test</div>
    }]
  },
  {path: "Shop", element: <ShopPage />, nav: true},
]

const mapRoutes = createRoutesFromElements(
  <Route element={<Root />} >
    {routes.map(route =>
      <Route key={route.path} path={route.path} element={route.element} >
        {
          route.children ?
            route.children.map(childrenRoute => <Route key={childrenRoute.path} path={childrenRoute.path} element={childrenRoute.element}/>) :
            <></>
        }
      </Route>)
    }
  </Route>
)

const router = createBrowserRouter(mapRoutes)

export { routes, router }