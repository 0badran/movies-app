import { Link } from "react-router-dom";

function SearchResult({ list: searchList, loading, clearInput }) {
  return (
    <div
      className="container position-absolute top-6 start-50 translate-middle-x bg-white shadow rounded mt-2 p-3"
      style={{ maxWidth: "600px", zIndex: 1000 }}
    >
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        searchList?.map((movie) => (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className="d-flex align-items-center mb-2 text-decoration-none text-dark"
            onClick={clearInput}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width="50"
              height="50"
              className="rounded me-2"
              alt={movie.title}
            />
            <span>{movie.title}</span>
          </Link>
        ))
      )}
      {!loading && searchList.length === 0 && (
        <div className="text-center text-muted">No results found</div>
      )}
    </div>
  );
}

export default SearchResult;
