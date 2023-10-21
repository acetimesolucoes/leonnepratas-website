import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bAuthLayoutComponent } from './b2b-auth-layout.component';

describe('B2bAuthLayoutComponent', () => {
  let component: B2bAuthLayoutComponent;
  let fixture: ComponentFixture<B2bAuthLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bAuthLayoutComponent]
    });
    fixture = TestBed.createComponent(B2bAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
