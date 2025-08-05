import { useEffect, useState, useDeferredValue } from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import instance from "../../axiosConfig/instance";
import { setSpinner } from "../../store/slices/setSpinner";
import SearchResult from "../searchResult/SearchResult";

export default function Navbar() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);
  const [searchList, setSearchList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)?.email || "";

  useEffect(() => {
    if (!deferredInput.trim()) {
      setSearchList([]);
      return;
    }

    setLoading(true);
    instance
      .get("https://api.themoviedb.org/3/search/movie", {
        params: { query: deferredInput },
      })
      .then((res) => {
        setSearchList(res.data.results);
      })
      .catch((err) => {
        console.error(err);
        setSearchList([]);
      })
      .finally(() => setLoading(false));
  }, [deferredInput]);

  const handleProfileClick = () => {
    dispatch(setSpinner(true));
    setTimeout(() => {
      dispatch(setSpinner(false));
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <BootstrapNavbar expand="lg" className="px-4" sticky="top" bg="white">
        <BootstrapNavbar.Brand as={NavLink} to="/">
          <Image src="/logo.png" width="60" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-lg-center">
            <NavLink
              to="/"
              className="me-2 mb-2 link-dark link-underline-opacity-0"
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className="me-2 mb-2 link-dark link-underline-opacity-0"
            >
              Movies
            </NavLink>
            <NavLink
              to="/favorite"
              className="me-2 mb-2 link-dark link-underline-opacity-0"
            >
              Favorite
            </NavLink>
            <NavLink
              onClick={handleProfileClick}
              className="text-dark mb-2 fs-2 d-block d-lg-none text-decoration-none"
            >
              <i className="bi bi-person-circle"> {user}</i>
            </NavLink>
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </Form>
          </Nav>
          <NavLink
            onClick={handleProfileClick}
            className="text-dark fs-2 position-absolute end-0 me-lg-4 d-none d-lg-block text-decoration-none"
          >
            <i className="bi bi-person-circle"> {user}</i>
          </NavLink>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
      {input.trim() && (
        <SearchResult
          list={searchList}
          loading={loading}
          clearInput={() => setInput("")}
        />
      )}
    </>
  );
}
