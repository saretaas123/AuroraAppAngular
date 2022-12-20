import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluacionAutonomiaService } from 'src/app/services/auroraapi/EvaluacionesPsicologicas/autonomia.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-autonomia-pre',
  templateUrl: './autonomia-pre.component.html',
  styleUrls: ['./autonomia-pre.component.css']
})
export class AutonomiaPreComponent implements OnInit {

  g_casoPacienteId : number = 0;

  Resultados : any =
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
    p20 : 0,
    p21 : 0,
    p22 : 0,
    p23 : 0,
    p24 : 0,
    p25 : 0,
    p26 : 0,
    p27 : 0,
    p28 : 0,
    p29 : 0
  };

  ngOnInit(): void {
    this.g_casoPacienteId = Number(this.route.snapshot.paramMap.get("casopacienteid")??'0');
  }

  constructor(private TestAutonomiaService : EvaluacionAutonomiaService,
    private route: ActivatedRoute,
    private _location: Location) { }

  EnviarRespuestasParaEvaluacionPre()
  {
    this.TestAutonomiaService.PostAPI_EvaluarExamenAutonomiaPreTest(
      this.g_casoPacienteId,
      this.Resultados.p01,
      this.Resultados.p02,
      this.Resultados.p03,
      this.Resultados.p04,
      this.Resultados.p05,
      this.Resultados.p06,
      this.Resultados.p07,
      this.Resultados.p08,
      this.Resultados.p09,
      this.Resultados.p10,
      this.Resultados.p11,
      this.Resultados.p12,
      this.Resultados.p13,
      this.Resultados.p14,
      this.Resultados.p15,
      this.Resultados.p16,
      this.Resultados.p17,
      this.Resultados.p18,
      this.Resultados.p19,
      this.Resultados.p20,
      this.Resultados.p21,
      this.Resultados.p22,
      this.Resultados.p23,
      this.Resultados.p24,
      this.Resultados.p25,
      this.Resultados.p26,
      this.Resultados.p27,
      this.Resultados.p28,
      this.Resultados.p29
      ).subscribe(APIResponse =>
        {
          this._location.back();
        });

  }

  RespuestaValorPregunta1(valorMarcado : number){ this.Resultados.p01 =valorMarcado; }
  RespuestaValorPregunta2(valorMarcado : number){ this.Resultados.p02 =valorMarcado; }
  RespuestaValorPregunta3(valorMarcado : number){ this.Resultados.p03 =valorMarcado; }
  RespuestaValorPregunta4(valorMarcado : number){ this.Resultados.p04 =valorMarcado; }
  RespuestaValorPregunta5(valorMarcado : number){ this.Resultados.p05 =valorMarcado; }
  RespuestaValorPregunta6(valorMarcado : number){ this.Resultados.p06 =valorMarcado; }
  RespuestaValorPregunta7(valorMarcado : number){ this.Resultados.p07 =valorMarcado; }
  RespuestaValorPregunta8(valorMarcado : number){ this.Resultados.p08 =valorMarcado; }
  RespuestaValorPregunta9(valorMarcado : number){ this.Resultados.p09 =valorMarcado; }
  RespuestaValorPregunta10(valorMarcado : number){ this.Resultados.p10 =valorMarcado; }
  RespuestaValorPregunta11(valorMarcado : number){ this.Resultados.p11 =valorMarcado; }
  RespuestaValorPregunta12(valorMarcado : number){ this.Resultados.p12 =valorMarcado; }
  RespuestaValorPregunta13(valorMarcado : number){ this.Resultados.p13 =valorMarcado; }
  RespuestaValorPregunta14(valorMarcado : number){ this.Resultados.p14 =valorMarcado; }
  RespuestaValorPregunta15(valorMarcado : number){ this.Resultados.p15 =valorMarcado; }
  RespuestaValorPregunta16(valorMarcado : number){ this.Resultados.p16 =valorMarcado; }
  RespuestaValorPregunta17(valorMarcado : number){ this.Resultados.p17 =valorMarcado; }
  RespuestaValorPregunta18(valorMarcado : number){ this.Resultados.p18 =valorMarcado; }
  RespuestaValorPregunta19(valorMarcado : number){ this.Resultados.p19 =valorMarcado; }
  RespuestaValorPregunta20(valorMarcado : number){ this.Resultados.p20 =valorMarcado; }
  RespuestaValorPregunta21(valorMarcado : number){ this.Resultados.p21 =valorMarcado; }
  RespuestaValorPregunta22(valorMarcado : number){ this.Resultados.p22 =valorMarcado; }
  RespuestaValorPregunta23(valorMarcado : number){ this.Resultados.p23 =valorMarcado; }
  RespuestaValorPregunta24(valorMarcado : number){ this.Resultados.p24 =valorMarcado; }
  RespuestaValorPregunta25(valorMarcado : number){ this.Resultados.p25 =valorMarcado; }
  RespuestaValorPregunta26(valorMarcado : number){ this.Resultados.p26 =valorMarcado; }
  RespuestaValorPregunta27(valorMarcado : number){ this.Resultados.p27 =valorMarcado; }
  RespuestaValorPregunta28(valorMarcado : number){ this.Resultados.p28 =valorMarcado; }
  RespuestaValorPregunta29(valorMarcado : number){ this.Resultados.p29 =valorMarcado; }



}
