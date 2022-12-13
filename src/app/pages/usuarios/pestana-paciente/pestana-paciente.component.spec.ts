import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestanaPacienteComponent } from './pestana-paciente.component';

describe('PestanaPacienteComponent', () => {
  let component: PestanaPacienteComponent;
  let fixture: ComponentFixture<PestanaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PestanaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestanaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
