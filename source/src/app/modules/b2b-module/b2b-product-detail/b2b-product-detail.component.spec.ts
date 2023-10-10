import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bProductDetailComponent } from './b2b-product-detail.component';

describe('B2bProductDetailComponent', () => {
  let component: B2bProductDetailComponent;
  let fixture: ComponentFixture<B2bProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bProductDetailComponent]
    });
    fixture = TestBed.createComponent(B2bProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
