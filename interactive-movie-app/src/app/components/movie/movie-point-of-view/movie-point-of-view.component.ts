import { Component, OnInit, Input } from '@angular/core';
import { Interaction, PovType } from 'src/app/_models/Interactions';
import { InteractionService } from 'src/app/_services/interaction.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-point-of-view',
  templateUrl: './movie-point-of-view.component.html',
  styleUrls: ['./movie-point-of-view.component.scss']
})
export class MoviePointOfViewComponent implements OnInit {

  @Input() id: PovType;

  interactions: Interaction[];

  constructor(
    private interactionService: InteractionService
    ) { }

  ngOnInit() {
    this.interactions = this.interactionService.getInteractions(this.id);
  }

  getImageUrl() {
    return 'assets/pictures/room/room-' + this.id + '.jpg';
  }

}
