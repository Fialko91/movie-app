import {Component, OnDestroy} from '@angular/core';
import {AddToListService} from "../../services/add-to-list.service";
import {Movie} from "../../models/movie.model";
import {Router} from "@angular/router";
import {MovieAllService} from "../../services/movie-all.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-my-watch-list',
  standalone: true,
  imports: [],
  templateUrl: './my-watch-list.component.html',
  styleUrl: './my-watch-list.component.scss'
})
export class MyWatchListComponent implements OnDestroy {

  public movieIdItem: any = []
  public movieList: Movie[] = []
  public allMovie: Movie[] | undefined = []
  public categories = ["popular", "top_rated", "now_playing", "upcoming"];
  public movieIds = new Set<number>();
  private destroy$ = new Subject<void>();

  constructor(
    private movieId: AddToListService,
    private router: Router,
    private movieAllService: MovieAllService
  ) {
    this.movieIdItem = this.movieId.movieWatchListId

    this.movieAllService.getAllCategoryMovieList(this.categories)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(data => {
      data.forEach(el => {
        el.results?.forEach(movie => {
          if (!this.movieIds.has(<number>movie.id)) {
            if (typeof movie.id === "number") {
              this.movieIds.add(movie.id);
            }
            this.allMovie?.push(movie)
          }
        });
      });

      this.allMovie?.forEach(el => {
        if (this.movieIdItem.includes(el.id)) {
          this.movieList = Array.from(new Set([...this.movieList, el]));
        }
      });
    })
  }

  goToChild(id: any) {
    this.router.navigate(['/movie', id]);
  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
