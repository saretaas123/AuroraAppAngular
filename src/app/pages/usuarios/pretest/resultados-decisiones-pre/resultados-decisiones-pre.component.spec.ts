import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosDecisionesPreComponent } from './resultados-decisiones-pre.component';

describe('ResultadosDecisionesPreComponent', () => {
  let component: ResultadosDecisionesPreComponent;
  let fixture: ComponentFixture<ResultadosDecisionesPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosDecisionesPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosDecisionesPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
