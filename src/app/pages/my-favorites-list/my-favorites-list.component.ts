import { Component } from '@angular/core';
import {AddToListService} from "../../services/add-to-list.service";
import {GetMockDataService} from "../../services/get-mock-data.service";

@Component({
  selector: 'app-my-favorites-list',
  standalone: true,
  imports: [],
  templateUrl: './my-favorites-list.component.html',
  styleUrl: './my-favorites-list.component.scss'
})
export class MyFavoritesListComponent {
  public movieIdItem: any = []
  public movieList: any = []

  constructor(
    private movieId: AddToListService,
    private allMovieData: GetMockDataService
    ) {
    this.movieIdItem = this.movieId.movieFavoriteListId
    this.checkMovieId()
    console.log(this.movieList)
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
