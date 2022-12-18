import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class PacienteService {

    _url = 'https://localhost:7226/api/Paciente/';

    constructor(
            private http: HttpClient
        ) {
            console.log('Paciente Service Working')
        }

    GetPacienteById(PacienteId : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'ObtenerPacienteById/' +PacienteId, { headers : headers});

    }

    GetPacienteFullInfoById(PacienteId : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'ObtenerPacienteFullInfoById/' +PacienteId, { headers : headers});

    }

    GetPacienteFullInfoByCasoPacienteId(CasoPacienteId : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'ObtenerPacienteFullInfoByCasoPacienteId/' +CasoPacienteId, { headers : headers});

    }

    PostRegistrarPaciente(pPsicologoId: number, pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,pFechaNacimiento : string,pDni : string
        ,pTelefono : string,pDireccioUbigeo : string,pCorreo : string, pTipoViolencia : string,pRiesgo : string,pAnoDeEvaluacion : string,pEntidadProblema :string,pModalidadAdministrativo :string)
    {

      console.log(pTipoViolencia);
      console.log(pRiesgo);
      console.log(pAnoDeEvaluacion);
      console.log(pEntidadProblema);
      console.log(pModalidadAdministrativo);

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
            "modalidadAdministrativo":pModalidadAdministrativo
          } , { headers : headers});

    }



}
