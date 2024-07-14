import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JsonPipe} from "@angular/common";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {MovieAllService} from "../../services/movie-all.service";
import {Movie} from "../../models/movie.model";
import {AddToListService} from "../../services/add-to-list.service";
import {SaveIdForAddedToListService} from "../../services/save-id-for-added-to-list.service";
import {pipe, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-now-plaing-item',
  standalone: true,
  imports: [
    JsonPipe,
    CardModule,
    ImageModule
  ],
  templateUrl: './now-plaing-item.component.html',
  styleUrl: './now-plaing-item.component.scss'
})
export class NowPlaingItemComponent implements OnInit, OnDestroy {
  public item: Movie | undefined
  public data: Movie[] | undefined = []
  public categories = ["popular", "top_rated", "now_playing", "upcoming"];
  public selectedFavoritsMovieIds: any[] = []
  public selectedWatchMovieIds: any[] = []
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private movieAllService: MovieAllService,
    private movieId: AddToListService,
    private saveId: SaveIdForAddedToListService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieAllService.getAllCategoryMovieList(this.categories)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(data => {
      data.forEach(el => {
        this.data?.push(...el.results)
      })
      this.item = this.data?.find(el => el.id === id );
    })
  }

  addToFavoriteLIst( id: any ) {
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

  ngOnInit()  {
    this.selectedFavoritsMovieIds = this.saveId.setFavoriteListId()
    this.selectedWatchMovieIds = this.saveId.setWatchListId()
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
