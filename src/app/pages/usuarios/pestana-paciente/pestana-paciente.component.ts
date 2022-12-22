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
      psicologoId : '0',
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
      pacienteAnoDeEvaluacion : '',
      postTestAccion : "0",
      postTestAutoestima : "0",
      postTestAutoestimaFamiliar : "0",
      postTestAutoestimaSiMismo : "0",
      postTestAutoestimaSocial : "0",
      postTestCapacidadTomaDecisiones : "0",
      postTestContemplacion : "0",
      postTestControlExterno : "3",
      postTestControlInterno : "3",
      postTestDeseoDeControl : "21",
      postTestMantenimiento : "0",
      postTestPrecontemplacion : "0",
      postTestSensacionDeControlNegativo : "18",
      postTestSensacionDeControlPositivo : "34",
      preTestAccion : "10",
      preTestAutoestima : "0",
      preTestAutoestimaFamiliar : "0",
      preTestAutoestimaSiMismo : "0",
      preTestAutoestimaSocial : "0",
      preTestCapacidadTomaDecisiones : "24",
      preTestContemplacion : "10",
      preTestControlExterno : "4",
      preTestControlInterno : "5",
      preTestDeseoDeControl : "19",
      preTestMantenimiento : "10",
      preTestPrecontemplacion : "10",
      preTestSensacionDeControlNegativo : "14",
      preTestSensacionDeControlPositivo : "24"
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
      console.log("APIrpta:",APIrpta);
    });
  }


}
