import { Outlet } from "react-router-dom"
import Sidenav from "./src/components/Sidenav"

function Layout() {
    return (
      <>
      <Sidenav/>
      <Outlet/>
      
      </>
    )
  }
  
  export default Layout