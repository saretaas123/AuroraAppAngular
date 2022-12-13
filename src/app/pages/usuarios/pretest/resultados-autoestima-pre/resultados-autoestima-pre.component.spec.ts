import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosAutoestimaPreComponent } from './resultados-autoestima-pre.component';

describe('ResultadosAutoestimaPreComponent', () => {
  let component: ResultadosAutoestimaPreComponent;
  let fixture: ComponentFixture<ResultadosAutoestimaPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosAutoestimaPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosAutoestimaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
