import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bSigninComponent } from './b2b-signin.component';

describe('B2bSigninComponent', () => {
  let component: B2bSigninComponent;
  let fixture: ComponentFixture<B2bSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bSigninComponent]
    });
    fixture = TestBed.createComponent(B2bSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
