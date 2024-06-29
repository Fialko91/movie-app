import { Injectable } from '@angular/core';
import { movieData, upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies } from "../../assets/mock-data/mock-data"


@Injectable({
  providedIn: 'root'
})
export class GetMockDataService {

  constructor() { }

  getUpcomingMovies() {
    return upcomingMovies
  }

  getTopRatedMovies() {
    return topRatedMovies
  }

  getPopularMovies() {
    return popularMovies
  }

  getNowPlayingMovies() {
    return nowPlayingMovies
  }

  getAllMovieData() {
    return movieData
  }

}
