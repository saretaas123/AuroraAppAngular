import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAutonomiaComponent } from './grafico-autonomia.component';

describe('GraficoAutonomiaComponent', () => {
  let component: GraficoAutonomiaComponent;
  let fixture: ComponentFixture<GraficoAutonomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoAutonomiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoAutonomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
