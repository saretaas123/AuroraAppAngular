import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CasopacienteService {

  _url = 'https://localhost:7226/api/CasoPaciente/';

  constructor(
    private http: HttpClient,
    private _cookieService : CookieService
    ) {
  }

  GetCasoPacienteById(CasoPacienteId : string)
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get(this._url + 'ObtenerCasoPacienteById/' +CasoPacienteId, { headers : headers});

  }

  GetCasoPacienteByPsicologoId(PsicologoId : string)
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get(this._url + 'ObtenerCasoPacienteByPsicologoId/' +PsicologoId, { headers : headers});

  }

  public GetCasoPaciente_CasoPaciente_ByPacienteId(PacienteId : string)
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get(this._url + 'ObtenerCasoPacienteByPacienteId/' + PacienteId , { headers : headers});
  }

  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy : string){
    this._listeners.next(filterBy)
  }

}
