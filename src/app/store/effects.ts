import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {
  loadMovies,
  loadMoviesFailure,
  loadMoviesSuccess
} from './actions';
import { of } from 'rxjs';
import {MovieService} from "../services/movie.service";

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

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
  ) {}
}
