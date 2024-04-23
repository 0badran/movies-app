import MyNavbar from "./components/navbar/MyNavbar";
import { Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from './components/footer/Footer';
import { useEffect, useState } from "react";

function AppRoutes() {
  const [showNavAndFooter, setShowNavAndFooter] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowNavAndFooter(false);
    }
    else {
      setShowNavAndFooter(true);
    }
  }, [location])
  return (
    <>

      {
        showNavAndFooter ? <>
          <MyNavbar />
          <Container>
            <Outlet />
          </Container>
          <Footer />

        </> :
          <Container fluid>
            <Outlet />
          </Container>
      }
    </>
  );
}

export default AppRoutes