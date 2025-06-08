import React from 'react';
import { useSelector } from 'react-redux';

function MoviesList() {
  const { movies, loading, error } = useSelector((state) => state.movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!movies.length) return <p>No movies found.</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {movies.map((movie) => (
        <div key={movie.imdbID} style={{ width: '180px', textAlign: 'center' }}>
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/180x270'}
            alt={movie.Title}
            style={{ width: '100%', height: '270px', objectFit: 'cover' }}
          />
          <h4>{movie.Title}</h4>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
