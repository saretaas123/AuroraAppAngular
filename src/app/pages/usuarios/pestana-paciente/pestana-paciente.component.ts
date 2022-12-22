import { Component, OnInit } from '@angular/core';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';

@Component({
  selector: 'app-pestana-paciente',
  templateUrl: './pestana-paciente.component.html',
  styleUrls: ['./pestana-paciente.component.css']
})
export class PestanaPacienteComponent implements OnInit {

  public out_p_PsicologoId : string = '1';


  public ApiRptaFullTablaPacientes : any = {
    mnsj: '',
    rpta : [{
      casoPacienteId : '0',
      pacienteId : '0',
      examenPreTestAutoestimaCompletado: false,
      examenPreTestAutonomiaCompletado: false,
      examenPreTestMotivacionAlCambioCompletado: false,
      examenPreTestTomaDecisionCompletado: false,
      examenPostTestAutoestimaCompletado: false,
      examenPostTestAutonomiaCompletado: false,
      examenPostTestMotivacionAlCambioCompletado: false,
      examenPostTestTomaDecisionCompletado: false,
      pacienteApellidoMaterno: '',
      pacienteApellidoPaterno:'',
      pacienteDni:'',
      pacienteFechaNacimiento : 0,
      pacienteNombres : '',
      pacienteTipoViolencia : '',
      pacienteRiesgo : '',
      pacienteAnoDeEvaluacion : ''
    }]
  };

  ngOnInit(): void {
    this.API_TraerDatos();
  }

  constructor(
    private CasopacienteService : CasopacienteService) { }


  API_TraerDatos()
  {
    this.CasopacienteService.GetCasoPacienteByPsicologoId(this.out_p_PsicologoId).subscribe(APIrpta => {
      this.ApiRptaFullTablaPacientes = APIrpta;
    });
  }


}
