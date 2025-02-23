import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MovieCarousel = ({ movies }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  // Auto-slide every 5 seconds (Optional)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container position-relative">
      <div className="position-relative overflow-hidden rounded shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={movies[index].id}
            src={`https://image.tmdb.org/t/p/original${movies[index].backdrop_path}`}
            alt={movies[index].title}
            className="w-100 rounded img-fluid"
            style={{ height: "450px", objectFit: "cover" }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Previous & Next Buttons with Bootstrap Icons */}
        <button className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3" onClick={prevSlide}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3" onClick={nextSlide}>
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* Movie Info */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x bg-dark bg-opacity-75 text-white p-3 rounded w-75 text-center">
          <h3 className="h5">{movies[index].title}</h3>
          <p className="mb-1">⭐ {movies[index].vote_average} | 📅 {movies[index].release_date}</p>
          <p className="small d-none d-md-block">{movies[index].overview}</p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="d-flex justify-content-center mt-3">
        {movies.map((_, i) => (
          <button
            key={i}
            className={`btn btn-sm mx-1 ${i === index ? "btn-warning" : "btn-secondary"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
