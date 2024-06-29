import {Component, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [
    NewMovieCardComponent
  ],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent {

  public upcomingList: any

  constructor( private upcomingMovie: GetMockDataService) {
    this.upcomingList = this.upcomingMovie.getUpcomingMovies();
  }


}
