import { Component, OnInit } from '@angular/core';
import { ClassifiedAds } from '../../core/models/classied-ads';
import { ClassifiedAdsSeederService } from '../../core/services/classied-ads-seed.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
/* */
export class IndexComponent implements OnInit {
  ListClassifiedAds: ClassifiedAds[] = [];

  constructor(
    private readonly classiedAdsSeederService: ClassifiedAdsSeederService
  ) {}

  ngOnInit(): void {
    this.classiedAdsSeederService.seed();
    this.ListClassifiedAds =
      this.classiedAdsSeederService.getListClassifiedAds();
  }
}
