import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bCategoryComponent } from './b2b-category.component';

describe('B2bCategoryComponent', () => {
  let component: B2bCategoryComponent;
  let fixture: ComponentFixture<B2bCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bCategoryComponent]
    });
    fixture = TestBed.createComponent(B2bCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
