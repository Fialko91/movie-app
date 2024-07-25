import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectMovies} from "../../store/selectors";
import {loadMovies} from "../../store/actions";

@Component({
  selector: 'app-top-rate',
  standalone: true,
    imports: [
        NewMovieCardComponent
    ],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss'
})
export class TopRateComponent implements OnInit, OnDestroy {

  public dataResult: any
  private destroy$ = new Subject<void>();
  selectedMovies$ = this.store.select(selectMovies);

  constructor(
    private movieService: MovieService,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(loadMovies({ category: 'top_rated' }))

    this.selectedMovies$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(movies => {
        this.dataResult = movies
    })

    // this.movieService.getMovieListByCategory('top_rated')
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
