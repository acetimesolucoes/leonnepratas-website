import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPoliticasDePrivacidadeComponent } from './customer-politicas-de-privacidade.component';

describe('CustomerPoliticasDePrivacidadeComponent', () => {
  let component: CustomerPoliticasDePrivacidadeComponent;
  let fixture: ComponentFixture<CustomerPoliticasDePrivacidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPoliticasDePrivacidadeComponent]
    });
    fixture = TestBed.createComponent(CustomerPoliticasDePrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
