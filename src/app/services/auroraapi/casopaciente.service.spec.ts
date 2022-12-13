import { TestBed } from '@angular/core/testing';

import { CasopacienteService } from './casopaciente.service';

describe('CasopacienteService', () => {
  let service: CasopacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasopacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
