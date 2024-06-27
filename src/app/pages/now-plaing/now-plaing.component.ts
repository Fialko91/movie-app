import {Component, ViewEncapsulation} from '@angular/core';
import {MovieListComponent} from "../../components/movie/movie-list/movie-list.component";
import {CardModule} from "primeng/card";
import {DatePipe, JsonPipe} from "@angular/common";
import {ImageModule} from "primeng/image";
import {Button} from "primeng/button";
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";

@Component({
  selector: 'app-now-plaing',
  standalone: true,
  imports: [
    MovieListComponent,
    CardModule,
    JsonPipe,
    DatePipe,
    ImageModule,
    Button,
    NewMovieCardComponent
  ],
  templateUrl: './now-plaing.component.html',
  styleUrl: './now-plaing.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NowPlaingComponent {

  nowPlaingList: any = []

  constructor( private nowPlaingMovie: GetMockDataService) {
    this.nowPlaingList = this.nowPlaingMovie.getNowPlayingMovies()
  }
}
