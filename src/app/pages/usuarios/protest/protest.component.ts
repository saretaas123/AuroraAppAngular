import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { RespuestaMotivacionService} from 'src/app/services/auroraapi/RespuestasPsicologicas/motivacion.service';
import { RespuestaAutoestimaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autoestima.service';
import { RespuestaAutonomiaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autonomia.service';
import { RespuestaTomaDecionesService} from 'src/app/services/auroraapi/RespuestasPsicologicas/tomadecisiones.service';

@Component({
  selector: 'app-protest',
  templateUrl: './protest.component.html',
  styleUrls: ['./protest.component.css']
})
export class ProtestComponent implements OnInit {

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

   //MOTIVACION PRO
   objAPIRpta_Full3 : any =
   {
     msnj : '',
     rpta : {}
   };

   subeEstructuraApi1 : any =
   {
     respuestas :  { },
     significado : { },

   }

   objAPIRpta_objPacienteRespuestasCuestionarioMotivacionPostFullInfo : any =
   {

     resultadoPrecontemplacion: "",
     resultadoContemplacion: "",
     resultadoAccion: "",
     resultadoMantenimiento: ""

   };

    //AUTOESTIMA POST
    objAPIRpta_Full7 : any =
    {
      msnj : '',
      rpta : {}
    };

    subeEstructuraApi5 : any =
    {
      respuestas :  { },
      significado : { },

    }

    objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPostFullInfo : any =
    {

     nivelDeAutoestima: "",
     sumaParaSiMismo: 0,
     sumaParaSocial: 0,
     sumaParaFamiliar: 0

    };

      //AUTONOMIA POST
  objAPIRpta_Full5 : any =
  {
    msnj : '',
    rpta : {}
  };

  subeEstructuraApi3 : any =
  {
    respuestas :  { },
    significado : { },

  }

  objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPostFullInfo : any =
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

    //DECISIONES POST
    objAPIRpta_Full9 : any =
    {
      msnj : '',
      rpta : {}
    };

    subeEstructuraApi7 : any =
    {
      respuestas :  { },
      significado : { },

    }

    objAPIRpta_objPacienteRespuestasCuestionarioTomaDecisionesPostFullInfo : any =
    {

     nivelTomaDeDecisiones: ""

    };


  constructor(
    private route: ActivatedRoute,
    private PacienteService: PacienteService,
    private CasoPacienteService : CasopacienteService,
    private RespuestaMotivacionService : RespuestaMotivacionService,
    private RespuestaAutoestimaService : RespuestaAutoestimaService,
    private RespuestaAutonomiaService : RespuestaAutonomiaService,
    private RespuestaTomaDecionesService :RespuestaTomaDecionesService,) { }

  ngOnInit(): void {
    this.g_FromUser_PacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.ObtenerDatosPaciente();
    this.PintarLosDatosDelPacienteEnLaPantallaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosMotivacionPrOEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosAutoestimaPostEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosAutonomiaPostEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
    this.PintarLosDatosCuestionariosTomaDecionesPostEnLaPatanllaPrincipal(this.g_FromUser_PacienteId);
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

    //MOTIVACION POST
    PintarLosDatosCuestionariosMotivacionPrOEnLaPatanllaPrincipal(p_PacienteId : string)
    {
      this.RespuestaMotivacionService.APIGet_RespuestasExamenMotivacionPost(p_PacienteId)
      .subscribe(APIRpta3 => {
        this.objAPIRpta_Full3 = APIRpta3;
        this.subeEstructuraApi1 = this.objAPIRpta_Full3.rpta;
        this.objAPIRpta_objPacienteRespuestasCuestionarioMotivacionPostFullInfo = this.subeEstructuraApi1.significado;
      });
    }

     //AUTOESTIMA POST
     PintarLosDatosCuestionariosAutoestimaPostEnLaPatanllaPrincipal(p_PacienteId : string)
     {
       this.RespuestaAutoestimaService.APIGet_RespuestasExamenAutoestimaPost(p_PacienteId)
       .subscribe(APIRpta7 => {
         this.objAPIRpta_Full7 = APIRpta7;
         this.subeEstructuraApi5 = this.objAPIRpta_Full7.rpta;
         this.objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPostFullInfo = this.subeEstructuraApi5.significado;

       });
     }

     //AUTONOMIA POST
     PintarLosDatosCuestionariosAutonomiaPostEnLaPatanllaPrincipal(p_PacienteId : string)
     {
       this.RespuestaAutonomiaService.APIGet_RespuestasExamenAutonomiaPost(p_PacienteId)
       .subscribe(APIRpta5 => {
         this.objAPIRpta_Full5 = APIRpta5;
         this.subeEstructuraApi3 = this.objAPIRpta_Full5.rpta;
         this.objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPostFullInfo = this.subeEstructuraApi3.significado;

       });
     }

      //TOMADECIONES POST
      PintarLosDatosCuestionariosTomaDecionesPostEnLaPatanllaPrincipal(p_PacienteId : string)
      {
        this.RespuestaTomaDecionesService.APIGet_RespuestasExamenTomaDecisionesPost(p_PacienteId)
        .subscribe(APIRpta9 => {
          this.objAPIRpta_Full9 = APIRpta9;
          this.subeEstructuraApi7 = this.objAPIRpta_Full9.rpta;
          this.objAPIRpta_objPacienteRespuestasCuestionarioTomaDecisionesPostFullInfo = this.subeEstructuraApi7.significado;

        });
      }


}
