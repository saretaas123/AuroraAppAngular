import { Component, OnInit } from '@angular/core';
import { RespuestaTomaDecionesService} from 'src/app/services/auroraapi/RespuestasPsicologicas/tomadecisiones.service'
import { ActivatedRoute } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';




@Component({
  selector: 'app-resultados-decisiones-pro',
  templateUrl: './resultados-decisiones-pro.component.html',
  styleUrls: ['./resultados-decisiones-pro.component.css']
})
export class ResultadosDecisionesProComponent implements OnInit {

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

//DECISIONES POST
objAPIRptaTabla : any =
 {
   msnj : '',
   rpta : {}
 };

subeEstructuraApi : any =
{
  respuestas :  { },
  significado : { },

}

objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPostFullInfo : any =
{

  nivelTomaDeDecisiones: "-"

};

 objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPostRespuestasFullInfo : any =
 {

    casoPacienteId: 2,
    p01: 0,
    p02: 0,
    p03: 0,
    p04: 0,
    p05: 0,
    p06: 0,
    p07: 0,
    p08: 0,
    p09: 0,
    p10: 0,
    p11: 0,
    p12: 0,
    p13: 0,
    p14: 0,
    p15: 0,
    p16: 0,
    p17: 0,
    p18: 0,
    p19: 0,
    p20: 0,
    id: 0,
    creadoEn: null,
    creadoPor: null,
    editadoEn: null,
    editadoPor: null,
    estaEliminado: false

 };

 ngOnInit(): void {
  this.g_routeparam_CasoPacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.PintarLosDatosDelPacienteEnLaPantallaPrincipal(this.g_routeparam_CasoPacienteId);
    this.PintarLasTablasCuestionariosDecionesPostEnLaPatanllaPrincipal(this.g_routeparam_CasoPacienteId);
}

  constructor(
    private CasoPacienteService : CasopacienteService,
    private RespuestaTomaDecionesService : RespuestaTomaDecionesService,
    private route: ActivatedRoute
  ) { }

     //DATOS PACIENTES
     PintarLosDatosDelPacienteEnLaPantallaPrincipal(p_PacienteId : string)
     {
         this.CasoPacienteService.GetCasoPacienteById(p_PacienteId)
         .subscribe( APIRpta => {
           this.objAPIRpta_Full = APIRpta;
           this.objAPIRpta_objPacienteFullInfo = this.objAPIRpta_Full.rpta;
         });
     }

     //MOTIVACION POST
     PintarLasTablasCuestionariosDecionesPostEnLaPatanllaPrincipal(p_PacienteId : string)
    {
      this.RespuestaTomaDecionesService.APIGet_RespuestasExamenTomaDecisionesPost(p_PacienteId)
      .subscribe(APIRpta2 => {
        this.objAPIRptaTabla = APIRpta2;
        this.subeEstructuraApi = this.objAPIRptaTabla.rpta;
        this.objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPostFullInfo = this.subeEstructuraApi.significado;
        this.objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPostRespuestasFullInfo = this.subeEstructuraApi.respuestas;
      });
    }

}
