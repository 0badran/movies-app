import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResult from '../searchResult/SearchResult';
import Image from 'react-bootstrap/Image';
import { useDispatch, useSelector } from 'react-redux';
import { setSpinner } from '../../store/slices/setSpinner';

function MyNavbar() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();
  let user = useSelector(state => state.user.user);
  user = user ? user.email : "";
  const dispatch = useDispatch();
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
  }, [API_KEI, input]);


  return (
    <>
      <Navbar expand="lg" className='px-4' sticky='top' variant='white' bg='white'>
        <Navbar.Brand href="/"><Image src='logo.png' width="60" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className='align-items-lg-center'>
            <NavLink to="/" className="me-2 mb-2 link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Home</NavLink>
            <NavLink to="/movie" className="me-2 mb-2 link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Movies</NavLink>
            <NavLink to="/favorite" className="me-2 mb-2 link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Favorite</NavLink>
            <NavLink onClick={() => {
              dispatch(setSpinner(true))
              setTimeout(() => {
                dispatch(setSpinner(false))
                navigate('/login')
              }, 1000)
            }} className="text-dark mb-2 fs-2 d-block d-lg-none text-decoration-none">
              <i className='bi bi-person-circle fst-normal text-capitalize '> {user}</i>
            </NavLink>
            <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => { setInput(e.target.value) }}
                value={input}
              />
            </Form>
          </Nav>
          <NavLink onClick={() => {
            dispatch(setSpinner(true))
            setTimeout(() => {
              dispatch(setSpinner(false))
              navigate('/login')
            }, 1000)
          }} className="text-dark fs-2 position-absolute end-0 me-lg-4 d-none d-lg-block text-decoration-none">
            <i className='bi bi-person-circle fst-normal text-capitalize'> {user}</i>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
      <SearchResult list={searchList} input={setInput} />
    </>
  );
}

export default MyNavbar;