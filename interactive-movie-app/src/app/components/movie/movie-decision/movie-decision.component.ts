import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-decision',
  templateUrl: './movie-decision.component.html',
  styleUrls: ['./movie-decision.component.scss']
})
export class MovieDecisionComponent implements OnInit {

  @Input() interaction: Interaction;

  @Output() decisionClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clickDecision(dec: number) {
    this.decisionClick.emit(dec);
  }

}
