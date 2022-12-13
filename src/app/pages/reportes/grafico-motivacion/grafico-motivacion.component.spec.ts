import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMotivacionComponent } from './grafico-motivacion.component';

describe('GraficoMotivacionComponent', () => {
  let component: GraficoMotivacionComponent;
  let fixture: ComponentFixture<GraficoMotivacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoMotivacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoMotivacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
