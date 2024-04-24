import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/slices/favoriteMovie';
import  Image  from 'react-bootstrap/Image';

function Favorite() {

  const favoriteList = useSelector(state => state.favoriteList);
  const dispatch = useDispatch();
  function remove(index) {
    dispatch(removeFavorite(index));
  }

  function displayEffect(ele) {
    ele.className = ele.className.replace("bi-trash", "bi-trash-fill text-danger");

  }
  function removeEffect(ele) {
    ele.className = ele.className.replace("bi-trash-fill text-danger", "bi-trash");
  }


  return <>

    {
      favoriteList.length ? favoriteList.map((favMovie, index) => {
        return <div key={favMovie.id} className="card my-4 shadow text-bg-dark" style={{ maxWidth: "70%" }}>
          <i className="bi bi-trash fs-4 position-absolute me-3 mt-3 end-0" type="button" onMouseOut={(event) => { removeEffect(event.target) }} onMouseOver={(event) => { displayEffect(event.target) }} onClick={() => { remove(index) }}></i>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w500/${favMovie.poster_path}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{favMovie.title}</h5>
                <p className="card-text">{favMovie.overview}</p>
                <p className="card-text"><small className="text-body-secondary">{favMovie.release_date}</small></p>
              </div>
            </div>
          </div>
        </div>
      }) 
      : <div className='text-center mt-5 text-light'>
        <Image  src='favorite_empty.png' width="200"/>
        <h1 className='mb-3'>No favorites yet.</h1>
        <p>Tap on the heart to add to your favorites!</p>
        </div>
    }
  </>

}

export default Favorite;