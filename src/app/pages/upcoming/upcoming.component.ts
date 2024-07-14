import {Component, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [
    NewMovieCardComponent
  ],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent implements OnInit {

  // public upcomingList: any
  public dataResult: Movie[] | undefined

  constructor(
    // private upcomingMovie: GetMockDataService,
    private movieService: MovieService
    ) {
    // this.upcomingList = this.upcomingMovie.getUpcomingMovies();
  }

  public ngOnInit(): void {
    this.movieService.getMovieListByCategory('upcoming').subscribe(data => {
      this.dataResult = data.results
    })
  }


}
