import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPoliticasDeGarantiaComponent } from './customer-politicas-de-garantia.component';

describe('CustomerPoliticasDeGarantiaComponent', () => {
  let component: CustomerPoliticasDeGarantiaComponent;
  let fixture: ComponentFixture<CustomerPoliticasDeGarantiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPoliticasDeGarantiaComponent]
    });
    fixture = TestBed.createComponent(CustomerPoliticasDeGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
