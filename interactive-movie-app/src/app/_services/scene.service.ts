import { Injectable } from '@angular/core';
import { Scene, Scenes, Decision } from '../_models/Scenes';
import { BehaviorSubject } from 'rxjs';
import { Interactions } from '../_models/Interactions';

export class SceneObservable {
  sceneId: string;
  active: BehaviorSubject<boolean>;

  constructor(id: string, active: boolean) {
    this.sceneId = id;
    this.active = new BehaviorSubject(active);
  }
}

@Injectable({
  providedIn: 'root',
})
export class SceneService {
  sceneArray: Scene[];
  sceneObservableArray: SceneObservable[];

  currentDecistion: BehaviorSubject<string>;

  constructor() {
    this.sceneArray = Scenes;
    this.sceneObservableArray = [];

    this.currentDecistion = new BehaviorSubject<string>('0');

    for (const scene of this.sceneArray) {
      const observableScene = new SceneObservable(scene.sceneId, false);
      this.sceneObservableArray.push(observableScene);
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

  getSceneIdFromInteractionName(name: string) {
    for (const scene of this.sceneArray) {
      if (scene.sceneName === name) {
        return scene.sceneId;
      }
    }
  }
}
