import { Component, OnInit } from '@angular/core';
import { RespuestaAutoestimaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autoestima.service'
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-tabla-resultados-pro-auto',
  templateUrl: './tabla-resultados-pro-auto.component.html',
  styleUrls: ['./tabla-resultados-pro-auto.component.css']
})
export class TablaResultadosProAutoComponent implements OnInit {

  g_routeparam_CasoPacienteId: string = '0';

  //AUTOESTIMA Post RESPUESTAS
  objAPIRpta_Full3 : any =
  {
    msnj : '',
    rpta : {}
  };

  subeEstructuraApi3: any =
  {
    respuestas :  { },
    significado : { },

  }

  objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPostRespuestasFullInfo : any =
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
      this.PintarLosDatosCuestionariosAutoestimaPostResultadosEnLaPatanllaPrincipal(this.g_routeparam_CasoPacienteId);

  }

  constructor(
    private RespuestaAutoestimaService : RespuestaAutoestimaService,
    private route: ActivatedRoute
  ) { }

   //AUTOESTIMA PRE RESPUESTAS
   PintarLosDatosCuestionariosAutoestimaPostResultadosEnLaPatanllaPrincipal(p_PacienteId : string)
   {
       this.RespuestaAutoestimaService.APIGet_RespuestasExamenAutoestimaPost(p_PacienteId)
       .subscribe( APIRpta3 => {
        this.objAPIRpta_Full3 = APIRpta3;
        this.subeEstructuraApi3 = this.objAPIRpta_Full3.rpta;
        this.objAPIRpta_objPacienteRespuestasCuestionarioAutoestimaPostRespuestasFullInfo = this.subeEstructuraApi3.respuestas;
       });
   }



}
