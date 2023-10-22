import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bAccountComponent } from './b2b-account.component';

describe('B2bAccountComponent', () => {
  let component: B2bAccountComponent;
  let fixture: ComponentFixture<B2bAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bAccountComponent]
    });
    fixture = TestBed.createComponent(B2bAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
