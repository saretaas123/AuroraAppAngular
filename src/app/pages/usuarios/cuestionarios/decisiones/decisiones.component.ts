import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decisiones',
  templateUrl: './decisiones.component.html',
  styleUrls: ['./decisiones.component.css']
})
export class DecisionesComponent implements OnInit {

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
  }

  constructor() { }

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
