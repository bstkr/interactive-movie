import { Component, OnInit, Input } from '@angular/core';
import { Interaction, PovType } from 'src/app/_models/Interactions';
import { InteractionService } from 'src/app/_services/interaction.service';

@Component({
  selector: 'app-movie-point-of-view',
  templateUrl: './movie-point-of-view.component.html',
  styleUrls: ['./movie-point-of-view.component.scss']
})
export class MoviePointOfViewComponent implements OnInit {

  @Input() id: PovType;

  interactions: Interaction[];

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    console.log(this.id);
    this.interactions = this.interactionService.getInteractions(this.id);
    console.log(this.interactions);
  }

}
