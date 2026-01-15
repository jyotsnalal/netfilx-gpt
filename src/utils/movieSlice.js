import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    topRated:null,
    actionMovies: null,
    comedyMovies: null,
    horrorMovies: null,
    romanceMovies: null,
    documentaries: null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addActionMovies: (state, action) => {
      state.actionMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addRomanceMovies: (state, action) => {
      state.romanceMovies = action.payload;
    },
    addDocumentaries: (state, action) => {
      state.documentaries = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addUpcomingMovies,
  addTrendingMovies,
  addTopRated,
  addActionMovies,
  addComedyMovies,
  addHorrorMovies,
  addRomanceMovies,
  addDocumentaries,
  addTrailerVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
