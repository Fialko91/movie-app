import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieModel} from "../models/movie.model";
import {  apiKey, baseUrl } from "../environments/environment.model"

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor( private httpClient: HttpClient ) {
  }

  getMovieListByCategory(category: string): Observable<MovieModel> {
    return this.httpClient.get<MovieModel>(`${baseUrl}/${category}${apiKey}`)
  }

}
