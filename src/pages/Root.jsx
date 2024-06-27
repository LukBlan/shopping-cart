import {Nav} from "../components/Nav/Nav.jsx";
import {Outlet} from "react-router-dom";

function Root() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export { Root }