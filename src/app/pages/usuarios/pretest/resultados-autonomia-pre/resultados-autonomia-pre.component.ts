import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { RespuestaAutonomiaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autonomia.service'


@Component({
  selector: 'app-resultados-autonomia-pre',
  templateUrl: './resultados-autonomia-pre.component.html',
  styleUrls: ['./resultados-autonomia-pre.component.css']
})
export class ResultadosAutonomiaPreComponent implements OnInit {

  g_routeparam_CasoPacienteId: string = '0';

  //DATOS PACIENTES
  objAPIRpta_Full : any =
  {
    msnj : '',
    rpta : {}
  };

  objAPIRpta_objPacienteFullInfo : any =
  {
    examenPreTestAutoestimaCompletado : false,
    examenPreTestAutonomiaCompletado : false,
    examenPreTestMotivacionAlCambioCompletado : false,
    examenPreTestTomaDecisionCompletado : false,
    examenPostTestAutoestimaCompletado : false,
    examenPostTestAutonomiaCompletado : false,
    examenPostTestMotivacionAlCambioCompletado : false,
    examenPostTestTomaDecisionCompletado : false,
    pacienteAnoDeEvaluacion : '',
    pacienteApellidoMaterno : '',
    pacienteApellidoPaterno : '',
    pacienteCorreo : '',
    pacienteDireccion : '',
    pacienteDni : '',
    pacienteFechaNacimiento : '',
    pacienteId : '',
    pacienteNombres : '',
    pacienteRiesgo : '',
    pacienteTipoViolencia : '',
    pacienteTelefono : '',
    psicologoId : '',
  };

   //AUTONOMIA PRE
   objAPIRpta_TablasRpta : any =
   {
     msnj : '',
     rpta : {}
   };

  subeEstructuraApi : any =
  {
    respuestas :  { },
    significado : { },

  }

  objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPreFullInfo : any =
  {
    valorSensacionDeControlPositivo: 0,
    sensacionDeControlPositiva: "No Posee Sensacion De Control Positiva",
    valorSensacionDeControlNegativo: 0,
    sensacionDeControlNegativo: "No Posee Sensacion De Control Negativo",
    valorDeseoDeControl: 0,
    deseoDeControl: "No Posee Deseo De Control",
    valorControlInterno: 0,
    controlInterno: "No Posee Control Interno",
    valorControlExterno: 0,
    controlExterno: "No Posee Control Externo"

  };



  ngOnInit(): void {
    this.g_routeparam_CasoPacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.PintarLosDatosDelPacienteEnLaPantallaPrincipal(this.g_routeparam_CasoPacienteId);
    this.PintarTablasDeCuestionariosAutonomiaPreEnLaPantallaPrincipal(this.g_routeparam_CasoPacienteId);
  }

  constructor(
    private CasoPacienteService : CasopacienteService,
    private RespuestaAutonomiaService : RespuestaAutonomiaService,
    private route: ActivatedRoute
  ) { }

   //DATOS PACIENTES
   PintarLosDatosDelPacienteEnLaPantallaPrincipal(p_CasoPacienteId : string)
   {
       this.CasoPacienteService.GetCasoPacienteById(p_CasoPacienteId)
       .subscribe( APIRpta => {
         this.objAPIRpta_Full = APIRpta;
         this.objAPIRpta_objPacienteFullInfo = this.objAPIRpta_Full.rpta;
       });
   }

   //AUTONOMIA PRE
   PintarTablasDeCuestionariosAutonomiaPreEnLaPantallaPrincipal(p_CasoPacienteId : string)
   {
     this.RespuestaAutonomiaService.APIGet_RespuestasExamenAutonomiaPre(p_CasoPacienteId)
     .subscribe( APIRpta2 => {
       this.objAPIRpta_TablasRpta = APIRpta2;
       this.subeEstructuraApi = this.objAPIRpta_TablasRpta.rpta;
       this.objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPreFullInfo = this.subeEstructuraApi.significado;
     });
   }

}
