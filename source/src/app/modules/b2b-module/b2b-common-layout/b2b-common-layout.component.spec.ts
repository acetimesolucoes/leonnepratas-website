import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bCommonLayoutComponent } from './b2b-common-layout.component';

describe('B2bCommonLayoutComponent', () => {
  let component: B2bCommonLayoutComponent;
  let fixture: ComponentFixture<B2bCommonLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bCommonLayoutComponent]
    });
    fixture = TestBed.createComponent(B2bCommonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
