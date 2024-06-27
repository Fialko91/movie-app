import { Component } from '@angular/core';
import {AddToListService} from "../../services/add-to-list.service";
import {GetMockDataService} from "../../services/get-mock-data.service";

@Component({
  selector: 'app-my-watch-list',
  standalone: true,
  imports: [],
  templateUrl: './my-watch-list.component.html',
  styleUrl: './my-watch-list.component.scss'
})
export class MyWatchListComponent {

  public movieIdItem: any = []
  public movieList: any = []

  constructor(
    private movieId: AddToListService,
    private allMovieData: GetMockDataService
  ) {
    this.movieIdItem = this.movieId.movieWatchListId
    this.checkMovieId()
  }
  public allMovie = this.allMovieData.getAllMovieData()

  public checkMovieId() {
    this.allMovie.forEach(el => {
      if (this.movieIdItem.includes(el.id) ) {
        this.movieList.push(el)
      }
    })
  }
}
