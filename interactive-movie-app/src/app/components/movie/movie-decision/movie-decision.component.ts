import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';
import { InteractionService } from 'src/app/_services/interaction.service';
import { Decision, Scene } from 'src/app/_models/Scenes';
import { SceneService } from 'src/app/_services/scene.service';

@Component({
  selector: 'app-movie-decision',
  templateUrl: './movie-decision.component.html',
  styleUrls: ['./movie-decision.component.scss'],
})
export class MovieDecisionComponent implements OnInit {
  @Input() scene: Scene;
  @Input() decision: Decision;
  @Input() decisionArray: string[];
  @Input() currentDecision: string;

  @Output() decisionClick = new EventEmitter<{
    dec: string;
    decisionPos: string;
  }>();

  userDecision: string;
  sceneActive: boolean;

  constructor(
    public interactionService: InteractionService,
    public sceneService: SceneService
  ) {}

  ngOnInit() {
    this.interactionService
      .getInteractionState(this.scene.sceneName)
      .decision.subscribe((s) => (this.userDecision = s));
    this.sceneService
      .getSceneActive(this.scene.sceneId)
      .subscribe((s) => (this.sceneActive = s));
  }

  clickDecision(dec: string) {
    const decisionPos = '' + this.decision.decisionPos;
    this.decisionClick.emit({ dec, decisionPos });
  }

  checkDecisionPos() {
    return (
      this.sceneActive && this.decision.decisionPos === this.currentDecision
    );
  }

  checkCompletedDecision(alternative: string) {
    if (this.decision.decisionPos === '0') {
      return this.decisionArray[0] === alternative;
    } else {
      return this.decisionArray[1] === alternative;
    }
  }
}
