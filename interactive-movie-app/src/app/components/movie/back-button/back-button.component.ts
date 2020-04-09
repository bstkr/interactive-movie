import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})

export class BackButtonComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  popup() {
     document.querySelector(".popup").style.display = "flex";
  }

  close(){
    document.querySelector(".popup").style.display = "none";
  }
}
