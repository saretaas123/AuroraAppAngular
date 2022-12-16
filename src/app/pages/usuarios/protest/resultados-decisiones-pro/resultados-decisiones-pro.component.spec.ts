import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosDecisionesProComponent } from './resultados-decisiones-pro.component';

describe('ResultadosDecisionesProComponent', () => {
  let component: ResultadosDecisionesProComponent;
  let fixture: ComponentFixture<ResultadosDecisionesProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosDecisionesProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosDecisionesProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
