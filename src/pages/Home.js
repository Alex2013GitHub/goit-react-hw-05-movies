import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList';
import { getTrends } from 'services/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrends().then(({ results }) => setMovies(results));
  }, []);

  if (!movies.length) {
    return;
  }

  return (
    <main>
      <h1 style={{ paddingBottom: '16px' }}>Tranding today</h1>
      <MovieList movies={movies} location={location} />
    </main>
  );
};

export default Home;
