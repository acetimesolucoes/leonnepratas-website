import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bPoliticasDePrivacidadeComponent } from './b2b-politicas-de-privacidade.component';

describe('B2bPoliticasDePrivacidadeComponent', () => {
  let component: B2bPoliticasDePrivacidadeComponent;
  let fixture: ComponentFixture<B2bPoliticasDePrivacidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bPoliticasDePrivacidadeComponent]
    });
    fixture = TestBed.createComponent(B2bPoliticasDePrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
