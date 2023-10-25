import { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
// import MovieDetailsBasic from '../Movies';
import { BsArrowLeft } from 'react-icons/bs';
import {
  BackLink,
  AddInfoWrapper,
  SubTitle,
  Nav,
  Link,
} from './MovieDetails.styled';
import { ProgressBar } from 'react-loader-spinner';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const Location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(data => setMovie(data));
  }, [movieId]);
  if (!movie) {
    return (
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loadind"
        wrapperStyle="progress-bar-wrapper"
        borderColor="navy"
        barColor="orangered"
      />
    );
  }
  return (
    <main>
      <BackLink to={location.state.from}>{<BsArrowLeft />}go back...</BackLink>
      <MovieDetailsBasic movie={movie} />
      <AddInfoWrapper>
        <SubTitle>Additional information</SubTitle>

        <Nav>
          <Link to="cast" state={{ from: Location.state.from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: Location.state.from }}>
            Reviews
          </Link>
        </Nav>
      </AddInfoWrapper>
      <Suspense
        fallback={
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-wrapper"
            borderColor="navy"
            barColor="orangered"
          />
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
