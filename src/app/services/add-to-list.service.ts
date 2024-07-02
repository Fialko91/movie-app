import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToListService {

  public movieFavoriteListId: any = [];
  public movieWatchListId: any = [];

  constructor() { }

  getFavoriteMovieId(movieId: string | number): any {
    return this.movieFavoriteListId = Array.from(new Set([...this.movieFavoriteListId, movieId]));
  }

  getWatchMovieId(movieId: string | number): any {
    return this.movieWatchListId = Array.from(new Set([...this.movieWatchListId, movieId]));
  }
}
