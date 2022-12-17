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

        return this.http.get(this._url + 'ObtenerPsicologoFullInfoById/' +PacienteId, { headers : headers});

    }

    PostRegistrarPaciente(pPsicologoId: number, pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,pFechaNacimiento : string,pDni : string,pTelefono : string,pDireccioUbigeo : string,pCorreo : string)
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
            "TipoViolencia": 'Tipo Violencia',
            "Riesgo": 'Riesgo',
            "AnoDeEvaluacion": '2000'
          } , { headers : headers});

    }



}
