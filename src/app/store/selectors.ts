import { createSelector, createFeatureSelector } from "@ngrx/store";
import { MovieState } from "./state";

// for a specific category
export const selectState = createFeatureSelector<MovieState>('movieState');
export const selectMovies = createSelector(selectState, state => state.movies);

//for all category
