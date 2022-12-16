import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaResultadosCuestionarioComponent } from './tabla-resultados-cuestionario.component';

describe('TablaResultadosCuestionarioComponent', () => {
  let component: TablaResultadosCuestionarioComponent;
  let fixture: ComponentFixture<TablaResultadosCuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaResultadosCuestionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaResultadosCuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
