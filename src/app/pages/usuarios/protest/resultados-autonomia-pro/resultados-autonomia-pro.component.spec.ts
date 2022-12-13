import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosAutonomiaProComponent } from './resultados-autonomia-pro.component';

describe('ResultadosAutonomiaProComponent', () => {
  let component: ResultadosAutonomiaProComponent;
  let fixture: ComponentFixture<ResultadosAutonomiaProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosAutonomiaProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosAutonomiaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
