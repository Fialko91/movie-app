import {Component} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";

@Component({
  selector: 'app-entrance-page',
  standalone: true,
  imports: [
    NewMovieCardComponent,
  ],
  templateUrl: './entrance-page.component.html',
  styleUrl: './entrance-page.component.scss'
})
export class EntrancePageComponent {

  allMovies: any = []
  constructor( private allMovieData: GetMockDataService) {
    this.allMovies = this.allMovieData.getAllMovieData()
  }
}
