import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPaginationComponent } from './index-pagination.component';

describe('IndexPaginationComponent', () => {
  let component: IndexPaginationComponent;
  let fixture: ComponentFixture<IndexPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexPaginationComponent]
    });
    fixture = TestBed.createComponent(IndexPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
