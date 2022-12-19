import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class RespuestaMotivacionService {

  _url = 'https://localhost:7226/api/RespuestaTest/';

  constructor(
          private http: HttpClient
      ) {
          console.log('Evluacion Service Working')
      }

      APIGet_RespuestasExamenMotivacionPre(CasoPacienteId : string)
      {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'RespuestasExamenMotivacionPre/' + CasoPacienteId, { headers : headers});
      }

      APIGet_RespuestasExamenMotivacionPost(CasoPacienteId : string)
      {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'RespuestasExamenMotivacionPost/' + CasoPacienteId, { headers : headers});
      }



}
