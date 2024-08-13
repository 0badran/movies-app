import MyNavbar from "./components/navbar/MyNavbar";
import { Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from './components/footer/Footer';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MySpinner from "./components/my-spinner/MySpinner";


function AppRoutes() {
  const spinner = useSelector(state => state.spinner.spinner);
  const [showNavAndFooter, setShowNavAndFooter] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login") {
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
            {
              spinner ? <MySpinner /> :
                <Outlet />
            }
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