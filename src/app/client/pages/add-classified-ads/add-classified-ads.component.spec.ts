import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassifiedAdsComponent } from './add-classified-ads.component';

describe('AddClassifiedAdsComponent', () => {
  let component: AddClassifiedAdsComponent;
  let fixture: ComponentFixture<AddClassifiedAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClassifiedAdsComponent]
    });
    fixture = TestBed.createComponent(AddClassifiedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
