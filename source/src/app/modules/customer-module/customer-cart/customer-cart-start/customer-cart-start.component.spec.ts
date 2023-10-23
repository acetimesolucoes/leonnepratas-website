import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCartStartComponent } from './customer-cart-start.component';

describe('CustomerCartStartComponent', () => {
  let component: CustomerCartStartComponent;
  let fixture: ComponentFixture<CustomerCartStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCartStartComponent]
    });
    fixture = TestBed.createComponent(CustomerCartStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
