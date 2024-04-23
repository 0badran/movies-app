import Carousel from 'react-bootstrap/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { moviesAction } from '../../store/slices/globalData';
import { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { dataForPlan } from '../../../public/data';

function Home() {
  const movies = useSelector(state => state.moviesList.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesAction(25));
  }, [dispatch]);
  return (
    <>
      <Carousel variant='light' className='my-3' data-bs-theme="light">
        <Carousel.Item>
          <Image src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`} width={"33.33%"} rounded />
          <Image src={`https://image.tmdb.org/t/p/w500${movies[1].poster_path}`} width={"33.33%"} rounded />
          <Image src={`https://image.tmdb.org/t/p/w500${movies[2].poster_path}`} width={"33.33%"} rounded />
          <Carousel.Caption>
            <h2>{movies[0].title}</h2>
            <p>{movies[0].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={`https://image.tmdb.org/t/p/w500${movies[3].poster_path}`} width={"33.33%"} rounded />
          <Image src={`https://image.tmdb.org/t/p/w500${movies[4].poster_path}`} width={"33.33%"} rounded />
          <Image src={`https://image.tmdb.org/t/p/w500${movies[5].poster_path}`} width={"33.33%"} rounded />
          <Carousel.Caption>
            <h2>{movies[3].title}</h2>
            <p>{movies[3].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={`https://image.tmdb.org/t/p/w500${movies[6].poster_path}`} width={"33.33%"} rounded />
          <Image src={`https://image.tmdb.org/t/p/w500${movies[7].poster_path}`} width={"33.33%"} rounded />
          <Image src={`https://image.tmdb.org/t/p/w500${movies[8].poster_path}`} width={"33.33%"} rounded />
          <Carousel.Caption>
            <h2>{movies[6].title}</h2>
            <p>{movies[6].overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='mb-3 text-light'>
        <h2>Popular</h2>
        <div className='d-flex justify-content-between mt-3'>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movies[10].poster_path}`} />
          </Card>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movies[11].poster_path}`} />
          </Card>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movies[12].poster_path}`} />
          </Card>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movies[13].poster_path}`} />
          </Card>
        </div>
      </div>
      <div className='text-white'>
        <h2>Plans</h2>
        <section className='d-flex justify-content-between mt-3'>
          {

            dataForPlan.map((plan, index) => {
              return <Card key={index} style={{ width: '17rem', }} bg="dark" text='light' >
                <Card.Body>
                  <Card.Title>{plan.title}</Card.Title>
                  <Card.Subtitle>{plan.price}$</Card.Subtitle>
                  <Card.Text className="small mt-3">
                    {plan.description}
                  </Card.Text>
                  <Card.Text className='text-warning'>
                    {plan.daysFree}
                  </Card.Text>
                  {
                    plan.checks.map((checkText, index) => {
                      return <Card.Text key={index} className='small'>
                        <p className="bi bi-check-circle-fill small"> {checkText}</p>
                      </Card.Text>
                    })
                  }
                  <Button variant="outline-warning" className='w-100'>Choose a plan</Button>
                </Card.Body>
              </Card>

            })
          }
        </section>
      </div>
    </>
  )
}

export default Home;