import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDecisionesComponent } from './grafico-decisiones.component';

describe('GraficoDecisionesComponent', () => {
  let component: GraficoDecisionesComponent;
  let fixture: ComponentFixture<GraficoDecisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoDecisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoDecisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
