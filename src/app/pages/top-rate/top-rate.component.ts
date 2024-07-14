import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";
import {Subject, takeUntil} from "rxjs";

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

  public dataResult: Movie[] | undefined
  private destroy$ = new Subject<void>();

  constructor(
    private movieService: MovieService,
  ) {}

  public ngOnInit(): void {
    this.movieService.getMovieListByCategory('top_rated')
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
      this.dataResult = data.results
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
