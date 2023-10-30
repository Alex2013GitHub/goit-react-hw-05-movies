import { Link, CardWrapper } from './MovieCard.styled';

const MovieCard = ({ movieLink, stateLink, image, isNotPoster, title }) => {
  return (
    <Link to={movieLink} state={stateLink}>
      <CardWrapper style={{ backgroundImage: `ul(${image})` }}>
        {isNotPoster && title}
      </CardWrapper>
    </Link>
  );
};

export default MovieCard;
