import { Injectable } from '@angular/core';
import { AdsImage } from '../models/adsImage';
import { Category } from '../models/category';
import { ClassifiedAds } from '../models/classied-ads';

@Injectable({
  providedIn: 'root',
}) //DI, singleton
export class ClassifiedAdsSeederService {
  //tách seed thành 1 method riêng, Class này chỉ dùng để crud services.
  ListClassiedAds: ClassifiedAds[] = [];
  getListClassifiedAds(): ClassifiedAds[] {
    return this.ListClassiedAds;
  }
  seed(): void {
    this.ListClassiedAds = [
      new ClassifiedAds(
        1,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/sh-1.jpg'),
          new AdsImage(2, '/assets/sh-2.jpg'),
          new AdsImage(3, '/assets/sh-3.jpg'),
        ],
        'Xe SH đời 2019 chính chủ màu xám nguyên zin, bs HCM, chạy 50.000km',
        80000000,
        'Ho Chi Minh',
        new Category(1, 'xe cộ'),
        new Date(),
        new Date(),
        'A. Hoàng',
        true
      ),
      new ClassifiedAds(
        2,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/sh-1.jpg'),
          new AdsImage(2, '/assets/sh-2.jpg'),
          new AdsImage(3, '/assets/sh-3.jpg'),
        ],
        'Xe SH đời 2019 chính chủ màu xám nguyên zin, bs HCM, chạy 50.000km',
        80000000,
        'Ho Chi Minh',
        new Category(1, 'xe cộ'),
        new Date(),
        new Date(),
        'A. Hoàng',
        true
      ),
    ];
  }
}
