import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bSignupComponent } from './b2b-signup.component';

describe('B2bSignupComponent', () => {
  let component: B2bSignupComponent;
  let fixture: ComponentFixture<B2bSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bSignupComponent]
    });
    fixture = TestBed.createComponent(B2bSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
