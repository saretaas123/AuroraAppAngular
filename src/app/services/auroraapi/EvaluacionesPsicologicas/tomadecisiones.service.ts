import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class EvaluacionTomaDecisionesService {

    _url = 'https://localhost:7226/api/Evaluacion/';

    constructor(
            private http: HttpClient
        ) {
            console.log('Evluacion Service Working')
        }

        PostAPI_EvaluarExamenDecisionesPreTest(pacienteId: number, psicologoId : number, p01 : number,p02 : number,p03 : number,p04 : number
          ,p05 : number,p06 : number,p07 : number, p08 : number,p09 : number,p10 : number,p11 :number)
      {
          let headers = new HttpHeaders().set('Type-content','aplication/json')

          return this.http.post(this._url + 'EvaluarExamenTomaDecisionesPre', {
              "pacienteId": pacienteId,
              "psicologoId": psicologoId,
              "p01": p01,
              "p02": p02,
              "p03": p03,
              "p04": p04,
              "p05": p05,
              "p06": p06,
              "p07": p07,
              "p08": p08,
              "p09": p09,
              "p10": p10,
              "p11": p11
            } , { headers : headers});
      }


      PostAPI_EvaluarExamenDecisionesPostTest(pacienteId: number, psicologoId : number, p01 : number,p02 : number,p03 : number,p04 : number
        ,p05 : number,p06 : number,p07 : number, p08 : number,p09 : number,p10 : number,p11 :number)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.post(this._url + 'EvaluarExamenTomaDecisionesPost', {
            "pacienteId": pacienteId,
            "psicologoId": psicologoId,
            "p01": p01,
            "p02": p02,
            "p03": p03,
            "p04": p04,
            "p05": p05,
            "p06": p06,
            "p07": p07,
            "p08": p08,
            "p09": p09,
            "p10": p10,
            "p11": p11
          } , { headers : headers});
    }

}