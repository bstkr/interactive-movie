import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Interactions } from "../_models/Interactions";

export class Scene {
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

  constructor() {
    this.sceneArray = [];

    for (let pov of Interactions) {
      for (let interaction of pov.interactions) {
        let scene = new Scene(interaction.sceneId, false);
        this.sceneArray.push(scene);
      }
    }
  }

  setSceneActive(sceneId: string, b: boolean) {
    this.sceneArray.find((s) => s.sceneId === sceneId).active.next(b);
  }

  getSceneActive(sceneId: string) {
    return this.sceneArray.find((scene) => scene.sceneId === sceneId).active;
  }
}
