import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { LoadingItem, LoadingService } from 'src/app/_services/loading.service';

@Component({
  selector: 'app-movie-loading-item',
  templateUrl: './movie-loading-item.component.html',
  styleUrls: ['./movie-loading-item.component.scss'],
})
export class MovieLoadingItemComponent implements OnInit, AfterViewInit {
  @Input() loadingItem: LoadingItem;

  constructor(public loadingService: LoadingService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadingService.itemLoaded();
  }
}
