import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autoestima',
  templateUrl: './autoestima.component.html',
  styleUrls: ['./autoestima.component.css']
})
export class AutoestimaComponent implements OnInit {

  pacienteId : string = '0';
  psicologoId : string = '0';

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
    p20 : 0,
    p21 : 0,
    p22 : 0
  };

  ngOnInit(): void {
  }

  constructor() { }

  RespuestaValorPregunta1(valorMarcado : number)
  {
    console.log('Antes de igual: Respuestas:');
    console.log(this.Respuestas);
     this.Respuestas.p01 =valorMarcado;
    console.log('despues de igual: Respuestas:');    console.log(this.Respuestas);
  }
  RespuestaValorPregunta2(valorMarcado : number){ this.Respuestas.p02 =valorMarcado;console.log('despues de igual: Respuestas:');    console.log(this.Respuestas); }
  RespuestaValorPregunta3(valorMarcado : number){ this.Respuestas.p03 =valorMarcado;console.log('despues de igual: Respuestas:');    console.log(this.Respuestas); }
  RespuestaValorPregunta4(valorMarcado : number){ this.Respuestas.p04 =valorMarcado;console.log('despues de igual: Respuestas:');    console.log(this.Respuestas); }
  RespuestaValorPregunta5(valorMarcado : number){ this.Respuestas.p05 =valorMarcado;console.log('despues de igual: Respuestas:');    console.log(this.Respuestas); }
  RespuestaValorPregunta6(valorMarcado : number){ this.Respuestas.p06 =valorMarcado;console.log('despues de igual: Respuestas:');    console.log(this.Respuestas); }
  RespuestaValorPregunta7(valorMarcado : number){ this.Respuestas.p07 =valorMarcado;console.log('despues de igual: Respuestas:');    console.log(this.Respuestas); }
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
  RespuestaValorPregunta21(valorMarcado : number){ this.Respuestas.p21 =valorMarcado; }
  RespuestaValorPregunta22(valorMarcado : number){ this.Respuestas.p22 =valorMarcado; }


}
