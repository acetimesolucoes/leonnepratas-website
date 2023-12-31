import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSectionComponent } from './action-section.component';

describe('ActionSectionComponent', () => {
  let component: ActionSectionComponent;
  let fixture: ComponentFixture<ActionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionSectionComponent]
    });
    fixture = TestBed.createComponent(ActionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
