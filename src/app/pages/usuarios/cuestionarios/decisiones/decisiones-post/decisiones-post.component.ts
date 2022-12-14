import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluacionTomaDecisionesService } from 'src/app/services/auroraapi/EvaluacionesPsicologicas/tomadecisiones.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-decisiones-post',
  templateUrl: './decisiones-post.component.html',
  styleUrls: ['./decisiones-post.component.css']
})
export class DecisionesPostComponent implements OnInit {

  g_casoPacienteId : number = 0;

  Respuestas : any =
  {
    p01 : 0,
    p02 : 0,
    p03 : 0,
    p04 : 0,
    p05 : 0,
    p06 : 0,
    p07 : 0,
    p08 : 0,
    p09 : 0,
    p10 : 0,
    p11 : 0,
  };

  ngOnInit(): void {
    this.g_casoPacienteId = Number(this.route.snapshot.paramMap.get("casopacienteid")??'0');
  }

  constructor(private TestTomaDecisionesService : EvaluacionTomaDecisionesService,
    private route: ActivatedRoute,
    private _location: Location) { }

  EnviarRespuestasParaEvaluacionPost()
  {

    this.TestTomaDecisionesService.PostAPI_EvaluarExamenDecisionesPostTest(
      this.g_casoPacienteId,
      this.Respuestas.p01,
      this.Respuestas.p02,
      this.Respuestas.p03,
      this.Respuestas.p04,
      this.Respuestas.p05,
      this.Respuestas.p06,
      this.Respuestas.p07,
      this.Respuestas.p08,
      this.Respuestas.p09,
      this.Respuestas.p10,
      this.Respuestas.p11
    ).subscribe(APIResponse =>
      {
        this._location.back();
      });

  }

  RespuestaValorPregunta1(valorMarcado : number){ this.Respuestas.p01 =valorMarcado; }
  RespuestaValorPregunta2(valorMarcado : number){ this.Respuestas.p02 =valorMarcado; }
  RespuestaValorPregunta3(valorMarcado : number){ this.Respuestas.p03 =valorMarcado; }
  RespuestaValorPregunta4(valorMarcado : number){ this.Respuestas.p04 =valorMarcado; }
  RespuestaValorPregunta5(valorMarcado : number){ this.Respuestas.p05 =valorMarcado; }
  RespuestaValorPregunta6(valorMarcado : number){ this.Respuestas.p06 =valorMarcado; }
  RespuestaValorPregunta7(valorMarcado : number){ this.Respuestas.p07 =valorMarcado; }
  RespuestaValorPregunta8(valorMarcado : number){ this.Respuestas.p08 =valorMarcado; }
  RespuestaValorPregunta9(valorMarcado : number){ this.Respuestas.p09 =valorMarcado; }
  RespuestaValorPregunta10(valorMarcado : number){ this.Respuestas.p10 =valorMarcado; }
  RespuestaValorPregunta11(valorMarcado : number){ this.Respuestas.p11 =valorMarcado; }

}
