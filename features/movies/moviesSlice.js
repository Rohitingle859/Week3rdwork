
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=3f7fd655'; // Replace with your actual API key

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (searchTerm, thunkAPI) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      if (response.data.Response === 'False') {
        return thunkAPI.rejectWithValue(response.data.Error);
      }
      return response.data.Search;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.movies = [];
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default moviesSlice.reducer;
