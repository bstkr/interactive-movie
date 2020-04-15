import { Component, OnInit, Input } from "@angular/core";
import { InteractionService } from "src/app/_services/interaction.service";

@Component({
  selector: "app-timeline-object",
  templateUrl: "./timeline-object.component.html",
  styleUrls: ["./timeline-object.component.scss"],
})
export class TimelineObjectComponent implements OnInit {
  @Input() objectName: string;

  objectClicked: boolean;

  constructor(public interactionService: InteractionService) {}

  ngOnInit() {
    console.log(this.objectName);
    this.interactionService
      .isInteractionClicked(this.objectName)
      .subscribe((s) => (this.objectClicked = s));
  }

  ifUnterhose() {
    const unterhose = document.getElementById("a");

    if(this.objectName == "Unterhose" && this.objectClicked) {
      return true;
    }  
  }

  ifBier() {
    const bier = document.getElementById("b");

    if(this.objectName == "Bier" && this.objectClicked) {
      return true;
    }  
  }

  ifJacke() {
    const bier = document.getElementById("c");

    if(this.objectName == "Jacke" && this.objectClicked) {
      return true;
    }  
  }

  ifEinkaufszettel() {
    const bier = document.getElementById("d");

    if(this.objectName == "Einkaufszettel" && this.objectClicked) {
      return true;
    }  
  }

  ifHandy() {
    const bier = document.getElementById("e");

    if(this.objectName == "Handy" && this.objectClicked) {
      return true;
    }  
  }

  ifComputer() {
    const bier = document.getElementById("f");

    if(this.objectName == "Computer" && this.objectClicked) {
      return true;
    }  
  }

  ifZeitung() {
    const bier = document.getElementById("g");

    if(this.objectName == "Zeitung" && this.objectClicked) {
      return true;
    }  
  }

  ifNummer() {
    const bier = document.getElementById("h");

    if(this.objectName == "Nummer" && this.objectClicked) {
      return true;
    }  
  }
}
