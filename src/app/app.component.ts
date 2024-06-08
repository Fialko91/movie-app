import {
  Component, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MyComponentComponent} from "./components/my-component/my-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  movie = {
    "backdrop_path": "../assets/img.jpg",
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
    console.log('handleAddFavorite')
  }

}
