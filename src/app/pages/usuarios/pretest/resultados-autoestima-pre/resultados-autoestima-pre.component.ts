import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { RespuestaAutoestimaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autoestima.service'




@Component({
  selector: 'app-resultados-autoestima-pre',
  templateUrl: './resultados-autoestima-pre.component.html',
  styleUrls: ['./resultados-autoestima-pre.component.css']
})
export class ResultadosAutoestimaPreComponent implements OnInit {

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

  //AUTOESTIMA PRE
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

 objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPreFullInfo : any =
 {

   resultadoPrecontemplacion: "Muy Bajo",
   resultadoContemplacion: "Muy Bajo",
   resultadoAccion: "Muy Bajo",
   resultadoMantenimiento: "Muy Bajo"

 };



  //AUTOESTIMA PRE RESPUESTAS
  objAPIRpta_Full3 : any =
  {
    msnj : '',
    rpta : {}
  };

  subeEstructuraApi3: any =
  {
    respuestas1 :  { },
    significado1 : { },

  }

  objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPreRespuestasFullInfo : any =
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
     p21: 0,
     p22: 0,
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
    this.PintarLosDatosCuestionariosAutoestimaPreEnLaPatanllaPrincipal(this.g_routeparam_CasoPacienteId);
    this.PintarLosDatosCuestionariosAutoestimaPreResultadosEnLaPatanllaPrincipal(this.g_routeparam_CasoPacienteId);
  }


  constructor(
    private CasoPacienteService : CasopacienteService,
    private RespuestaAutoestimaService : RespuestaAutoestimaService,
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

   //AUTOESTIMA PRE
  PintarLosDatosCuestionariosAutoestimaPreEnLaPatanllaPrincipal(p_PacienteId : string)
  {
    this.RespuestaAutoestimaService.APIGet_RespuestasExamenAutoestimaPre(p_PacienteId)
    .subscribe(APIRpta2 => {
      this.objAPIRpta_Full2 = APIRpta2;
      this.subeEstructuraApi = this.objAPIRpta_Full2.rpta;
      this.objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPreFullInfo = this.subeEstructuraApi.significado;
    });
  }

   //AUTOESTIMA PRE RESPUESTAS
   PintarLosDatosCuestionariosAutoestimaPreResultadosEnLaPatanllaPrincipal(p_PacienteId : string)
   {
       this.RespuestaAutoestimaService.APIGet_RespuestasExamenAutoestimaPre(p_PacienteId)
       .subscribe( APIRpta3 => {
        this.objAPIRpta_Full3 = APIRpta3;
        this.subeEstructuraApi3 = this.objAPIRpta_Full3.rpta;
        this.objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPreRespuestasFullInfo = this.subeEstructuraApi3.respuestas1;
       });
   }

  }
