import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bPromocaoFreteGratisComponent } from './b2b-promocao-frete-gratis.component';

describe('B2BPromocaoFreteGratisComponent', () => {
  let component: B2bPromocaoFreteGratisComponent;
  let fixture: ComponentFixture<B2bPromocaoFreteGratisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bPromocaoFreteGratisComponent]
    });
    fixture = TestBed.createComponent(B2bPromocaoFreteGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
