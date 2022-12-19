import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class RespuestaAutonomiaService {

  _url = 'https://localhost:7226/api/RespuestaTest/';

  constructor(
          private http: HttpClient
      ) {
          console.log('Evluacion Service Working')
      }

      APIGet_RespuestasExamenAutonomiaPre(CasoPacienteId : string)
      {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'RespuestasExamenAutonomiaPre/' + CasoPacienteId, { headers : headers});

      }

      APIGet_RespuestasExamenAutonomiaPost(CasoPacienteId : string)
      {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'RespuestasExamenAutonomiaPost/' + CasoPacienteId, { headers : headers});

      }



}
