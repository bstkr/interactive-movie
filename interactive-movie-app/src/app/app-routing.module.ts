import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieHomeComponent } from './components/movie/home/movie-home.component';
import { CreditsComponent } from './components/credits/credits.component';
import { ImpressumComponent } from './components/impressum/impressum.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'movie', component: MovieHomeComponent},
  { path: 'credits', component: CreditsComponent},
  { path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
