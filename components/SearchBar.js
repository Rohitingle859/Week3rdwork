import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../features/movies/moviesSlice';

function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      dispatch(fetchMovies(term));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{ padding: '8px', width: '250px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '8px' }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;

