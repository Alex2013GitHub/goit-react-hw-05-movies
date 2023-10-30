import { Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <Box maxWidth={1200} paddingLeft={16} paddingRight={16} margin="0 auto">
      <Navigation />

      <Suspense
        fallback={
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperStyle="progress-bar-wrapper"
            borderColor="navy"
            barColor="orangerd"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route ath="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>

      <GlobalStyle />
    </Box>
  );
};

export default App;
