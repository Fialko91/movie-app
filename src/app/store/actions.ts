import { createAction, props } from '@ngrx/store';
import {Movie, MovieModel} from "../models/movie.model";

// request for a specific category
export const loadMovies = createAction('[Movie] Load Movies',
  props<{ category: string }>()
);

export const loadMoviesSuccess = createAction('[Movie] Load Movies Success',
  props<{ movies: Movie[] | null }>()
);

export const loadMoviesFailure = createAction('[Movie] Load Moviess Failure',
  props<{ error: any }>()
);

// request for all category
export const loadAllMovies = createAction('[Movie] Load All Movies');

export const loadAllMoviesSuccess = createAction('[Movie] Load All Movies Success',
  props<{ AllMovies: Movie[] | null }>()
);

export const loadAllMoviesFailure = createAction('[Movie] Load All Moviess Failure',
  props<{ error: any }>()
);
