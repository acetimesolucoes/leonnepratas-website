import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bProductCardComponent } from './b2b-product-card.component';

describe('B2bProductCardComponent', () => {
  let component: B2bProductCardComponent;
  let fixture: ComponentFixture<B2bProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bProductCardComponent]
    });
    fixture = TestBed.createComponent(B2bProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
