import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {loadMovies} from "../../store/actions";
import {selectMovies} from "../../store/selectors";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [
    NewMovieCardComponent,
    AsyncPipe
  ],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent implements OnInit, OnDestroy {

  public dataResult: any;
  private destroy$ = new Subject<void>();
  selectedMovies$ = this.store.select(selectMovies);

  constructor(
    // private movieService: MovieService,
    private store: Store,
    ) {}

  public ngOnInit(): void {
    this.store.dispatch(loadMovies({ category: 'popular' }))
    // console.log(this.selectedMovies$)
    this.selectedMovies$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(movies => {
      this.dataResult = movies
    })

    // this.movieService.getMovieListByCategory('popular')
    //   .pipe(
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(data => {
    //   this.dataResult = data.results
    // })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
