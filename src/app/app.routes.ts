import { Routes } from '@angular/router';
import {NowPlaingComponent} from "./pages/now-plaing/now-plaing.component";
import {MyFavoritesListComponent} from "./pages/my-favorites-list/my-favorites-list.component";
import {MyWatchListComponent} from "./pages/my-watch-list/my-watch-list.component";
import {NowPlaingItemComponent} from "./pages/now-plaing-item/now-plaing-item.component";
import {PopularComponent} from "./pages/popular/popular.component";
import {TopRateComponent} from "./pages/top-rate/top-rate.component";
import {UpcomingComponent} from "./pages/upcoming/upcoming.component";
import {EntrancePageComponent} from "./pages/entrance-page/entrance-page.component";

export const routes: Routes = [
  { path: '', component: EntrancePageComponent },
  { path: 'now-plaing', component: NowPlaingComponent},
  { path: 'movie/:id', component: NowPlaingItemComponent },
  { path: 'favorites', component: MyFavoritesListComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'top-rate', component: TopRateComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'watch-list', component: MyWatchListComponent},
];
