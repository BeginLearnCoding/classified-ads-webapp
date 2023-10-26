import { AdsImage } from './adsImage';
import { Category } from './category';

export class ClassifiedAds {
  id: number;
  title: string;
  adsImages: AdsImage[];
  description: string;
  price?: number;
  location?: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  byUser: string;
  status: boolean;
  constructor(
    id: number,
    title: string,
    adsImages: AdsImage[],
    description: string,
    price: number,
    location: string,
    category: Category,
    createAt: Date,
    updateAt: Date,
    byUser: string,
    status: boolean
  ) {
    this.id = id;
    this.title = title;
    this.adsImages = adsImages;
    this.description = description;
    this.price = price;
    this.location = location;
    this.category = category;
    this.createdAt = createAt;
    this.updatedAt = updateAt;
    this.byUser = byUser;
    this.status = status;
  }
}
