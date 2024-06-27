import {Nav} from "../component/Nav/Nav.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../component/Footer/Footer.jsx";

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export { Root }