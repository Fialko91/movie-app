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
