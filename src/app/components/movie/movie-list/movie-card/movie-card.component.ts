import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})

export class MovieCardComponent implements OnInit {

  @Input() data!: any;
  @Output() addFavorite: EventEmitter<any> = new EventEmitter();
  @Output() addWatchList: EventEmitter<any> = new EventEmitter();

  public movies: any

  ngOnInit(): void {
    this.movies = this.data;
  }

  addToFavorites(id: number) {
    this.addFavorite.emit(id)
  }

  addToWatchList(id: number, $event: any) {
    this.addWatchList.emit(id)
  }
}