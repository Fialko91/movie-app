import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() toggleElement: EventEmitter<any> = new EventEmitter();

  removeMenu(el: boolean) {
    this.toggleElement.emit(true)
  }
}
