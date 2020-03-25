import { Injectable } from '@angular/core';
import { Interactions, POV, Interaction, PovType } from '../_models/Interactions';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private interactions: POV[];

  constructor() {
    this.interactions = Interactions;
  }

  getInteractions(povType: PovType): Interaction[] {
    return this.interactions.find(p => p.id === povType).interactions;
  }

}
