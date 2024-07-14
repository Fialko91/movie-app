import {Component, OnInit} from '@angular/core';
import {NewMovieCardComponent} from "../../components/new-movie-card/new-movie-card.component";
import {MovieAllService} from "../../services/movie-all.service";
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-entrance-page',
  standalone: true,
  imports: [
    NewMovieCardComponent,
  ],
  templateUrl: './entrance-page.component.html',
  styleUrl: './entrance-page.component.scss'
})
export class EntrancePageComponent implements OnInit {

  allMovies: Movie[] | undefined = []
  public categories = ["popular", "top_rated", "now_playing", "upcoming"];
  constructor(
    private movieAllService: MovieAllService
    ) {
  }

  ngOnInit(): void {
    this.movieAllService.getAllCategoryMovieList(this.categories).subscribe(data => {
      data.forEach(el => {
        this.allMovies?.push(...el.results)
      })
    })
  }
}
