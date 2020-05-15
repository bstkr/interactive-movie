import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})
export class AppComponent implements OnInit {
  title = 'interactive-movie-app';

  landscapeModeSubject: BehaviorSubject<boolean>;
  landscapeMode: boolean;

  ngOnInit() {
    this.landscapeModeSubject = new BehaviorSubject(this.checkLandscapeMode());

    window.addEventListener("orientationchange", () => {
      this.landscapeMode = !this.landscapeMode
      this.landscapeModeSubject.next(this.landscapeMode);
    }, false);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  checkLandscapeMode(): boolean {
    console.log(window.innerWidth > window.innerHeight);
    if (window.innerWidth > window.innerHeight) {
      this.landscapeMode = true;
      return true;
    } else {
      this.landscapeMode = false;
      return false;
    }
  }
}
