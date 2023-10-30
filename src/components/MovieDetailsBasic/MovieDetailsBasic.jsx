import { POSTER_CONFIG } from 'services/Api';
// import defaultPoster from
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
};
