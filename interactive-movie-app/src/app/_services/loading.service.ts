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
  allLoaded: BehaviorSubject<boolean>;

  loadingPercentage: BehaviorSubject<string>;

  constructor() {
    this.loadingArray = [];
    this.totalItems = 0;
    this.itemsLoaded = 0;
    // all interactions from POV1
    this.allPovs = Interactions;
  }

  itemLoaded() {
    this.itemsLoaded += 1;
    let perc = (this.itemsLoaded / this.totalItems) * 100;
    if (perc === 100) {
      this.allLoaded.next(true);
    }
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
