import { Injectable } from "@angular/core";
import {
  Interactions,
  POV,
  Interaction,
  PovType,
} from "../_models/Interactions";
import {
  InteractionState,
  InteractionStateArray,
} from "../_models/InteractionState";
import { Observable, BehaviorSubject } from "rxjs";

export class InteractionObservable {
  interactionName: string;
  clicked: BehaviorSubject<boolean>;
  decision: BehaviorSubject<string>;

  constructor(i: string, c: boolean, d: string) {
    this.interactionName = i;
    this.clicked = new BehaviorSubject(c);
    this.decision = new BehaviorSubject(d);
  }
}

@Injectable({
  providedIn: "root",
})
export class InteractionService {
  private interactions: POV[];
  private interactionStateArray: InteractionState[];

  private interactionStateObservableArray: InteractionObservable[];

  constructor() {
    this.interactions = Interactions;
    // check localStorage if there already exists a interactionStateArray
    this.interactionStateArray = InteractionStateArray;
    this.interactionStateObservableArray = [];

    this.initializeObservableArray();
  }

  getInteractions(povType: PovType): Interaction[] {
    return this.interactions.find((p) => p.id === povType).interactions;
  }

  getInteractionState(interactionName: string) {
    return this.interactionStateObservableArray.find(
      (interactionObs) => interactionObs.interactionName === interactionName
    );
  }

  isInteractionClicked(interactionName: string) {
    return this.interactionStateObservableArray.find(
      (interactionObs) => interactionObs.interactionName === interactionName
    ).clicked;
  }

  setDecisionOfInteractionState(interactionName: string, decision: string) {
    for (const interactionState of this.interactionStateObservableArray) {
      if (interactionState.interactionName === interactionName) {
        interactionState.clicked.next(true);
        interactionState.decision.next(decision);
      }
    }
  }

  getPathToImageForClickedInteraction(
    interactionName: string,
    interactionId: string,
    decision: string
  ): string {
    if (decision === "a") {
      return this.interactionStateArray
        .find((interactionState) => interactionState.name === interactionName)
        .Interactions.find(
          (interaction) => interaction.interactionId === interactionId
        ).pathToCompleteObjectImage.a;
    } else if (decision === "b") {
      return this.interactionStateArray
        .find((interactionState) => interactionState.name === interactionName)
        .Interactions.find(
          (interaction) => interaction.interactionId === interactionId
        ).pathToCompleteObjectImage.b;
    } else {
      return "";
    }
  }

  private initializeObservableArray() {
    for (const interactionState of this.interactionStateArray) {
      const arrayObject = new InteractionObservable(
        interactionState.name,
        interactionState.clicked,
        interactionState.decision
      );
      this.interactionStateObservableArray.push(arrayObject);
    }
  }

  private getDecisionOfInteractionState(interactionName: string): string {
    return this.interactionStateArray.find(
      (interactionState) => interactionState.name === interactionName
    ).decision;
  }
}
