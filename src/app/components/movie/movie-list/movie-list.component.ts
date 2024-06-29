import { Component } from '@angular/core';
import {MovieCardComponent} from "./movie-card/movie-card.component";
import {FormsModule} from "@angular/forms";
import {JsonPipe, NgForOf} from "@angular/common";
import {nowPlayingMovies} from "../../../../assets/mock-data/mock-data";
import {MatCard, MatCardImage, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent,
    FormsModule,
    NgForOf,
    JsonPipe,
    MatCard,
    MatCardImage,
    MatCardTitle
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  public favoriteList: any = [];
  public watchList: any = [];

  movies = nowPlayingMovies

  handleAddFavorite(id: number) {
    this.movies.forEach(el => {
      if (el.id === id ) {
        this.favoriteList = Array.from(new Set([...this.favoriteList, el]));
      }
    })
  }

  handleAddWatchList(id: number) {
    this.movies.forEach(el => {
      if (el.id === id) {
        this.watchList = Array.from(new Set([...this.watchList, el]));
      }
    })
  }
}
