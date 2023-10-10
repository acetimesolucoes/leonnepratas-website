import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProductItensComponent } from './carousel-product-itens.component';

describe('CarouselProductItensComponent', () => {
  let component: CarouselProductItensComponent;
  let fixture: ComponentFixture<CarouselProductItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselProductItensComponent]
    });
    fixture = TestBed.createComponent(CarouselProductItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
