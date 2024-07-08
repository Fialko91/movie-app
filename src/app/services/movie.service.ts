import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieModel} from "../models/movie.model";
import {  apiKey, baseUrl } from "../environments/environment.model"

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // public apiKey: string = '?api_key=cda77585a785d1df3eab32cfc2e11fb6';
  // public baseUrl: string = 'https://api.themoviedb.org/3/movie'

  constructor( private httpClient: HttpClient ) {
  }

  getMovieListByCategory(category: string): Observable<MovieModel> {
    return this.httpClient.get<MovieModel>(`${baseUrl}/${category}${apiKey}`)
  }

}
