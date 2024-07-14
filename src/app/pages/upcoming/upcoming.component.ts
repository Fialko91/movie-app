import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/movie.model";
import {Subject, takeUntil} from "rxjs";

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

  public dataResult: Movie[] | undefined;
  private destroy$ = new Subject<void>();

  constructor(
    private movieService: MovieService
    ) {}

  public ngOnInit(): void {
    this.movieService.getMovieListByCategory('upcoming')
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
