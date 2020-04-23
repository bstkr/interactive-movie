import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MovieHomeComponent } from "./components/movie/home/movie-home.component";
import { CreditsComponent } from "./components/credits/credits.component";
import { ImpressumComponent } from "./components/impressum/impressum.component";
import { MoviePointOfViewComponent } from "./components/movie/movie-point-of-view/movie-point-of-view.component";
import { MovieLoadingScreenComponent } from "./components/movie/movie-loading-screen/movie-loading-screen.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "movie", component: MovieLoadingScreenComponent },
  { path: "movie/:pov", component: MovieHomeComponent },
  { path: "credits", component: CreditsComponent, data: { animation: 'isLeft' } },
  { path: "impressum", component: ImpressumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
