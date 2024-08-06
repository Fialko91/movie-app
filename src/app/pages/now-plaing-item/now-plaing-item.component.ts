import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JsonPipe} from "@angular/common";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";
import {Movie} from "../../models/movie.model";
import {AddToListService} from "../../services/add-to-list.service";
import {SaveIdForAddedToListService} from "../../services/save-id-for-added-to-list.service";
import {pipe, Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectAllMovies} from "../../store/selectors";
import {loadAllMovies} from "../../store/actions";

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
  public selectedFavoritsMovieIds: any[] = []
  public selectedWatchMovieIds: any[] = []
  private destroy$ = new Subject<void>();
  selectedMovies$ = this.store.select(selectAllMovies);

  constructor(
    private route: ActivatedRoute,
    private movieId: AddToListService,
    private saveId: SaveIdForAddedToListService,
    private store: Store
  ) {
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

    this.store.dispatch(loadAllMovies())
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.selectedMovies$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        data?.forEach( el => {
          this.data?.push(el)
        })
        this.item = this.data?.find(el => el.id === id );
      })

  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
