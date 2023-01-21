import { Component, OnInit } from '@angular/core';
import { RespuestaTomaDecionesService} from 'src/app/services/auroraapi/RespuestasPsicologicas/tomadecisiones.service'
import { ActivatedRoute } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-resultados-decisiones-pre',
  templateUrl: './resultados-decisiones-pre.component.html',
  styleUrls: ['./resultados-decisiones-pre.component.css']
})
export class ResultadosDecisionesPreComponent implements OnInit {

  g_routeparam_PsicologoId: string = '-2';
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

  //DECISIONES PRE
   objAPIRpta_Full2 : any =
   {
     msnj : '',
     rpta : {}
   };

  subeEstructuraApi : any =
  {
    respuestas :  { },
    significado : { },

  }

  objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPreFullInfo : any =
  {

    nivelTomaDeDecisiones: "-"

  };

   objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPreRespuestasFullInfo : any =
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
    this.g_routeparam_PsicologoId = this.router.url.split('/')[2];
    this.g_routeparam_CasoPacienteId = this.router.url.split('/')[4];
    this.g_routeparam_CasoPacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.PintarLosDatosDelPacienteEnLaPantallaPrincipal(this.g_routeparam_CasoPacienteId);
    this.PintarLasTablasCuestionariosDecionesPreEnLaPatanllaPrincipal(this.g_routeparam_CasoPacienteId);
    }


  constructor(
    private router:Router,
    private CasoPacienteService : CasopacienteService,
    private RespuestaTomaDecionesService : RespuestaTomaDecionesService,
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

   //MOTIVACION PRE
   PintarLasTablasCuestionariosDecionesPreEnLaPatanllaPrincipal(p_CasoPacienteId : string)
  {
    this.RespuestaTomaDecionesService.APIGet_RespuestasExamenTomaDecisionesPre(p_CasoPacienteId)
    .subscribe(APIRpta2 => {
      this.objAPIRpta_Full2 = APIRpta2;
      this.subeEstructuraApi = this.objAPIRpta_Full2.rpta;
      this.objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPreFullInfo = this.subeEstructuraApi.significado;
      this.objAPIRpta_objPacienteRespuestasCuestionarioDecisionesPreRespuestasFullInfo = this.subeEstructuraApi.respuestas;
    });
  }


}
