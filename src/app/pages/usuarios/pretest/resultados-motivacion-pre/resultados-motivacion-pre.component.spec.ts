import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosMotivacionPreComponent } from './resultados-motivacion-pre.component';

describe('ResultadosMotivacionPreComponent', () => {
  let component: ResultadosMotivacionPreComponent;
  let fixture: ComponentFixture<ResultadosMotivacionPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosMotivacionPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosMotivacionPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
