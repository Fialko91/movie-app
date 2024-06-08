import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, EventEmitter, Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent implements OnInit {
  @Input() data: any;
  @Output() addFavorite: EventEmitter<any> = new EventEmitter();
  @Output() addWatchList: EventEmitter<any> = new EventEmitter();
  public hello: string = 'Hello World!';
  public movie: any;

  constructor() {}

  ngOnInit(): void {
    this.movie = this.data
  }

  addToFavorites() {
    this.addFavorite.emit(this.movie)
  }

  addToWatchList() {
    this.addWatchList.emit(this.movie)
  }


}
