import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RespuestaAutoestimaService {

  _url = 'https://localhost:7226/api/RespuestaTest/';

  constructor(
          private http: HttpClient
      ) {
          console.log('Evluacion Service Working')
      }

  APIGet_RespuestasExamenAutoestimaPre(CasoPacienteId : string)
  {
    let headers = new HttpHeaders().set('Type-content','aplication/json')

    return this.http.get(this._url + 'RespuestasExamenAutoestimaPre/' + CasoPacienteId, { headers : headers});
  }

  APIGet_RespuestasExamenAutoestimaPost(CasoPacienteId : string)
  {
    let headers = new HttpHeaders().set('Type-content','aplication/json')

    return this.http.get(this._url + 'RespuestasExamenAutoestimaPost/' + CasoPacienteId, { headers : headers});

  }


  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy : string){
    this._listeners.next(filterBy)
  }

}
