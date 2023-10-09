import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bPoliticasDeTrocaComponent } from './b2b-politicas-de-troca.component';

describe('B2bPoliticasDeTrocaComponent', () => {
  let component: B2bPoliticasDeTrocaComponent;
  let fixture: ComponentFixture<B2bPoliticasDeTrocaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bPoliticasDeTrocaComponent]
    });
    fixture = TestBed.createComponent(B2bPoliticasDeTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
