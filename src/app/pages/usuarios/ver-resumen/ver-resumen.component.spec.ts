import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerResumenComponent } from './ver-resumen.component';

describe('VerResumenComponent', () => {
  let component: VerResumenComponent;
  let fixture: ComponentFixture<VerResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
