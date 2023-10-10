import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bHomeComponent } from './b2b-home.component';

describe('B2bHomeComponent', () => {
  let component: B2bHomeComponent;
  let fixture: ComponentFixture<B2bHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bHomeComponent]
    });
    fixture = TestBed.createComponent(B2bHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
