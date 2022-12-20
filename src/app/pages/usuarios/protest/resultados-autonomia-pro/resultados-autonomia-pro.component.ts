import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { RespuestaAutonomiaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autonomia.service'


@Component({
  selector: 'app-resultados-autonomia-pro',
  templateUrl: './resultados-autonomia-pro.component.html',
  styleUrls: ['./resultados-autonomia-pro.component.css']
})
export class ResultadosAutonomiaProComponent implements OnInit {

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

   //AUTONOMIA Post
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

  objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPostFullInfo : any =
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
    this.PintarTablasDeCuestionariosAutonomiaPostEnLaPantallaPrincipal(this.g_routeparam_CasoPacienteId);
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

  //AUTOESTIMA PRE
  PintarTablasDeCuestionariosAutonomiaPostEnLaPantallaPrincipal(p_CasoPacienteId : string)
  {
    this.RespuestaAutonomiaService.APIGet_RespuestasExamenAutonomiaPost(p_CasoPacienteId)
    .subscribe( APIRpta2 => {
      this.objAPIRpta_TablasRpta = APIRpta2;
      this.subeEstructuraApi = this.objAPIRpta_TablasRpta.rpta;
      this.objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPostFullInfo = this.subeEstructuraApi.significado;
    });
  }




}
