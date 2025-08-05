import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Image } from "react-bootstrap";

function Details() {
  const movie = useLoaderData();
  return (
    <div className="d-flex flex-column flex-md-row align-items-center gap-4 my-5">
      <div className="flex-shrink-0">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          width={300}
          height={450}
          alt={movie.title}
          className="rounded shadow"
        />
      </div>
      <Card className="shadow text-bg-dark w-100">
        <Card.Body>
          <Card.Title className="fs-3 mb-3">{movie.title}</Card.Title>
          <Card.Text style={{ maxHeight: "200px", overflow: "auto" }}>
            {movie.overview}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="bg-dark text-white border-0 d-flex align-items-center">
            <i className="bi bi-star-fill text-warning me-2"></i>
            <span>{movie.vote_average}</span>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white border-0">
            Release Date: {movie.release_date}
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white border-0">
            Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white border-0">
            Runtime: {movie.runtime} min
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Details;
