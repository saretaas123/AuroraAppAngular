import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosAutoestimaProComponent } from './resultados-autoestima-pro.component';

describe('ResultadosAutoestimaProComponent', () => {
  let component: ResultadosAutoestimaProComponent;
  let fixture: ComponentFixture<ResultadosAutoestimaProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosAutoestimaProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosAutoestimaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
