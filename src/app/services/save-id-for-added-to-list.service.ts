import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveIdForAddedToListService {

  public favoriteListId: any[] = []
  public watchListId: any[] = []

  constructor() { }

  getFavoriteListId(movieId: number[] ) {
    this.favoriteListId = Array.from(new Set([...this.favoriteListId, movieId]));
  }

  setFavoriteListId() {
    return this.favoriteListId
  }

  getWatchListId(movieId: number[] ) {
    this.watchListId = Array.from(new Set([...this.watchListId, movieId]));
  }

  setWatchListId() {
    return this.watchListId
  }
}
