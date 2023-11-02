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
  addClassifiedAds(classied: ClassifiedAds)
  {
    classied.id = new Date().getTime();
  }
  getClassifiedAdsById (id: number){
    return this.ListClassiedAds[id];
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
        'Xe BWM cần bán',
        [
          new AdsImage(1, '/assets/bwm-1.jpg'),
          new AdsImage(2, '/assets/bwm-2.jpg'),
          new AdsImage(3, '/assets/bwm-3.jpg'),
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
        3,
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
        4,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/honda-brio-1.jpg'),
          new AdsImage(2, '/assets/honda-brio-2.jpg'),
          new AdsImage(3, '/assets/honda-brio-3.jpg'),
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
        5,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/samsung-tab-1.jpg'),
          new AdsImage(2, '/assets/samsung-tab-2.jpg'),
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
        6,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/samsung-tab-2.jpg'),
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
        7,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/samsung-tab-2.jpg'),
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
        8,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/merc-white-2.jpg'),
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
        9,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/merc-white-1.jpg'),
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
        10,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/merc-white-3.jpg'),
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
        11,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/merc-white-1.jpg'),
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
        12,
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
        13,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/honda-brio-3.jpg'),
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
        14,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/honda-brio-2.jpg'),
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
        15,
        'Xe SH cần bán',
        [
          new AdsImage(1, '/assets/honda-brio-1.jpg'),
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
