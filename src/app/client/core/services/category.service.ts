import { Inject, Injectable } from '@angular/core';
import { Category } from '../models/category';
import { CategorySeedService } from '../../SeedServices/category-seed.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //class này dùng để crud service, seed datab ở lớp khác
  categorySeedService: CategorySeedService = new CategorySeedService();

  constructor(categorySeedService: CategorySeedService) {
    this.categorySeedService = categorySeedService;
  }
  ListCategory: Category[] = [];
  getListCategory(): Category[] {
    this.ListCategory = this.categorySeedService.seed();
    return this.ListCategory;
  }
}
