import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHomeIconsComponent } from './display-home-icons.component';

describe('DisplayHomeIconsComponent', () => {
  let component: DisplayHomeIconsComponent;
  let fixture: ComponentFixture<DisplayHomeIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayHomeIconsComponent]
    });
    fixture = TestBed.createComponent(DisplayHomeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
