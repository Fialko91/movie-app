import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {CardModule} from "primeng/card";
import {DatePipe, NgClass} from "@angular/common";
import {ImageModule} from "primeng/image";
import {PrimeTemplate} from "primeng/api";
import {Router} from "@angular/router";
import {AddToListService} from "../../services/add-to-list.service";
import {Movie} from "../../models/movie.model";
import {SaveIdForAddedToListService} from "../../services/save-id-for-added-to-list.service";

@Component({
  selector: 'app-new-movie-card',
  standalone: true,
  imports: [
    CardModule,
    DatePipe,
    ImageModule,
    PrimeTemplate,
    NgClass
  ],
  templateUrl: './new-movie-card.component.html',
  styleUrl: './new-movie-card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NewMovieCardComponent implements OnInit, OnChanges {

  @Input() movieData: Movie[] | undefined
  public mockResult: Movie[] | undefined
  public selectedFavoritsMovieIds: any[] = []
  public selectedWatchMovieIds: any[] = []

  constructor(
    private router: Router,
    private movieId: AddToListService,
    private saveId: SaveIdForAddedToListService
    ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieData']) {
      this.mockResult = this.movieData;
    }
  }

  ngOnInit(): void {
    this.mockResult = this.movieData;
    this.selectedFavoritsMovieIds = this.saveId.setFavoriteListId()
    this.selectedWatchMovieIds = this.saveId.setWatchListId()
  }

  goToChild(id: any) {
    this.router.navigate(['/movie', id]);
  }

  addToFavoriteLIst(id: any) {
    this.movieId.getFavoriteMovieId(id)

    const index = this.selectedFavoritsMovieIds.indexOf(id);
    if (index === -1) {
      this.saveId.getFavoriteListId(id)
      this.selectedFavoritsMovieIds = this.saveId.setFavoriteListId()
    }
  }

  addToWatchList(id: any) {
    this.movieId.getWatchMovieId(id)

    const index = this.selectedWatchMovieIds.indexOf(id);
    if (index === -1) {
      this.saveId.getWatchListId(id)
      this.selectedWatchMovieIds = this.saveId.setWatchListId()
    }
  }
}
