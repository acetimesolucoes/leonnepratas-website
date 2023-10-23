import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCartLayoutComponent } from './customer-cart-layout.component';

describe('CustomerCartLayoutComponent', () => {
  let component: CustomerCartLayoutComponent;
  let fixture: ComponentFixture<CustomerCartLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCartLayoutComponent]
    });
    fixture = TestBed.createComponent(CustomerCartLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
