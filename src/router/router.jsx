import {HomePage} from "../pages/home/HomePage.jsx";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import { Products } from "../pages/products/Products.jsx";
import {Root} from "../pages/Root.jsx";
import {ProductModal} from "../components/Modals/ProductModal.jsx";

const routes = [
  {
    path: "/",
    element: <HomePage />, nav: false,
  },
  {
    path: "products",
    name: "Shop",
    element: <Products />,
    nav: true,
    children: [{
      path: ":id",
      element: <ProductModal />
    }]
  },
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