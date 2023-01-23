import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import * as XLSX from 'xlsx';

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
      postTestControlExterno : "0",
      postTestControlInterno : "0",
      postTestDeseoDeControl : "0",
      postTestMantenimiento : "0",
      postTestPrecontemplacion : "0",
      postTestSensacionDeControlNegativo : "0",
      postTestSensacionDeControlPositivo : "0",
      preTestAccion : "0",
      preTestAutoestima : "0",
      preTestAutoestimaFamiliar : "0",
      preTestAutoestimaSiMismo : "0",
      preTestAutoestimaSocial : "0",
      preTestCapacidadTomaDecisiones : "0",
      preTestContemplacion : "0",
      preTestControlExterno : "0",
      preTestControlInterno : "0",
      preTestDeseoDeControl : "0",
      preTestMantenimiento : "0",
      preTestPrecontemplacion : "0",
      preTestSensacionDeControlNegativo : "0",
      preTestSensacionDeControlPositivo : "0"
    }]
  };

  ngOnInit(): void {
    this.out_p_PsicologoId = this.router.url.split('/')[2];
    this.API_TraerDatos();
  }

  constructor(
    private CasopacienteService : CasopacienteService,
    private router: Router,
    private route: ActivatedRoute)
    {
      this.CasopacienteService.listen().subscribe((m:any) => {
        this.API_TraerDatos();
      })
    }

  API_TraerDatos()
  {
    this.CasopacienteService.GetCasoPacienteByPsicologoId(this.out_p_PsicologoId).subscribe(APIrpta => {

      this.ApiRptaValidadorDeVacios = APIrpta;
      if(this.ApiRptaValidadorDeVacios.rpta.length === 0)
      {
        this.ApiRptaFullTablaPacientes= {
          mnsj: 'No posee Pacientes',
          rpta : null
        };

      }else{
        this.ApiRptaFullTablaPacientes = APIrpta;
      }


    });
  }


  public ApiRptaValidadorDeVacios : any = {
    mnsj: '',
    rpta : [{

    }]}
}
