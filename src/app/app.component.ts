import {
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MyComponentComponent} from "./components/my-component/my-component.component";
import {MovieListComponent} from "./components/movie/movie-list/movie-list.component";
import {MaterialMovieCardComponent} from "./components/material-movie-card/material-movie-card.component";
import {PrimengMovieCardComponent} from "./components/primeng-movie-card/primeng-movie-card.component";
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyComponentComponent, MovieListComponent, MaterialMovieCardComponent, PrimengMovieCardComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  movie = {
    "backdrop_path": "../assets/image/img.jpg",
    "id": 653346,
    "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    "release_date": "May 5, 2024",
    "title": "Kingdom of the Planet of the Apes",
    "rating": 8.5
  };

  handleAddFavorite() {
    console.log('handleAddFavorite')
  }

  handleAddWatchList() {
    console.log('handleAddWatchList')
  }

}
