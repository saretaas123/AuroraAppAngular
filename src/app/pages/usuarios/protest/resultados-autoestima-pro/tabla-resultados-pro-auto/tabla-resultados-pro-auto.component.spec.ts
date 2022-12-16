import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaResultadosProAutoComponent } from './tabla-resultados-pro-auto.component';

describe('TablaResultadosProAutoComponent', () => {
  let component: TablaResultadosProAutoComponent;
  let fixture: ComponentFixture<TablaResultadosProAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaResultadosProAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaResultadosProAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
