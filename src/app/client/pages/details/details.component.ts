import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassifiedAds } from '../../core/models/classied-ads';
import { ClassifiedAdsSeederService } from '../../core/services/classied-ads-seed.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  classifiedAds!: ClassifiedAds;
  
  classifiedAdsId = 0;
  constructor(  private readonly classiedAdsSeederService: ClassifiedAdsSeederService) {
    this.classifiedAdsId = Number(this.route.snapshot.params['id']);
  }
  getClassifiedAdsById(classifiedAdsId:number){
      return this.classiedAdsSeederService.getClassifiedAdsById(classifiedAdsId)
  }
  ngOnInit(): void {

    this.classifiedAds = this.getClassifiedAdsById(this.classifiedAdsId)
  }

}
