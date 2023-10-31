import MovieCard from 'components/MovieCard/MovieCard';
import { POSTER_CONFIG } from 'services/Api';
import { List, Item } from './MovieList.styled';
import defaultImage from 'default-movie-768x1129.jpg';

const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, poster_path: poster, title }) => {
        const moviePoster = poster
          ? POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[2], poster)
          : defaultImage;
        return (
          <Item key={id}>
            <MovieCard
              movieLink={`/movies/${id}`}
              stateLink={{ from: location }}
              image={moviePoster}
              isNotPoster={!poster}
              title={title}
            />
          </Item>
        );
      })}
    </List>
  );
};

export default MovieList;
