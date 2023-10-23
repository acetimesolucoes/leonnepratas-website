import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPoliticasDeTrocaComponent } from './customer-politicas-de-troca.component';

describe('CustomerPoliticasDeTrocaComponent', () => {
  let component: CustomerPoliticasDeTrocaComponent;
  let fixture: ComponentFixture<CustomerPoliticasDeTrocaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPoliticasDeTrocaComponent]
    });
    fixture = TestBed.createComponent(CustomerPoliticasDeTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
