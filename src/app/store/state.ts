import {Movie, MovieModel} from "../models/movie.model";

export interface MovieState {
  movies: Movie[] | null;
  favoriteMovies: Movie[] | null;
  watchListMovies: Movie[] | null;
}

export const initialState: MovieState = {
  movies: null,
  favoriteMovies: null,
  watchListMovies: null,
};
