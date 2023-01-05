import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { RespuestaMotivacionService} from 'src/app/services/auroraapi/RespuestasPsicologicas/motivacion.service';
import { RespuestaAutonomiaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autonomia.service';
import { RespuestaAutoestimaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autoestima.service';
import { RespuestaTomaDecionesService} from 'src/app/services/auroraapi/RespuestasPsicologicas/tomadecisiones.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-ver-resumen',
  templateUrl: './ver-resumen.component.html',
  styleUrls: ['./ver-resumen.component.css']
})
export class VerResumenComponent implements OnInit {

   // CREACION DE PDF
   downloadPDF() {
    // Extraemos el
    const DATA : any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options)
    .then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(
        img,
        'PNG',
        bufferX,
        bufferY,
        pdfWidth,
        pdfHeight,
        undefined,
        'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_Resumen.pdf`);
    });
  }
  //FIN CREACION DE PDF


  g_routeparam_PacienteId: string = '0';
  g_FromUser_PsicologoId: string = '1';

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

    resultadoPrecontemplacion: "Muy Bajo",
    resultadoContemplacion: "Muy Bajo",
    resultadoAccion: "Muy Bajo",
    resultadoMantenimiento: "Muy Bajo"

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

    resultadoPrecontemplacion: "Muy Bajo",
    resultadoContemplacion: "Muy Bajo",
    resultadoAccion: "Muy Bajo",
    resultadoMantenimiento: "Muy Bajo"

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

  //AUTONOMIA PRO
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

    nivelDeAutoestima: "Nivel Bajo",
    sumaParaSiMismo: 0,
    sumaParaSocial: 0,
    sumaParaFamiliar: 0

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

    nivelDeAutoestima: "Nivel Bajo",
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

    nivelTomaDeDecisiones: "IncipienteCapacidad"

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

    nivelTomaDeDecisiones: "IncipienteCapacidad"

   };




  ngOnInit(): void {
    this.g_routeparam_PacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.PintarLosDatosDelPacienteEnLaPantallaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosMotivacionPreEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosMotivacionPrOEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosAutonomiaPreEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosAutonomiaPostEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosAutoestimaPreEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosAutoestimaPostEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosTomaDecionesPreEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
    this.PintarLosDatosCuestionariosTomaDecionesPostEnLaPatanllaPrincipal(this.g_routeparam_PacienteId);
  };

  constructor(
    private CasoPacienteService : CasopacienteService,
    private RespuestaMotivacionService : RespuestaMotivacionService,
    private RespuestaAutonomiaService : RespuestaAutonomiaService,
    private RespuestaAutoestimaService : RespuestaAutoestimaService,
    private RespuestaTomaDecionesService :RespuestaTomaDecionesService,
    private route: ActivatedRoute
  ) {

  };

  //DATOS PACIENTES
  PintarLosDatosDelPacienteEnLaPantallaPrincipal(p_PacienteId : string)
  {
      this.CasoPacienteService.GetCasoPacienteById(p_PacienteId)
      .subscribe( APIRpta => {
        this.objAPIRpta_Full = APIRpta;
        this.objAPIRpta_objPacienteFullInfo = this.objAPIRpta_Full.rpta;
        console.log(this.objAPIRpta_objPacienteFullInfo);
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
