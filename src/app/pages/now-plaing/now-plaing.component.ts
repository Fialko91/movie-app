import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieListComponent} from "../../components/movie/movie-list/movie-list.component";
import {CardModule} from "primeng/card";
import {DatePipe, JsonPipe} from "@angular/common";
import {ImageModule} from "primeng/image";
import {Button} from "primeng/button";
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {GetMockDataService} from "../../services/get-mock-data.service";
import {MovieService} from "../../services/movie.service";
import {Movie, MovieModel} from "../../models/movie.model";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-now-plaing',
  standalone: true,
  imports: [
    MovieListComponent,
    CardModule,
    JsonPipe,
    DatePipe,
    ImageModule,
    Button,
    NewMovieCardComponent
  ],
  templateUrl: './now-plaing.component.html',
  styleUrl: './now-plaing.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NowPlaingComponent implements OnInit, OnDestroy {

  public dataResult: Movie[] | undefined
  private destroy$ = new Subject<void>();

  constructor(
    private movieService: MovieService
  ) {}

  public ngOnInit(): void {
    this.movieService.getMovieListByCategory('now_playing')
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
