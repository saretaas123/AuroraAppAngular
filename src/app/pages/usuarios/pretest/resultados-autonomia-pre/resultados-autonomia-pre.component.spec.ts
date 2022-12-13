import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosAutonomiaPreComponent } from './resultados-autonomia-pre.component';

describe('ResultadosAutonomiaPreComponent', () => {
  let component: ResultadosAutonomiaPreComponent;
  let fixture: ComponentFixture<ResultadosAutonomiaPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosAutonomiaPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosAutonomiaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
