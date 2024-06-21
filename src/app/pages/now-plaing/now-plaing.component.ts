import {Component, ViewEncapsulation} from '@angular/core';
import {MovieListComponent} from "../../components/movie/movie-list/movie-list.component";
import {nowPlayingMovies} from "./../../../assets/mock-data/mock-data"
import {CardModule} from "primeng/card";
import {DatePipe, JsonPipe} from "@angular/common";
import {ImageModule} from "primeng/image";
import {Router, RouterLink} from "@angular/router";
import {Button} from "primeng/button";

@Component({
  selector: 'app-now-plaing',
  standalone: true,
  imports: [
    MovieListComponent,
    CardModule,
    JsonPipe,
    DatePipe,
    ImageModule,
    RouterLink,
    Button
  ],
  templateUrl: './now-plaing.component.html',
  styleUrl: './now-plaing.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NowPlaingComponent {
  public mockResult;

  constructor( private router: Router ) {
    this.mockResult = nowPlayingMovies
    console.log(this.mockResult)
  }

  goToChild(id: number) {
    this.router.navigate(['/movie', id]);
  }
}
