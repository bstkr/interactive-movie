import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService, LoadingItem } from 'src/app/_services/loading.service';

@Component({
  selector: 'app-movie-loading-screen',
  templateUrl: './movie-loading-screen.component.html',
  styleUrls: ['./movie-loading-screen.component.scss'],
})
export class MovieLoadingScreenComponent implements OnInit {
  loadingArray: LoadingItem[];

  loadingPercentage: string;
  allLoaded = false;

  constructor(public router: Router, public loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingArray = this.loadingService.loadingArray;
    this.loadingService.loadingPercentage.subscribe(
      (s) => (this.loadingPercentage = s)
    );
    this.loadingService.allLoaded.subscribe((s) => {
      setTimeout((_) => {
        this.allLoaded = s;
      }, 2000);
    });
  }

  continue() {
    this.router.navigate(['/movie', 'pov1']);
  }
}
