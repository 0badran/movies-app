import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { dataForPlan } from "../../../public/data";
import instance from "../../axiosConfig/instance";
import MySpinner from "../../components/my-spinner/MySpinner";
import MovieCarousel from "../../components/carousel/MovieCarousel";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await instance.get("", {
        params: {
          with_genres: 10751,
        },
      });
      setMovies(res?.data?.results?.slice(10) || []);
    })();
  }, []);

  return (
    <>
      {movies.length ? (
        <>
          <MovieCarousel movies={movies} />

          {/* Popular Movies Section */}
          <motion.div
            className="mb-3 text-light"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Popular</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
              {movies.slice(6, 10).map((movie, index) => (
                <motion.div
                  key={index}
                  className="col"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/details/${movie.id}`}
                    className="text-decoration-none"
                  >
                    <Card className="shadow-lg h-100">
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="rounded img-fluid"
                      />
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        <MySpinner />
      )}

      {/* Plans Section */}
      <motion.div
        className="text-white mb-4 p-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Plans</h2>
        <motion.section
          className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {dataForPlan.map((plan, index) => (
            <motion.div
              key={index}
              className="col"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg h-100" bg="dark" text="light">
                <Card.Body>
                  <Card.Title>{plan.title}</Card.Title>
                  <Card.Subtitle>{plan.price}$</Card.Subtitle>
                  <Card.Text className="small mt-3">
                    {plan.description}
                  </Card.Text>
                  <Card.Text className="text-warning">
                    {plan.daysFree}
                  </Card.Text>
                  {plan.checks.map((checkText, i) => (
                    <Card.Text key={i} className="small">
                      <p className="bi bi-check-circle-fill small">
                        {" "}
                        {checkText}
                      </p>
                    </Card.Text>
                  ))}
                  <Button variant="outline-warning" className="w-100">
                    Choose a plan
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </>
  );
}

export default Home;
