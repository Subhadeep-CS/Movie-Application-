import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    upcomingMovies: null,
    topratedMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
