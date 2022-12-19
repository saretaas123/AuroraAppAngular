import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class RespuestaTomaDecionesService {

  _url = 'https://localhost:7226/api/RespuestaTest/';

  constructor(
          private http: HttpClient
      ) {
          console.log('Evluacion Service Working')
      }


      APIGet_RespuestasExamenTomaDecisionesPre(CasoPacienteId : string)
      {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'RespuestasExamenTomaDecisionesPre/' + CasoPacienteId, { headers : headers});
      }

      APIGet_RespuestasExamenTomaDecisionesPost(CasoPacienteId : string)
      {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'RespuestasExamenTomaDecisionesPost/' + CasoPacienteId, { headers : headers});
      }


}
