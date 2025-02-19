import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/slices/favoriteMovie';
import Image from 'react-bootstrap/Image';
import { motion, AnimatePresence } from 'framer-motion';

function Favorite() {
  const favoriteList = useSelector(state => state.favoriteList);
  const dispatch = useDispatch();

  function remove(index) {
    dispatch(removeFavorite(index));
  }

  return (
    <>
      {favoriteList.length ? (
        <AnimatePresence>
          {favoriteList.map((favMovie, index) => (
            <motion.div
              key={favMovie.id}
              className="card mt-3 shadow text-bg-dark"
              style={{ width: '80%', margin: '0 auto' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.i
                className="bi bi-trash fs-4 position-absolute me-3 mt-3 end-0"
                type="button"
                onMouseOver={(event) => {
                  event.target.className = event.target.className.replace("bi-trash", "bi-trash-fill text-danger");
                }}
                onMouseOut={(event) => {
                  event.target.className = event.target.className.replace("bi-trash-fill text-danger", "bi-trash");
                }}
                onClick={() => remove(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{ cursor: 'pointer' }}
              />
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${favMovie.poster_path}`}
                    className="img-fluid rounded-start"
                    alt={favMovie.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{favMovie.title}</h5>
                    <p className="card-text">{favMovie.overview}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">{favMovie.release_date}</small>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
        <motion.div
          className="text-center my-5 text-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image className="mt-5" src="favorite_empty.png" fluid />
          <h1 className="mb-3">No favorites yet.</h1>
          <p>Tap on the heart to add to your favorites!</p>
        </motion.div>
      )}
    </>
  );
}

export default Favorite;