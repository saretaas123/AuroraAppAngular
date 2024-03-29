import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class RespuestaAutonomiaService {

  _url = 'https://localhost:7226/api/RespuestaTest/';

  constructor(
          private http: HttpClient,
          private _cookieService : CookieService
      ) {
          console.log('Evluacion Service Working')
      }

      APIGet_RespuestasExamenAutonomiaPre(CasoPacienteId : string)
      {
        let tokenAccess = this._cookieService.get("TokenAccess");
          let headers = new HttpHeaders().set('Type-content','aplication/json')
            .set('Authorization','bearer '+tokenAccess);

        return this.http.get(this._url + 'RespuestasExamenAutonomiaPre/' + CasoPacienteId, { headers : headers});

      }

      APIGet_RespuestasExamenAutonomiaPost(CasoPacienteId : string)
      {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'RespuestasExamenAutonomiaPost/' + CasoPacienteId, { headers : headers});

      }

      private _listeners = new Subject<any>();
      listen(): Observable<any>{
        return this._listeners.asObservable();
      }
      filter(filterBy : string){
        this._listeners.next(filterBy)
      }


}
