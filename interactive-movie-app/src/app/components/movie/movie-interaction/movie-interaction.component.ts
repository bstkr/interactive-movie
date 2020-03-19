import { Component, OnInit, Input } from '@angular/core';
import { Interaction } from 'src/app/_models/Interactions';

@Component({
  selector: 'app-movie-interaction',
  templateUrl: './movie-interaction.component.html',
  styleUrls: ['./movie-interaction.component.scss']
})
export class MovieInteractionComponent implements OnInit {

  @Input() interaction: Interaction;

  private intervals: []
  private pictureParts = ["top", "right", "bottom", "left", "middle"];

  constructor() { }

  ngOnInit() {
  }

  setInteractionStyle() {
    return {
      'top': this.interaction.positionY + "vh",
      'left': this.interaction.positionX + "vw",
      'width': this.interaction.width + "px",
      'height': this.interaction.height + "px"
    }
  }

  getStyleClass(styleClass: string, visible: boolean) {
    let classes = styleClass;
    if (!visible) {
      classes += " invisible";
    } else {
      classes += " visible";
    }
    return classes;
  }
}
