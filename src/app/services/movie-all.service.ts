import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, reduce, switchMap} from "rxjs";
import {Movie, MovieModel} from "../models/movie.model";
import {apiKey, baseUrl} from "../environments/environment.model";

@Injectable({
  providedIn: 'root'
})
export class MovieAllService {
  public categories = ["popular", "top_rated", "now_playing", "upcoming"];

  constructor( private httpClient: HttpClient) { }

  getAllCategoryMovieList(): Observable<Movie[]> {
    // Array to hold Observables of HTTP requests
    const requests: Observable<MovieModel>[] = [];

    // Create HTTP request for each category
    this.categories.forEach(category => {
      const url = `${baseUrl}/${category}${apiKey}`;
      requests.push(this.httpClient.get<MovieModel>(url));
    });

    // Use forkJoin to execute all requests simultaneously
    return forkJoin(requests)
      .pipe(
        switchMap( movies => {
          return movies.map(movie => {
            return movie.results;
          })
        })
      )
  }
}
