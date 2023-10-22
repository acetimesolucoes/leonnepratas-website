import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bDashboardLayoutComponent } from './b2b-dashboard-layout.component';

describe('B2bDashboardLayoutComponent', () => {
  let component: B2bDashboardLayoutComponent;
  let fixture: ComponentFixture<B2bDashboardLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bDashboardLayoutComponent]
    });
    fixture = TestBed.createComponent(B2bDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
