import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bPurchasesComponent } from './b2b-purchases.component';

describe('B2bPurchasesComponent', () => {
  let component: B2bPurchasesComponent;
  let fixture: ComponentFixture<B2bPurchasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bPurchasesComponent]
    });
    fixture = TestBed.createComponent(B2bPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
