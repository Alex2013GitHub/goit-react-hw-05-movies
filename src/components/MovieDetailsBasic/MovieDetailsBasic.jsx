import { POSTER_CONFIG } from 'services/Api';
import defaultPoster from 'default-movie-768x1129.jpg';
import {
  InfoWrapper,
  MovieInfo,
  Title,
  SubTitle,
  Text,
  Img,
} from './MovieDetailsBasic.styled';

const MovieDetailsBasic = ({ movie }) => {
  const {
    poster_path: poster,
    title,
    release_date: date,
    vote_average: vote,
    overview,
    genres,
  } = movie;

  const moviePoster = poster
    ? POSTER_CONFIG.baseUrl.concat(POSTER_CONFIG.posterSizes[2], poster)
    : defaultPoster;

  const movieTitle = `${title} (${new Date(date).getFullYear()})`;
  const movieScore = `${Math.round(vote * 10)}%`;
  const movieGenresList = genres.map(({ name }) => name.join(', '));

  return (
    <InfoWrapper>
      <Img src={moviePoster} alt="" />
      <MovieInfo>
        <Title>{movieTitle}</Title>
        <Text>User Score: {movieScore}</Text>
        {overview && (
          <>
            <SubTitle>Overview</SubTitle>
            <Text>{overview}</Text>
          </>
        )}
        {!!genres.length && (
          <>
            <SubTitle>Genres</SubTitle>
            <Text>{movieGenresList}</Text>
          </>
        )}
      </MovieInfo>
    </InfoWrapper>
  );
};

export default MovieDetailsBasic;
