import { Routes } from '@angular/router';
import {NowPlaingComponent} from "./pages/now-plaing/now-plaing.component";
import {MyFavoritesListComponent} from "./pages/my-favorites-list/my-favorites-list.component";
import {MyWatchListComponent} from "./pages/my-watch-list/my-watch-list.component";
import {NowPlaingItemComponent} from "./pages/now-plaing/now-plaing-item/now-plaing-item.component";

export const routes: Routes = [
  { path: '', component: NowPlaingComponent},
  { path: 'movie/:id', component: NowPlaingItemComponent },
  { path: 'favorites', component: MyFavoritesListComponent },
  { path: 'watch-list', component: MyWatchListComponent},
];
