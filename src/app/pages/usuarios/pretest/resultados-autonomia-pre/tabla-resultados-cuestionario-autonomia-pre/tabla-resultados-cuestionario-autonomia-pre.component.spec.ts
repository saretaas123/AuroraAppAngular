import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaResultadosCuestionarioAutonomiaPreComponent } from './tabla-resultados-cuestionario-autonomia-pre.component';

describe('TablaResultadosCuestionarioAutonomiaPreComponent', () => {
  let component: TablaResultadosCuestionarioAutonomiaPreComponent;
  let fixture: ComponentFixture<TablaResultadosCuestionarioAutonomiaPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaResultadosCuestionarioAutonomiaPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaResultadosCuestionarioAutonomiaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
