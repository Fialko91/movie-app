import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {
  loadAllMovies, loadAllMoviesFailure, loadAllMoviesSuccess,
  loadMovies,
  loadMoviesFailure,
  loadMoviesSuccess
} from './actions';
import { of } from 'rxjs';
import {MovieService} from "../services/movie.service";
import {MovieAllService} from "../services/movie-all.service";

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(({category}) => {
        return this.movieService.getMovieListByCategory(category).pipe(
          map(movies =>
            loadMoviesSuccess({
              movies: movies.results
            })
          ),
          catchError(error =>
            of(
              loadMoviesFailure({
                error,
              })
            )
          )
        );
      })
    )
  );

  loadAllMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllMovies),
      mergeMap(() => {
        return this.movieAllService.getAllCategoryMovieList().pipe(
          map(movies =>
            loadAllMoviesSuccess({
              movies: movies
            })
          ),
          catchError(error =>
            of(
              loadAllMoviesFailure({
                error,
              })
            )
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private movieAllService: MovieAllService,
  ) {}
}
