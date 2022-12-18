import { Component, OnInit } from '@angular/core';
import { EvaluacionMotivacionService } from 'src/app/services/auroraapi/EvaluacionesPsicologicas/motivacion.service';

@Component({
  selector: 'app-motivacion',
  templateUrl: './motivacion.component.html',
  styleUrls: ['./motivacion.component.css']
})
export class MotivacionComponent implements OnInit {

  EsPreTest = true;
  EsPostTest = false;

  pacienteId : number = 0;
  psicologoId : number = 0;

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
    p12 : 0,
    p13 : 0,
    p14 : 0,
    p15 : 0,
    p16 : 0,
    p17 : 0,
    p18 : 0,
    p19 : 0,
    p20 : 0
  };

  ngOnInit(): void {
  }

  constructor(private TestMotivacionService : EvaluacionMotivacionService) { }

  EnviarRespuestasParaEvaluacionPre()
  {

    if(this.EsPreTest){
    this.TestMotivacionService.PostAPI_EvaluarExamenMotivacionPreTest(
      this.pacienteId,
      this.psicologoId,
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
      this.Respuestas.p11,
      this.Respuestas.p12,
      this.Respuestas.p13,
      this.Respuestas.p14,
      this.Respuestas.p15,
      this.Respuestas.p16,
      this.Respuestas.p17,
      this.Respuestas.p18,
      this.Respuestas.p19,
      this.Respuestas.p20
      );
    }
    console.log("Aca deberia estar evaluandose trayendo la api");

  }

  EnviarRespuestasParaEvaluacionPost()
  {

    if(this.EsPostTest){
    this.TestMotivacionService.PostAPI_EvaluarExamenMotivacionPostTest(
      this.pacienteId,
      this.psicologoId,
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
      this.Respuestas.p11,
      this.Respuestas.p12,
      this.Respuestas.p13,
      this.Respuestas.p14,
      this.Respuestas.p15,
      this.Respuestas.p16,
      this.Respuestas.p17,
      this.Respuestas.p18,
      this.Respuestas.p19,
      this.Respuestas.p20,

      );
    }
    console.log("Aca deberia estar evaluandose trayendo la api");

  }

  //#region Funciones para las respuestas

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
  RespuestaValorPregunta12(valorMarcado : number){ this.Respuestas.p12 =valorMarcado; }
  RespuestaValorPregunta13(valorMarcado : number){ this.Respuestas.p13 =valorMarcado; }
  RespuestaValorPregunta14(valorMarcado : number){ this.Respuestas.p14 =valorMarcado; }
  RespuestaValorPregunta15(valorMarcado : number){ this.Respuestas.p15 =valorMarcado; }
  RespuestaValorPregunta16(valorMarcado : number){ this.Respuestas.p16 =valorMarcado; }
  RespuestaValorPregunta17(valorMarcado : number){ this.Respuestas.p17 =valorMarcado; }
  RespuestaValorPregunta18(valorMarcado : number){ this.Respuestas.p18 =valorMarcado; }
  RespuestaValorPregunta19(valorMarcado : number){ this.Respuestas.p19 =valorMarcado; }
  RespuestaValorPregunta20(valorMarcado : number){ this.Respuestas.p20 =valorMarcado; }

  ////#endregion

}
