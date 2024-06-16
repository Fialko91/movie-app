import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";

@Component({
  selector: 'app-primeng-movie-card',
  standalone: true,
  imports: [
    CardModule,
    Button
  ],
  templateUrl: './primeng-movie-card.component.html',
  styleUrl: './primeng-movie-card.component.scss'
})
export class PrimengMovieCardComponent {

  movie = {
    "backdrop_path": "../assets/images/img.jpg",
    "id": 653346,
    "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    "release_date": "May 5, 2024",
    "title": "Kingdom of the Planet of the Apes",
    "rating": 8.5
  };
}
