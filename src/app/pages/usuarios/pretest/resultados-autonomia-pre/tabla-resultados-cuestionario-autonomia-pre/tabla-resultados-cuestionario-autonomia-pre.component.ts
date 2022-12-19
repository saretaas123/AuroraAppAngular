import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespuestaAutonomiaService} from 'src/app/services/auroraapi/RespuestasPsicologicas/autonomia.service'






@Component({
  selector: 'app-tabla-resultados-cuestionario-autonomia-pre',
  templateUrl: './tabla-resultados-cuestionario-autonomia-pre.component.html',
  styleUrls: ['./tabla-resultados-cuestionario-autonomia-pre.component.css']
})
export class TablaResultadosCuestionarioAutonomiaPreComponent implements OnInit {

  g_routeparam_CasoPacienteId: string = '0';

  //AUTOESTIMA PRE RESPUESTAS
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

  objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPreRespuestasFullInfo : any =
  {

     casoPacienteId: Number(this.g_routeparam_CasoPacienteId),
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
     p23: 0,
     p24: 0,
     p25: 0,
     p26: 0,
     p27: 0,
     p28: 0,
     p29: 0,
     id:0,
     creadoEn: null,
     creadoPor: null,
     editadoEn: null,
     editadoPor: null,
     estaEliminado: false

  };

  ngOnInit(): void {
    this.g_routeparam_CasoPacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.PintarLosDatosCuestionariosAutonomiaPreResultadosEnLaPatanllaPrincipal(this.g_routeparam_CasoPacienteId);
  }

  constructor(
    private RespuestaAutonomiaService : RespuestaAutonomiaService,
    private route: ActivatedRoute
  ) { }

   //AUTOESTIMA PRE RESPUESTAS
   PintarLosDatosCuestionariosAutonomiaPreResultadosEnLaPatanllaPrincipal(p_PacienteId : string)
   {
       this.RespuestaAutonomiaService.APIGet_RespuestasExamenAutonomiaPre(p_PacienteId)
       .subscribe( APIRpta3 => {
        this.objAPIRpta_Full3 = APIRpta3;
        this.subeEstructuraApi3 = this.objAPIRpta_Full3.rpta;
        this.objAPIRpta_objPacienteRespuestasCuestionarioAutonomiaPreRespuestasFullInfo = this.subeEstructuraApi3.respuestas;
       });
   }



}
