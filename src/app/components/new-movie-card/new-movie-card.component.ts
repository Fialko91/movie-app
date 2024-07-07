import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {CardModule} from "primeng/card";
import {DatePipe} from "@angular/common";
import {ImageModule} from "primeng/image";
import {PrimeTemplate} from "primeng/api";
import {Router} from "@angular/router";
import {AddToListService} from "../../services/add-to-list.service";
import {Movie} from "../../models/movie.model";

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
export class NewMovieCardComponent implements OnInit, OnChanges {

  @Input() movieData: Movie[] | undefined
  public mockResult: Movie[] | undefined

  constructor(
    private router: Router,
    private movieId: AddToListService
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieData']) {
      this.mockResult = this.movieData;
    }
  }

  ngOnInit(): void {
    this.mockResult = this.movieData;
  }

  goToChild(id: number) {
    console.log("=>", id)
    this.router.navigate(['/movie', id]);
  }

  addToFavoriteLIst(id: number) {
    this.movieId.getFavoriteMovieId(id)
  }

  addToWatchList(id: number) {
    this.movieId.getWatchMovieId(id)
  }
}
