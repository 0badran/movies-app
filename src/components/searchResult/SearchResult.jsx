import "./SearchResult.css";
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
function SearchResult({ list: searchList, input }) {
  const navigate = useNavigate();
  
  function moveToDetails(id) {
    input("");
    navigate(`details/${id}`);
  }


  return (
    <div className='parent z-3 position-absolute'>
      <div className='content-list'>
        {
          // eslint-disable-next-line react/prop-types
          searchList.map((movie) => {
            return <div key={movie.id} type="button" className='echo-content' onClick={() => { moveToDetails(movie.id) }}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width="50" height="50" />
              <span> {movie.title}</span>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default SearchResult
