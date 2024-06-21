import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {nowPlayingMovies} from "./../../../../assets/mock-data/mock-data"
import {JsonPipe} from "@angular/common";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-now-plaing-item',
  standalone: true,
  imports: [
    JsonPipe,
    CardModule,
    ImageModule
  ],
  templateUrl: './now-plaing-item.component.html',
  styleUrl: './now-plaing-item.component.scss'
})
export class NowPlaingItemComponent implements OnInit {
  item: any;

  private data = nowPlayingMovies

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.data.find(item => item.id === id);
  }
}
