import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaResultadosProAutonomiaComponent } from './tabla-resultados-pro-autonomia.component';

describe('TablaResultadosProAutonomiaComponent', () => {
  let component: TablaResultadosProAutonomiaComponent;
  let fixture: ComponentFixture<TablaResultadosProAutonomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaResultadosProAutonomiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaResultadosProAutonomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
