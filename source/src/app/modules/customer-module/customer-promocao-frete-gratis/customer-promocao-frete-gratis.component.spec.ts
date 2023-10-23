import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPromocaoFreteGratisComponent } from './customer-promocao-frete-gratis.component';

describe('CustomerPromocaoFreteGratisComponent', () => {
  let component: CustomerPromocaoFreteGratisComponent;
  let fixture: ComponentFixture<CustomerPromocaoFreteGratisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPromocaoFreteGratisComponent]
    });
    fixture = TestBed.createComponent(CustomerPromocaoFreteGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
