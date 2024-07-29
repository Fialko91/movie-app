import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {selectAllMovies, selectMovies} from "../../store/selectors";
import {loadAllMovies} from "../../store/actions";

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

  allMovies: any
  private destroy$ = new Subject<void>();
  selectedMovies$ = this.store.select(selectAllMovies);

  constructor(
    private store: Store
    ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadAllMovies())

    this.selectedMovies$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(movies => {
        this.allMovies = movies
      })

  }

  public ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
