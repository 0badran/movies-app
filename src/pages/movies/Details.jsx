import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Details() {
  const movie = useLoaderData();
  return <>
    <Card className="shadow text-bg-dark m-auto w-75 mt-3">
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="text-bg-dark"><i className="bi bi-star-fill text-warning"> <i className='text-light'>{movie.vote_average}</i></i></ListGroup.Item>
        <ListGroup.Item className="text-bg-dark">Data: {movie.release_date}</ListGroup.Item>
      </ListGroup>
    </Card>

  </>
}


export default Details;