import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { RespuestaMotivacionService} from 'src/app/services/auroraapi/RespuestasPsicologicas/motivacion.service';
import { RespuestaAutoestimaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autoestima.service';
import { RespuestaTomaDecionesService} from 'src/app/services/auroraapi/RespuestasPsicologicas/tomadecisiones.service';
import { RespuestaAutonomiaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autonomia.service';

@Component({
  selector: 'app-pretest',
  templateUrl: './pretest.component.html',
  styleUrls: ['./pretest.component.css']
})
export class PretestComponent implements OnInit {

  g_FromUser_PsicologoId: string = '1';
  g_FromUser_PacienteId: string = '1';

  //DATOS PACIENTE
  private ApiFullobjPacienteFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  public objPacienteFullInfo : any = {
    apellidoMaterno : '',
    apellidoPaterno: '',
    correo : '',
    creadoEn : '',
    creadoPor : '',
    direccionUbigeo : '',
    dni : '',
    fechaNacimiento : '',
    id : '',
    nombres : '',
    siendoAtendido : '',
    telefono : '',
    tipoViolencia : '',
    riesgo : '',
    anoDeEvaluacion : '',
    entidadProblema : '',
    modalidadAdministrativo : '',
  };

  //DATOS PACIENTES CON TODA SUS ENCUESTAS
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

   //MOTIVACION PRE
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

   objAPIRpta_objPacienteRespuestasCuestionarioMotivacionPreFullInfo : any =
   {

     resultadoPrecontemplacion: "",
     resultadoContemplacion: "",
     resultadoAccion: "",
     resultadoMantenimiento: ""

   };

     //AUTOESTIMA PRE
  objAPIRpta_Full6 : any =
  {
    msnj : '',
    rpta : {}
  };

  subeEstructuraApi4 : any =
  {
    respuestas :  { },
    significado : { },

  }

  objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPreFullInfo : any =
  {

    nivelDeAutoestima: "",
    sumaParaSiMismo: 0,
    sumaParaSocial: 0,
    sumaParaFamiliar: 0

  };

  //DECISIONES PRE
  objAPIRpta_Full8 : any =
  {
    msnj : '',
    rpta : {}
  };

  subeEstructuraApi6 : any =
  {
    respuestas :  { },
    significado : { },

  }

  objAPIRpta_objPacienteRespuestasCuestionarioTomaDecisionesPreFullInfo : any =
  {

    nivelTomaDeDecisiones: ""

  };

   //AUTONOMIA PRE
   objAPIRpta_Full4 : any =
   {
     msnj : '',
     rpta : {}
   };

   subeEstructuraApi2 : any =
   {
     respuestas :  { },
     significado : { },

   }

   objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPreFullInfo : any =
   {

     valorSensacionDeControlPositivo: 0,
     sensacionDeControlPositiva: "",
     valorSensacionDeControlNegativo: 0,
     sensacionDeControlNegativo: "",
     valorDeseoDeControl: 0,
     deseoDeControl: "",
     valorControlInterno: 0,
     controlInterno: "",
     valorControlExterno: 0,
     controlExterno: ""

   };


  constructor(
    private route: ActivatedRoute,
    private PacienteService: PacienteService,
    private CasoPacienteService : CasopacienteService,
    private RespuestaMotivacionService : RespuestaMotivacionService,
    private RespuestaAutoestimaService : RespuestaAutoestimaService,
    private RespuestaTomaDecionesService :RespuestaTomaDecionesService,
    private RespuestaAutonomiaService : RespuestaAutonomiaService,) { }

  ngOnInit(): void {
    this.g_FromUser_PacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.ObtenerDatosPaciente();
    this.PintarLosDatosDelPacienteEnLaPantallaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosMotivacionPreEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosAutoestimaPreEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosTomaDecionesPreEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosAutonomiaPreEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
  }

  ObtenerDatosPaciente()
  {
    this.PacienteService.GetPacienteFullInfoByCasoPacienteId(this.g_FromUser_PacienteId).subscribe(APIRpta =>
      {
        this.ApiFullobjPacienteFullInfo = APIRpta ;
        this.objPacienteFullInfo = this.ApiFullobjPacienteFullInfo.rpta;
        console.log(APIRpta);

      });
  }

  //PINTAR DATOS DE CUESTIONARIO SI ESTAN HECHOS O NO
  PintarLosDatosDelPacienteEnLaPantallaPrincipal(p_PacienteId : string)
  {
      this.CasoPacienteService.GetCasoPacienteById(p_PacienteId)
      .subscribe( APIRpta => {
        this.objAPIRpta_Full = APIRpta;
        this.objAPIRpta_objPacienteFullInfo = this.objAPIRpta_Full.rpta;
      });
  }

  //MOTIVACION PRE
  PintarLosDatosCuestionariosMotivacionPreEnLaPatanllaPrincipal(p_PacienteId : string)
  {
    this.RespuestaMotivacionService.APIGet_RespuestasExamenMotivacionPre(p_PacienteId)
    .subscribe(APIRpta2 => {
      this.objAPIRpta_Full2 = APIRpta2;
      this.subeEstructuraApi = this.objAPIRpta_Full2.rpta;
      this.objAPIRpta_objPacienteRespuestasCuestionarioMotivacionPreFullInfo = this.subeEstructuraApi.significado;

    });
  }

   //AUTOESTIMA PRE
   PintarLosDatosCuestionariosAutoestimaPreEnLaPatanllaPrincipal(p_PacienteId : string)
   {
     this.RespuestaAutoestimaService.APIGet_RespuestasExamenAutoestimaPre(p_PacienteId)
     .subscribe(APIRpta6 => {
       this.objAPIRpta_Full6 = APIRpta6;
       this.subeEstructuraApi4 = this.objAPIRpta_Full6.rpta;
       this.objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPreFullInfo = this.subeEstructuraApi4.significado;

     });
   }

  //TOMADECISIONES PRE
  PintarLosDatosCuestionariosTomaDecionesPreEnLaPatanllaPrincipal(p_PacienteId : string)
  {
    this.RespuestaTomaDecionesService.APIGet_RespuestasExamenTomaDecisionesPre(p_PacienteId)
    .subscribe(APIRpta8 => {
      this.objAPIRpta_Full8 = APIRpta8;
      this.subeEstructuraApi6 = this.objAPIRpta_Full8.rpta;
      this.objAPIRpta_objPacienteRespuestasCuestionarioTomaDecisionesPreFullInfo = this.subeEstructuraApi6.significado;


    });
  }

    //AUTONOMIA PRE
    PintarLosDatosCuestionariosAutonomiaPreEnLaPatanllaPrincipal(p_PacienteId : string)
    {
      this.RespuestaAutonomiaService.APIGet_RespuestasExamenAutonomiaPre(p_PacienteId)
      .subscribe(APIRpta4 => {
        this.objAPIRpta_Full4 = APIRpta4;
        this.subeEstructuraApi2 = this.objAPIRpta_Full4.rpta;
        this.objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPreFullInfo = this.subeEstructuraApi2.significado;

      });
    }


}
