import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class PacienteService {

    _url = 'https://localhost:7226/api/Paciente/';

    constructor(
            private http: HttpClient,
            private _cookieService : CookieService
        ) {
        }

    GetPacienteById(PacienteId : string)
    {
      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.get(this._url + 'ObtenerPacienteById/' +PacienteId, { headers : headers});

    }

    GetPacienteByCasoPacienteId(CasoPacienteId : string)
    {
      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.get(this._url + 'ObtenerPacienteByCasoPacienteId/' +CasoPacienteId, { headers : headers});

    }

    GetPacienteFullInfoById(PacienteId : string)
    {
      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.get(this._url + 'ObtenerPacienteFullInfoById/' +PacienteId, { headers : headers});

    }

    GetPacienteFullInfoByCasoPacienteId(CasoPacienteId : string)
    {
      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.get(this._url + 'ObtenerPacienteFullInfoByCasoPacienteId/' +CasoPacienteId, { headers : headers});

    }

    PostRegistrarPaciente(pPsicologoId: number, pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,pFechaNacimiento : string,pDni : string
        ,pTelefono : string,pDireccioUbigeo : number,pCorreo : string, pTipoViolencia : string,pRiesgo : string,pFechaDeEvaluacion : string,pEntidadProblema :string,pModalidadAdministrativo :string)
    {

      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.post(this._url + 'AgregarPaciente', {
            "PsicologoId" : pPsicologoId,
            "Nombres": pNombres,
            "ApellidoPaterno": pApellidoPaterno,
            "ApellidoMaterno": pApellidoMaterno,
            "FechaNacimiento": pFechaNacimiento,
            "Dni": pDni,
            "Telefono": pTelefono,
            "DireccioUbigeo": 1, //pDireccioUbigeo,
            "Correo": pCorreo,
            "TipoViolencia":pTipoViolencia,
            "Riesgo":pRiesgo,
            "FechaDeEvaluacion":pFechaDeEvaluacion,
            "EntidadProblema":pEntidadProblema,
            "modalidadAdministrativo":pModalidadAdministrativo
          } , { headers : headers});

    }

    PostEditarPaciente(pCasoPacienteId: number, pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,pFechaNacimiento : string,pDni : string
        ,pTelefono : string,pDireccioUbigeo : number,pCorreo : string, pTipoViolencia : string,pRiesgo : string,pFechaDeEvaluacion : string,pEntidadProblema :string,pModalidadAdministrativo :string)
    {

      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.put(this._url + 'EditarPaciente', {
            "CasoPacienteId" : pCasoPacienteId,
            "Nombres": pNombres,
            "ApellidoPaterno": pApellidoPaterno,
            "ApellidoMaterno": pApellidoMaterno,
            "FechaNacimiento": pFechaNacimiento,
            "Dni": pDni,
            "Telefono": pTelefono,
            "DireccioUbigeo": pDireccioUbigeo,
            "Correo": pCorreo,
            "TipoViolencia":pTipoViolencia,
            "Riesgo":pRiesgo,
            "FechaDeEvaluacion":pFechaDeEvaluacion,
            "EntidadProblema":pEntidadProblema,
            "modalidadAdministrativo":pModalidadAdministrativo
          } , { headers : headers});

    }


    private _listeners = new Subject<any>();
    listen(): Observable<any>{
      return this._listeners.asObservable();
    }
    filter(filterBy : string){
      this._listeners.next(filterBy)
    }

}
