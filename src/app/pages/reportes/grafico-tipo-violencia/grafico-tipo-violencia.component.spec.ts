import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTipoViolenciaComponent } from './grafico-tipo-violencia.component';

describe('GraficoTipoViolenciaComponent', () => {
  let component: GraficoTipoViolenciaComponent;
  let fixture: ComponentFixture<GraficoTipoViolenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoTipoViolenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoTipoViolenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
