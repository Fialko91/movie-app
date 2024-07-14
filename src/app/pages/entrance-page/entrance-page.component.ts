import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {MovieAllService} from "../../services/movie-all.service";
import {Movie} from "../../models/movie.model";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-entrance-page',
  standalone: true,
  imports: [
    NewMovieCardComponent,
  ],
  templateUrl: './entrance-page.component.html',
  styleUrl: './entrance-page.component.scss'
})
export class EntrancePageComponent implements OnInit, OnDestroy {

  allMovies: Movie[] | undefined = []
  public categories = ["popular", "top_rated", "now_playing", "upcoming"];
  private destroy$ = new Subject<void>();

  constructor(
    private movieAllService: MovieAllService
    ) {
  }

  ngOnInit(): void {
    this.movieAllService.getAllCategoryMovieList(this.categories)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
      data.forEach(el => {
        this.allMovies?.push(...el.results)
      })
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
