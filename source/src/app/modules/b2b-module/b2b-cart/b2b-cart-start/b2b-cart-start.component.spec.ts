import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bCartStartComponent } from './b2b-cart-start.component';

describe('B2bCartStartComponent', () => {
  let component: B2bCartStartComponent;
  let fixture: ComponentFixture<B2bCartStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bCartStartComponent]
    });
    fixture = TestBed.createComponent(B2bCartStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
