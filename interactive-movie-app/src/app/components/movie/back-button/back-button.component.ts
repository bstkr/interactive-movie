import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})

export class BackButtonComponent implements OnInit {

  showPopup = false;

  constructor() { 
  }

  ngOnInit() {
  }

  popup() {
     const popupElement = document.getElementById('popup');
     popupElement.style.display = 'flex';
  }

  close(){
    const popupElement = document.getElementById('popup');
     popupElement.style.display = 'none';
  }

  resetData(){
    localStorage.clear();
  }
}
