import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CardModule} from "primeng/card";
import {DatePipe} from "@angular/common";
import {ImageModule} from "primeng/image";
import {PrimeTemplate} from "primeng/api";
import {Router} from "@angular/router";
import {AddToListService} from "../../services/add-to-list.service";

@Component({
  selector: 'app-new-movie-card',
  standalone: true,
    imports: [
        CardModule,
        DatePipe,
        ImageModule,
        PrimeTemplate
    ],
  templateUrl: './new-movie-card.component.html',
  styleUrl: './new-movie-card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NewMovieCardComponent implements OnInit {

  @Input() movieData: any
  public mockResult: any

  constructor(
    private router: Router,
    private movieId: AddToListService
    ) {}

  ngOnInit(): void {
    this.mockResult = this.movieData;
  }

  goToChild(id: number) {
    this.router.navigate(['/movie', id]);
  }

  addToFavoriteLIst(id: number) {
    this.movieId.getFavoriteMovieId(id)
  }

  addToWatchList(id: number) {
    this.movieId.getWatchMovieId(id)
  }
}
