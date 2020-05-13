import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { InteractionService } from 'src/app/_services/interaction.service';
import { Interaction, PovType } from 'src/app/_models/Interactions';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SceneService } from 'src/app/_services/scene.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timeline-object',
  templateUrl: './timeline-object.component.html',
  styleUrls: ['./timeline-object.component.scss'],
})
export class TimelineObjectComponent implements OnInit, OnDestroy {
  @Input() objectName: string;

  objectClicked: boolean;
  objectDecision: string;

  sceneId: string;
  currentPov: string;

  subArray: Subscription[];

  constructor(
    public interactionService: InteractionService,
    public route: ActivatedRoute,
    public sceneService: SceneService,
    public router: Router
  ) {}

  ngOnInit() {
    this.subArray = [];

    this.subArray.push(
    this.interactionService
      .isInteractionClicked(this.objectName)
      .subscribe((s) => (this.objectClicked = s)),

    this.interactionService
      .getInteractionState(this.objectName)
      .decision.subscribe((s) => (this.objectDecision = s.split(',')[0]))
    );
  }

  ngOnDestroy() {
    for (const sub of this.subArray) {
      sub.unsubscribe();
    }
  }

  clickedInteraction() {
    this.currentPov = this.route.snapshot.paramMap.get('pov');
    this.sceneId = this.sceneService.getSceneIdFromInteractionName(
      this.objectName
    );

    const videoElement = document.getElementById(this.sceneId);
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
    this.sceneService.setSceneActive(this.sceneId, true);
  }
}
