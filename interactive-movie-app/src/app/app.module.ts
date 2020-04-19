import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ImpressumComponent } from "./components/impressum/impressum.component";
import { CreditsComponent } from "./components/credits/credits.component";
import { TimelineComponent } from "./components/movie/timeline/timeline.component";
import { MovieHomeComponent } from "./components/movie/home/movie-home.component";
import { MovieInteractionComponent } from "./components/movie/movie-interaction/movie-interaction.component";
import { MoviePointOfViewComponent } from "./components/movie/movie-point-of-view/movie-point-of-view.component";
import { MovieSceneComponent } from "./components/movie/movie-scene/movie-scene.component";
import { MovieVideoComponent } from "./components/movie/movie-video/movie-video.component";
import { MovieDecisionComponent } from "./components/movie/movie-decision/movie-decision.component";
import { MovieLoadingScreenComponent } from "./components/movie/movie-loading-screen/movie-loading-screen.component";
import { MovieItemComponent } from "./components/movie/movie-item/movie-item.component";
import { BackButtonComponent } from './components/movie/back-button/back-button.component';
import { MovieLoadingItemComponent } from './components/movie/movie-loading-item/movie-loading-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    CreditsComponent,
    MovieHomeComponent,
    TimelineComponent,
    MovieInteractionComponent,
    MoviePointOfViewComponent,
    MovieSceneComponent,
    MovieVideoComponent,
    MovieDecisionComponent,
    MovieLoadingScreenComponent,
    MovieLoadingItemComponent,
    MovieItemComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
