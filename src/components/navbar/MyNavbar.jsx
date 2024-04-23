import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResult from '../searchResult/SearchResult';
import Image  from 'react-bootstrap/Image';



function MyNavbar() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const API_KEI = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: API_KEI,
        query: input
      }
    }).then((res) => {
      setSearchList(res.data.results);
    });
  }, [input]);


  return (
    <>
      <Navbar expand="lg" sticky='top' variant='white' bg='white'>
        <Navbar.Brand href="/" className='ms-5'><Image src='logo.png' width="60" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className=""
            navbarScroll
          >
            <NavLink to="/" className="me-2 link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Home</NavLink>
            <NavLink to="/movies" className="me-2 link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Movies</NavLink>
            <NavLink to="/favorite" className="me-2 link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Favorite</NavLink>
          </Nav>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => { setInput(e.target.value) }}
              value={input}
            />
          </Form>
          <NavLink to="/login" className="bi bi-person-circle me-5 text-dark fs-2 d-none d-lg-block position-absolute end-0"></NavLink>
        </Navbar.Collapse>
      </Navbar>
      <SearchResult list={searchList} input={setInput} />
    </>
  );
}

export default MyNavbar