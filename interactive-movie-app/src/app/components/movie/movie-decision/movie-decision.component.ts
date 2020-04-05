import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';
import { InteractionService } from 'src/app/_services/interaction.service';

@Component({
  selector: 'app-movie-decision',
  templateUrl: './movie-decision.component.html',
  styleUrls: ['./movie-decision.component.scss']
})
export class MovieDecisionComponent implements OnInit {

  @Input() interaction: Interaction;

  @Output() decisionClick = new EventEmitter<number>();

  constructor(
    public interactionService: InteractionService
  ) { }

  ngOnInit() {
  }

  clickDecision(dec: number) {
    this.decisionClick.emit(dec);
    let decision: string
    if (dec === 1) {
      decision = 'a';
    } else {
      decision = 'b';
    }
    this.interactionService.setDecisionOfInteractionState(this.interaction.interactionName, decision);
  }

}
