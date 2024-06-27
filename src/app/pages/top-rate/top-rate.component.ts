import {Component} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";

@Component({
  selector: 'app-top-rate',
  standalone: true,
    imports: [
        NewMovieCardComponent
    ],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss'
})
export class TopRateComponent {
  public topRateList: any

  constructor( private topRateMovie: GetMockDataService) {
    this.topRateList = this.topRateMovie.getTopRatedMovies()
  }
}
