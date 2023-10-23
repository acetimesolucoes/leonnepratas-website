import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCommonLayoutComponent } from './customer-common-layout.component';

describe('CustomerCommonLayoutComponent', () => {
  let component: CustomerCommonLayoutComponent;
  let fixture: ComponentFixture<CustomerCommonLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCommonLayoutComponent]
    });
    fixture = TestBed.createComponent(CustomerCommonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
