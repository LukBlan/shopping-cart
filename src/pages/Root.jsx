import {Nav} from "../components/Nav/Nav.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer/Footer.jsx";

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