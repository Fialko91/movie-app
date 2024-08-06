import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {loadMovies} from "../../store/actions";
import {selectMovies} from "../../store/selectors";

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [
    NewMovieCardComponent
  ],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss'
})
export class UpcomingComponent implements OnInit, OnDestroy {

  public dataResult: any
  private destroy$ = new Subject<void>();
  selectedMovies$ = this.store.select(selectMovies);

  constructor(
    private movieService: MovieService,
    private store: Store,
    ) {}

  public ngOnInit(): void {
    this.store.dispatch(loadMovies({ category: 'upcoming' }))

    this.selectedMovies$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(movies => {
        this.dataResult = movies
      })

    // this.movieService.getMovieListByCategory('upcoming')
    //   .pipe(
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(data => {
    //   this.dataResult = data.results
    // })
  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }


}
