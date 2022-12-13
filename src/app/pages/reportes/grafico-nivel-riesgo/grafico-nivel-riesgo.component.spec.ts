import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoNivelRiesgoComponent } from './grafico-nivel-riesgo.component';

describe('GraficoNivelRiesgoComponent', () => {
  let component: GraficoNivelRiesgoComponent;
  let fixture: ComponentFixture<GraficoNivelRiesgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoNivelRiesgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoNivelRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
