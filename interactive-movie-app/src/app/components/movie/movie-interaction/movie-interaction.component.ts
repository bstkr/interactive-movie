import { Component, OnInit, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-interaction',
  templateUrl: './movie-interaction.component.html',
  styleUrls: ['./movie-interaction.component.scss']
})
export class MovieInteractionComponent implements OnInit {

  @Input() interaction: Interaction;

  constructor() { }

  ngOnInit() {
    console.log(this.interaction);
  }

  setInteractionStyle() {
    return {
      'top': this.interaction.positionY + "px",
      'left': this.interaction.positionX + "px",
      'width': this.interaction.width + "px",
      'height': this.interaction.height + "px"
    }
  }
}
