import { Injectable } from "@angular/core";
import { Scene, Scenes, Decision } from "../_models/Scenes";
import { BehaviorSubject } from "rxjs";
import { Interactions } from "../_models/Interactions";

export class SceneObservable {
  sceneId: string;
  active: BehaviorSubject<boolean>;

  constructor(id: string, active: boolean) {
    this.sceneId = id;
    this.active = new BehaviorSubject(active);
  }
}

@Injectable({
  providedIn: "root",
})
export class SceneService {
  sceneArray: Scene[];
  sceneObservableArray: SceneObservable[];

  currentDecistion: BehaviorSubject<string>;

  constructor() {
    this.sceneArray = Scenes;
    this.sceneObservableArray = [];

    this.currentDecistion = new BehaviorSubject<string>("0");

    for (let pov of Interactions) {
      for (let interaction of pov.interactions) {
        let scene = new SceneObservable(interaction.sceneId, false);
        this.sceneObservableArray.push(scene);
      }
    }
  }

  getDecisionsArrayFromSceneName(sceneName: string): Decision[] {
    return this.sceneArray.find((scene) => scene.sceneName === sceneName)
      .decisions;
  }

  setSceneActive(sceneId: string, b: boolean) {
    this.sceneObservableArray.find((s) => s.sceneId === sceneId).active.next(b);
  }

  getSceneActive(sceneId: string) {
    return this.sceneObservableArray.find((scene) => scene.sceneId === sceneId)
      .active;
  }

  setCurrentDecisionObservable(decision: string) {
    this.currentDecistion.next(decision);
  }

  getCurrentDecisionObservable(): BehaviorSubject<string> {
    return this.currentDecistion;
  }
}
