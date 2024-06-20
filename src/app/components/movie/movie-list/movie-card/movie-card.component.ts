import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TimeFormatPipe} from "../../../../pipes/time-format.pipe";
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    TimeFormatPipe,
    CardModule,
    Button,
    NgClass,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  encapsulation: ViewEncapsulation.None
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
