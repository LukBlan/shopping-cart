import {Nav} from "../component/Nav/Nav.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../component/Footer/Footer.jsx";

function WebsiteLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export { WebsiteLayout }