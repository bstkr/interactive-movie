import { Injectable } from "@angular/core";
import { POV, Interaction, Interactions } from "../_models/Interactions";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  allPovs: POV[];

  loadingArray: LoadingItem[];

  totalItems: number;
  itemsLoaded: number;

  loadingPercentage: BehaviorSubject<string>;

  constructor() {
    this.loadingArray = [];
    this.totalItems = 0;
    this.itemsLoaded = 0;
    // all interactions from POV1
    this.allPovs = Interactions;

    for (let pov of this.allPovs) {
      for (let int of pov.interactions) {
        for (let picturePart of int.pictureParts) {
          this.loadingArray.push(new LoadingItem(picturePart.path, "picture"));
          this.totalItems += 1;
          //console.log("picture: " + picturePart.path);
        }
        for (let video of int.videoSequence) {
          if (video.sequencePosition === "intro") {
            this.loadingArray.push(new LoadingItem(video.pathToVideo, "video"));
            this.totalItems += 1;
            //console.log("video: " + video.pathToVideo);
          }
        }
      }
    }

    this.loadingPercentage = new BehaviorSubject<string>("0%");
  }

  itemLoaded() {
    this.itemsLoaded += 1;
    let perc = (this.itemsLoaded / this.totalItems) * 100;
    this.loadingPercentage.next(perc + "%");
  }
}

export class LoadingItem {
  itemPath: string;
  itemType: string;
  isLoaded: boolean;

  constructor(path: string, type: string) {
    this.itemPath = path;
    this.itemType = type;
    this.isLoaded = false;
  }
}
