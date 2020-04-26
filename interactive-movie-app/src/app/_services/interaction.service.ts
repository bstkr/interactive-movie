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
import { jsonCopy } from "../_models/UserState";

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
    this.interactions = Object.create(Interactions);

    if (localStorage.getItem("interactionStateArray")) {
      this.interactionStateArray = JSON.parse(
        localStorage.getItem("interactionStateArray")
      );
    } else {
      this.interactionStateArray = jsonCopy(InteractionStateArray);
      localStorage.setItem(
        "interactionStateArray",
        JSON.stringify(this.interactionStateArray)
      );
    }
    this.interactionStateObservableArray = [];

    this.initializeObservableArray();
  }

  resetInteractionStateArray() {
    this.interactionStateArray = jsonCopy(InteractionStateArray);
    localStorage.setItem(
      "interactionStateArray",
      JSON.stringify(this.interactionStateArray)
    );
    this.interactionStateObservableArray = [];

    this.initializeObservableArray();
  }

  getInteractions(povType: PovType): Interaction[] {
    return this.interactions.find((p) => p.id === povType).interactions;
  }

  getInteractionStateArray(): InteractionState[] {
    return this.interactionStateArray;
  }

  getInteractionState(interactionName: string) {
    return this.interactionStateObservableArray.find(
      (interactionObs) => interactionObs.interactionName === interactionName
    );
  }

  getDecisionOfInteractionState(interactionName: string): string {
    return this.interactionStateObservableArray.find(
      (interactionState) => interactionState.interactionName === interactionName
    ).decision.value;
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
    for (let interactionState of this.interactionStateArray) {
      if (interactionState.name === interactionName) {
        interactionState.clicked = true;
        interactionState.decision = decision;
      }
    }
    localStorage.setItem(
      "interactionStateArray",
      JSON.stringify(this.interactionStateArray)
    );
  }

  getPathToImageForClickedInteraction(
    interactionName: string,
    interactionId: string,
    decision: string
  ): string {
    if (decision.split(",")[0] === "1") {
      return this.interactionStateArray
        .find((interactionState) => interactionState.name === interactionName)
        .Interactions.find(
          (interaction) => interaction.interactionId === interactionId
        ).pathToCompleteObjectImage.a;
    } else if (decision.split(",")[0] === "2") {
      return this.interactionStateArray
        .find((interactionState) => interactionState.name === interactionName)
        .Interactions.find(
          (interaction) => interaction.interactionId === interactionId
        ).pathToCompleteObjectImage.b;
    } else {
      return "";
    }
  }

  getTimelineImagePath(interactionName: string, decision: string): string {
    if (decision === "1") {
      return this.interactionStateArray.find(
        (interactionState) => interactionState.name === interactionName
      ).Timeline.pathToTimelineImage.a;
    } else if (decision === "2") {
      return this.interactionStateArray.find(
        (interactionState) => interactionState.name === interactionName
      ).Timeline.pathToTimelineImage.b;
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

  private getDecisionOfInteraction(interactionName: string): string {
    return this.interactionStateArray.find(
      (interactionState) => interactionState.name === interactionName
    ).decision;
  }
}
