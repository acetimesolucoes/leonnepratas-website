import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoriesListComponent } from './home-categories-list.component';

describe('HomeCategoriesListComponent', () => {
  let component: HomeCategoriesListComponent;
  let fixture: ComponentFixture<HomeCategoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCategoriesListComponent]
    });
    fixture = TestBed.createComponent(HomeCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
