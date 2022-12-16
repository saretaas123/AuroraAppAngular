import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosMotivacionProComponent } from './resultados-motivacion-pro.component';

describe('ResultadosMotivacionProComponent', () => {
  let component: ResultadosMotivacionProComponent;
  let fixture: ComponentFixture<ResultadosMotivacionProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosMotivacionProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosMotivacionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
