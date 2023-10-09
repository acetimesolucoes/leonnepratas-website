import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bPoliticasDeGarantiaComponent } from './b2b-politicas-de-garantia.component';

describe('B2bPoliticasDeGarantiaComponent', () => {
  let component: B2bPoliticasDeGarantiaComponent;
  let fixture: ComponentFixture<B2bPoliticasDeGarantiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bPoliticasDeGarantiaComponent]
    });
    fixture = TestBed.createComponent(B2bPoliticasDeGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
