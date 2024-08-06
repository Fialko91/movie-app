import {Component, OnDestroy, OnInit} from '@angular/core';
import {AddToListService} from "../../services/add-to-list.service";
import {Movie} from "../../models/movie.model";
import {Router} from "@angular/router";
import {MovieAllService} from "../../services/movie-all.service";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectAllMovies} from "../../store/selectors";
import {loadAllMovies} from "../../store/actions";

@Component({
  selector: 'app-my-watch-list',
  standalone: true,
  imports: [],
  templateUrl: './my-watch-list.component.html',
  styleUrl: './my-watch-list.component.scss'
})
export class MyWatchListComponent implements OnDestroy, OnInit {

  public movieIdItem: any = []
  public movieList: Movie[] = []
  public allMovie: Movie[] | undefined = []
  public categories = ["popular", "top_rated", "now_playing", "upcoming"];
  public movieIds = new Set<number>();
  private destroy$ = new Subject<void>();
  selectedMovies$ = this.store.select(selectAllMovies);

  constructor(
    private movieId: AddToListService,
    private router: Router,
    private movieAllService: MovieAllService,
    private store: Store
  ) {
    this.movieIdItem = this.movieId.movieWatchListId
  }

  goToChild(id: any) {
    this.router.navigate(['/movie', id]);
  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  public ngOnInit(): void {
    this.store.dispatch(loadAllMovies())

    this.selectedMovies$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe( data => {
        data?.forEach(el => {
          if (!this.movieIds.has(<number>el.id)) {
            if (typeof el.id === "number") {
              this.movieIds.add(el.id);
            }
            this.allMovie?.push(el)
          }
        })

        this.allMovie?.forEach(el => {
          if (this.movieIdItem.includes(el.id)) {
            this.movieList = Array.from(new Set([...this.movieList, el]));
          }
        });
      })
  }
}
