import {Component, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [
    NewMovieCardComponent
  ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent implements OnInit {

  // public popularList: any
  public dataResult: Movie[] | undefined

  constructor(
    // private popularMovie: GetMockDataService,
    private movieService: MovieService
    ) {
    // this.popularList = this.popularMovie.getPopularMovies()
  }

  public ngOnInit(): void {
    this.movieService.getMovieListByCategory('popular').subscribe(data => {
      this.dataResult = data.results
    })
  }


}
