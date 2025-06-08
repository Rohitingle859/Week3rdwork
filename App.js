import React from 'react';
import SearchBar from './components/SearchBar';
//import MoviesList from './features/movies/MoviesList';
import MoviesList from './features/movies/MoviesList';


function App() {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>Movie Search App</h1>
      <SearchBar />
      <MoviesList />
    </div>
  );
}

export default App;
