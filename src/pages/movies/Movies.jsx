import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/slices/favoriteMovie';
import { moviesAction } from '../../store/slices/globalData';
import "./Movies.css";



function Movies() {

  // Add to favorite
  const favoriteList = useSelector(state => state.favoriteList);
  const dispatchFavorite = useDispatch();
  let favoriteMoviesId = favoriteList.map((fav) => { return fav.id; });
  function checkOnFavorite(heartEle, movie) {
    let emptyHeartIcon = heartEle.className.split(" ")[1];
    // If heart ele is empty
    if (emptyHeartIcon == "bi-heart") {
      // Set fill heart ele and send movie to favorite list
      heartEle.className = heartEle.className.replace(emptyHeartIcon, "bi-heart-fill text-danger");
      dispatchFavorite(addFavorite(movie));
    }
    else {
      // Find movie index from favorite list
      favoriteList.map((favMovie, index) => {
        if (favMovie.id == movie.id) {
          // Set heart fill in empty and send index for remove it from favorite list
          heartEle.className = heartEle.className.replace("bi-heart-fill text-danger", emptyHeartIcon);
          dispatchFavorite(removeFavorite(index));
          return 0;
        }
      });
    }
  }

  // Pagination page.
  const [page, setPage] = useState(1);
  const dispatchMovies = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(state => state.moviesList.movies);
  // API
  useEffect(() => {
    dispatchMovies(moviesAction(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      <Row>
        {movies.map((movie) => {
          let setClass = "bi bi-heart text-light me-4 mt-3 position-absolute end-0";
          favoriteMoviesId.find((id) => { if (id == movie.id) { setClass = "bi bi-heart-fill text-danger me-4 mt-3 position-absolute end-0" } });
          return (<Col key={movie.id} className='col-12 col-md-6 col-lg-3 mt-3'>
            <Card className='shadow text-bg-dark' style={{ height: "100% " }} >
              <i className={setClass} type="button" onClick={(event) => { checkOnFavorite(event.target, movie) }}></i>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <Card.Body type='button' onClick={() => navigate("/details/" + movie.id)}>
                <i className="bi bi-star-fill text-warning"> <i className='text-light'>{movie.vote_average}</i></i>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.release_date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>)
        })}
      </Row>
      <Row>
        <Col className='text-center display-6 mt-3 fw-bold text-light'>
          <button hidden={page === 1} className="bi bi-arrow-left-circle-fill arrow" onClick={() => { setPage(page - 1); }}></button>
          <span className='mx-5'>{page}</span>
          <button hidden={page === 15} className="bi bi-arrow-right-circle-fill arrow" onClick={() => { setPage(page + 1); }}></button>
        </Col>
      </Row>
    </>
  )


}

export default Movies