import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCartComponent } from './navbar-cart.component';

describe('NavbarCartComponent', () => {
  let component: NavbarCartComponent;
  let fixture: ComponentFixture<NavbarCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarCartComponent]
    });
    fixture = TestBed.createComponent(NavbarCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
