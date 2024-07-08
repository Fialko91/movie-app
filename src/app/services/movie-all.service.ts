import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";
import {MovieModel} from "../models/movie.model";
import {apiKey, baseUrl} from "../environments/environment.model";

@Injectable({
  providedIn: 'root'
})
export class MovieAllService {

  constructor( private httpClient: HttpClient) { }

  getAllCategoryMovieList(categories: string[]): Observable<MovieModel[]> {
    // Array to hold Observables of HTTP requests
    const requests: Observable<MovieModel>[] = [];

    // Create HTTP request for each category
    categories.forEach(category => {
      const url = `${baseUrl}/${category}${apiKey}`;
      requests.push(this.httpClient.get<MovieModel>(url));
    });
    // Use forkJoin to execute all requests simultaneously
    return forkJoin(requests);
  }
}
