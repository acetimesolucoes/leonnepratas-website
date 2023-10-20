import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bCartLayoutComponent } from './b2b-cart-layout.component';

describe('B2bCartLayoutComponent', () => {
  let component: B2bCartLayoutComponent;
  let fixture: ComponentFixture<B2bCartLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bCartLayoutComponent]
    });
    fixture = TestBed.createComponent(B2bCartLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
