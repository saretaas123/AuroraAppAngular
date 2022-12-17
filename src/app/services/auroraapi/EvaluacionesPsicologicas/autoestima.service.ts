import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class EvaluacionAutoestimaService {

    _url = 'https://localhost:7226/api/Evaluacion/';

    constructor(
            private http: HttpClient
        ) {
            console.log('Evluacion Service Working')
        }

    PostAPI_EvaluarExamenMotivacionPreTest(pPsicologoId: number, pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,pFechaNacimiento : string,pDni : string
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

    PostAPI_EvaluarExamenMotivacionPostTest(pPsicologoId: number, pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,pFechaNacimiento : string,pDni : string
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


}
