import {ModuleHome} from "../component/ModuleHome/ModuleHome.jsx";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {WebsiteLayout} from "../layout/WebsiteLayout.jsx";
import {ModuleAboutUs} from "../component/ModuleAboutUs/ModuleAboutUs.jsx";
import {ModuleShop} from "../component/ModuleShop/ModuleShop.jsx";

const routes = [
  {path: "/", element: <ModuleHome />, nav: false},
  {path: "shop", element: <ModuleShop />, nav: true},
  {path: "aboutUs", element: <ModuleAboutUs />, nav: true},
]

const mapRoutes = createRoutesFromElements(
  <Route element={<WebsiteLayout />} >
    {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
  </Route>
)

const router = createBrowserRouter(mapRoutes)

export { routes, router }