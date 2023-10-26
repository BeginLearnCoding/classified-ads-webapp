import { Category } from '../core/models/category';

export class CategorySeedService {
  ListCategory: Category[] = [];
  seed(): Category[] {
    this.ListCategory = [
      new Category(1, 'Xe cộ'),
      new Category(2, 'Bất động sản'),
      new Category(3, 'Nhạc cụ'),
      new Category(4, 'Thiết bị di động'),
      new Category(5, 'Nội thất'),
    ];
    return this.ListCategory;
  }
}
