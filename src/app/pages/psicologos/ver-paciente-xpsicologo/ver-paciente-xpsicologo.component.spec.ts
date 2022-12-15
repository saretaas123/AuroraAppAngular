import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPacienteXPsicologoComponent } from './ver-paciente-xpsicologo.component';

describe('VerPacienteXPsicologoComponent', () => {
  let component: VerPacienteXPsicologoComponent;
  let fixture: ComponentFixture<VerPacienteXPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPacienteXPsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPacienteXPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
