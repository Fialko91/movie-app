import {Component, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-top-rate',
  standalone: true,
    imports: [
        NewMovieCardComponent
    ],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss'
})
export class TopRateComponent implements OnInit {
  // public topRateList: any

  public dataResult: Movie[] | undefined
  constructor(
    // private topRateMovie: GetMockDataService,
    private movieService: MovieService,
  ) {
    // this.topRateList = this.topRateMovie.getTopRatedMovies()
  }

  public ngOnInit(): void {
    this.movieService.getMovieListByCategory('top_rated').subscribe(data => {
      this.dataResult = data.results
    })
  }
}
