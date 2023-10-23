import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashboardLayoutComponent } from './customer-dashboard-layout.component';

describe('CustomerDashboardLayoutComponent', () => {
  let component: CustomerDashboardLayoutComponent;
  let fixture: ComponentFixture<CustomerDashboardLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDashboardLayoutComponent]
    });
    fixture = TestBed.createComponent(CustomerDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
