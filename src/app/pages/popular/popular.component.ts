import {Component } from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [
    NewMovieCardComponent
  ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {

  public popularList: any
  constructor( private popularMovie: GetMockDataService) {
    this.popularList = this.popularMovie.getPopularMovies()
  }


}
