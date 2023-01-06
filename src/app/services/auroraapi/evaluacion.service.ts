import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class EvaluacionService {

    _url = 'https://localhost:7226/api/Evaluacion/';

    constructor(
            private http: HttpClient
        ) {
            console.log('Evluacion Service Working')
        }

    GetEvaluacion(PacienteId : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'ObtenerPsicologoFullInfoById/' +PacienteId, { headers : headers});

    }

    PostRegistrarPaciente(pPsicologoId: number, pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,pFechaNacimiento : string,pDni : string
        ,pTelefono : string,pDireccioUbigeo : string,pCorreo : string, pTipoViolencia : string,pRiesgo : string,pAnoDeEvaluacion : string,pEntidadProblema :string,pModalidadAdministrativo :string)
    {

        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.post(this._url + 'AgregarPaciente', {
            "PsicologoId" : pPsicologoId,
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
            "AnoDeEvaluacion":pAnoDeEvaluacion,
            "EntidadProblema":pEntidadProblema,
            "modalidadAdminitrativo":pModalidadAdministrativo
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
