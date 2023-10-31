import { List, Author, AuthorTitle, Text, Review } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, author, content }) => {
        return (
          <Review key={id}>
            <Author>
              <AuthorTitle>Author: </AuthorTitle>
              {author}
            </Author>
            <Text>{content}</Text>
          </Review>
        );
      })}
    </List>
  );
};

export default ReviewsList;
