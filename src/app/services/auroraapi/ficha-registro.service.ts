import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})


export class FichaRegistroService {

  _url = 'https://localhost:7226/api/FichaRegistro/';

  constructor(
    private http : HttpClient,
    private _cookieService : CookieService
  ) {
  }

  GetFichaRegistroByPacienteId(PacienteId : string)
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get(this._url + 'ObtenerFichaRegistroByPacienteId/' +PacienteId, { headers : headers});

  }

  PostRegistrarFichaRegistro(
    pPacienteId: number,
    pNacionalidad : number,
    pEstadoCivilId : number,
    pClasificacionSocioEconomicaId : number,
    pUbigeoNacimientoDepartamentoId : number,
    pUbigeoNacimientoProvinciaId : number,
    pUbigeoNacimientoDistritoId : number,
    pUbigeoResidenciaDepartamentoId : number,
    pUbigeoResidenciaProvinciaId : Number,
    pUbigeoResidenciaDistritoId : Number,
    pEstaGestando : boolean,
    pNumeroHijas : number,
    pNumeroHijos:number,
    pComoseConsideraId :number,
    pLenguaMaterno : string,
    pPoseeDiscapacidad : boolean,
    pTipoDiscapacidad : string,
    pNivelEducativoId : number,
    pActualmenteEstudia : boolean,
    pNivelInstitucionEducativaId : number,
    pNombreInstitucionEducativa : string,
    pTipoInstitucionEducativaId : boolean,
    pUbigeoLugarDondeEstudiaDepartamentoId : number,
    pUbigeoLugarDondeEstudiaProvinciaId : number,
    pUbigeoLugarDondeEstudiaDistritoId : number,
    pPoseeIngresosEconomicosPropios : boolean,
    pNombreOcupacionLaboralPropia : string,
    pCuentaConDenunciaInterpuesta :boolean,
    pContinuaConDenunciaInterpuesta : boolean )
  {

    let tokenAccess = this._cookieService.get("TokenAccess");
    let headers = new HttpHeaders().set('Type-content','aplication/json')
      .set('Authorization','bearer '+tokenAccess);

    return this.http.post(this._url + 'AgregarFichaRegistro', {
      "pacienteId": pPacienteId,
      "nacionalidadId": pNacionalidad,
      "estadoCivilId": pEstadoCivilId,
      "clasificacionSocioEconomicaId": pClasificacionSocioEconomicaId,
      "ubigeoNacimientoDepartamentoId": pUbigeoNacimientoDepartamentoId,
      "ubigeoNacimientoProvinciaId": pUbigeoNacimientoProvinciaId,
      "ubigeoNacimientoDistritoId": pUbigeoNacimientoDistritoId,
      "ubigeoResidenciaDepartamentoId": pUbigeoResidenciaDepartamentoId,
      "ubigeoResidenciaProvinciaId": pUbigeoResidenciaProvinciaId,
      "ubigeoResidenciaDistritoId": pUbigeoResidenciaDistritoId,
      "estaGestando": pEstaGestando,
      "numeroHijas": pNumeroHijas,
      "numeroHijos": pNumeroHijos,
      "comoseConsideraId": pComoseConsideraId,
      "lenguaMaterno": pLenguaMaterno,
      "poseeDiscapacidad": pPoseeDiscapacidad,
      "tipoDiscapacidadNombre": pTipoDiscapacidad,
      "nivelEducativoId": pNivelEducativoId,
      "actualmenteEstudia": pActualmenteEstudia,
      "nivelInstitucionEducativaId": pNivelInstitucionEducativaId,
      "nombreInstitucionEducativa": pNombreInstitucionEducativa,
      "tipoInstitucionEducativaId": pTipoInstitucionEducativaId,
      "ubigeoLugarDondeEstudiaDepartamentoId": pUbigeoLugarDondeEstudiaDepartamentoId,
      "ubigeoLugarDondeEstudiaProvinciaId": pUbigeoLugarDondeEstudiaProvinciaId,
      "ubigeoLugarDondeEstudiaDistritoId": pUbigeoLugarDondeEstudiaDistritoId,
      "poseeIngresosEconomicosPropios": pPoseeIngresosEconomicosPropios,
      "nombreOcupacionLaboralPropia": pNombreOcupacionLaboralPropia,
      "cuentaConDenunciaInterpuesta": pCuentaConDenunciaInterpuesta,
      "continuaConDenunciaInterpuesta": pContinuaConDenunciaInterpuesta
      } , { headers : headers});
  }

  PostEditarFichaRegistro(pPacienteId: number,
    pNacionalidad : number,
    pEstadoCivilId : number,
    pClasificacionSocioEconomicaId : number,
    pUbigeoNacimientoDepartamentoId : number,
    pUbigeoNacimientoProvinciaId : number,
    pUbigeoNacimientoDistritoId : number,
    pUbigeoResidenciaDepartamentoId : number,
    pUbigeoResidenciaProvinciaId : Number,
    pUbigeoResidenciaDistritoId : Number,
    pEstaGestando : boolean,
    pNumeroHijas : number,
    pNumeroHijos:number,
    pComoseConsideraId :number,
    pLenguaMaterno : string,
    pPoseeDiscapacidad : boolean,
    pTipoDiscapacidad : string,
    pNivelEducativoId : number,
    pActualmenteEstudia : boolean,
    pNivelInstitucionEducativaId : number,
    pNombreInstitucionEducativa : string,
    pTipoInstitucionEducativaId : boolean,
    pUbigeoLugarDondeEstudiaDepartamentoId : number,
    pUbigeoLugarDondeEstudiaProvinciaId : number,
    pUbigeoLugarDondeEstudiaDistritoId : number,
    pPoseeIngresosEconomicosPropios : boolean,
    pNombreOcupacionLaboralPropia : string,
    pCuentaConDenunciaInterpuesta :boolean,
    pContinuaConDenunciaInterpuesta : boolean)
  {

    let tokenAccess = this._cookieService.get("TokenAccess");
    let headers = new HttpHeaders().set('Type-content','aplication/json')
      .set('Authorization','bearer '+tokenAccess);

    return this.http.put(this._url + 'EditarFichaRegistroByPacienteId', {
      "pacienteId": pPacienteId,
      "nacionalidadId": pNacionalidad,
      "estadoCivilId": pEstadoCivilId,
      "clasificacionSocioEconomicaId": pClasificacionSocioEconomicaId,
      "ubigeoNacimientoDepartamentoId": pUbigeoNacimientoDepartamentoId,
      "ubigeoNacimientoProvinciaId": pUbigeoNacimientoProvinciaId,
      "ubigeoNacimientoDistritoId": pUbigeoNacimientoDistritoId,
      "ubigeoResidenciaDepartamentoId": pUbigeoResidenciaDepartamentoId,
      "ubigeoResidenciaProvinciaId": pUbigeoResidenciaProvinciaId,
      "ubigeoResidenciaDistritoId": pUbigeoResidenciaDistritoId,
      "estaGestando": pEstaGestando,
      "numeroHijas": pNumeroHijas,
      "numeroHijos": pNumeroHijos,
      "comoseConsideraId": pComoseConsideraId,
      "lenguaMaterno": pLenguaMaterno,
      "poseeDiscapacidad": pPoseeDiscapacidad,
      "tipoDiscapacidadNombre": pTipoDiscapacidad,
      "nivelEducativoId": pNivelEducativoId,
      "actualmenteEstudia": pActualmenteEstudia,
      "nivelInstitucionEducativaId": pNivelInstitucionEducativaId,
      "nombreInstitucionEducativa": pNombreInstitucionEducativa,
      "tipoInstitucionEducativaId": pTipoInstitucionEducativaId,
      "ubigeoLugarDondeEstudiaDepartamentoId": pUbigeoLugarDondeEstudiaDepartamentoId,
      "ubigeoLugarDondeEstudiaProvinciaId": pUbigeoLugarDondeEstudiaProvinciaId,
      "ubigeoLugarDondeEstudiaDistritoId": pUbigeoLugarDondeEstudiaDistritoId,
      "poseeIngresosEconomicosPropios": pPoseeIngresosEconomicosPropios,
      "nombreOcupacionLaboralPropia": pNombreOcupacionLaboralPropia,
      "cuentaConDenunciaInterpuesta": pCuentaConDenunciaInterpuesta,
      "continuaConDenunciaInterpuesta": pContinuaConDenunciaInterpuesta
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
