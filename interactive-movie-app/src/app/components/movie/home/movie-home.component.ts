import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PovType } from 'src/app/_models/Interactions';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InteractionService } from 'src/app/_services/interaction.service';
import { InteractionState } from 'src/app/_models/InteractionState';
import { UserState } from 'src/app/_models/UserState';
import { UserService } from 'src/app/_services/user.service';
import { Scene } from 'src/app/_models/Scenes';
import { SceneService } from 'src/app/_services/scene.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss'],
})
export class MovieHomeComponent implements OnInit, AfterViewInit, OnDestroy {
  pov$: Observable<string>;
  currentPov: string;

  showIntro = true;

  interactionStateArray: InteractionState[];
  sceneArray: Scene[];
  userState: UserState;

  sub: Subscription;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public interactionService: InteractionService,
    public userService: UserService,
    public sceneService: SceneService
  ) {}

  ngOnInit() {
    this.currentPov = this.route.snapshot.paramMap.get('pov');
    this.interactionStateArray = this.interactionService.getInteractionStateArray();
    this.sceneArray = this.sceneService.sceneArray;
    this.sub = this.userService.getUserState().subscribe((s) => (this.userState = s));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    setTimeout( () => {
      if (!this.userState.hasSeenIntro) {
        const videoElement = document.getElementById(
          this.sceneService.getSceneIdFromInteractionName('Handy')
        );
        const rightNavElement = document.getElementById('rightNav');
        const leftNavElement = document.getElementById('leftNav');

        if (rightNavElement) {
          rightNavElement.classList.add('hidden');
        }
        if (leftNavElement) {
          leftNavElement.classList.add('hidden');
        }

        videoElement.classList.remove('hidden');
        videoElement.classList.add('show');

        this.sceneService.setCurrentDecisionObservable('0');
        this.sceneService.setSceneActive(
          this.sceneService.getSceneIdFromInteractionName('Handy'),
          true
        );

        document.getElementById('intro').classList.add('hide');
      }

      this.showIntro = false;
    }, 5000);
  }

  rightNavigation() {
    if (this.currentPov === 'pov1') {
      this.router.navigate(['/movie', 'pov2']);
      this.currentPov = 'pov2';
    } else if (this.currentPov === 'pov2') {
      this.router.navigate(['/movie', 'pov3']);
      this.currentPov = 'pov3';
    }
  }

  leftNavigation() {
    if (this.currentPov === 'pov2') {
      this.router.navigate(['/movie', 'pov1']);
      this.currentPov = 'pov1';
    } else if (this.currentPov === 'pov3') {
      this.router.navigate(['/movie', 'pov2']);
      this.currentPov = 'pov2';
    }
  }
}
