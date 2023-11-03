import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import Form from 'components/SearchForm/SearchForm';
import EditorList from 'pages/EditorList/EditorList';
import { fetchSearchByKeyword } from 'services/Api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryMovie, setQueryMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') || '';

    if (query !== queryMovie) {
      setLoading(true);
      setQueryMovie(query);

      fetchSearchByKeyword(query)
        .then(searchResults => {
          setSearchFilms(searchResults);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchParams, queryMovie]);

  const handleSearch = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Form searchMovies={handleSearch} initialQuery={queryMovie} />
      {loading && <Loader />}
      {searchFilms.length < 0 && (
        <p>There are no movies with this request. Please try again.</p>
      )}
      {searchFilms.length > 0 && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;
