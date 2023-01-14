import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FichaRegistroService {

  _url = 'https://localhost:7226/api/FichaRegistro/';

  constructor(
    private http : HttpClient
  ) {
    console.log('Ficha Registro Service Working')
  }

  GetFichaRegistroByPacienteId(PacienteId : string)
  {
      let headers = new HttpHeaders().set('Type-content','aplication/json')

      return this.http.get(this._url + 'ObtenerFichaRegistroByPacienteId/' +PacienteId, { headers : headers});

  }

  PostRegistrarFichaRegistro(pPacienteId: number, pNacionalidad : number, pEstadoCivilId : number,pClasificacionSocioEconomicaId : number,pUbigeoNacimientoDepartamentoId : number,pUbigeoNacimientoProvinciaId : number
    ,pUbigeoNacimientoDistritoId : number,pUbigeoResidenciaDepartamentoId : number,pUbigeoResidenciaProvinciaId : Number, pUbigeoResidenciaDistritoId : Number,pEstaGestando : boolean,pNumeroHijas : number,pNumeroHijos:number,pComoseConsideraId :number
    ,pLenguaMaterno : string, pPoseeDiscapacidad : boolean, pTipoDiscapacidad : string,pNivelEducativoId : string)
  {

    let headers = new HttpHeaders().set('Type-content','aplication/json')

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
      "tipoDiscapacidad": pTipoDiscapacidad,
      "nivelEducativoId": "string",
      "estudiaEnUnInstituto": pNivelEducativoId
      } , { headers : headers});
  }

  PostEditarFichaRegistro(pPacienteId: number, pNacionalidad : number, pEstadoCivilId : number,pClasificacionSocioEconomicaId : number,pUbigeoNacimientoDepartamentoId : number,pUbigeoNacimientoProvinciaId : number
    ,pUbigeoNacimientoDistritoId : number,pUbigeoResidenciaDepartamentoId : number,pUbigeoResidenciaProvinciaId : Number, pUbigeoResidenciaDistritoId : Number,pEstaGestando : boolean,pNumeroHijas : number,pNumeroHijos:number,pComoseConsideraId :number
    ,pLenguaMaterno : string, pPoseeDiscapacidad : boolean, pTipoDiscapacidad : string,pNivelEducativoId : string)
  {

    let headers = new HttpHeaders().set('Type-content','aplication/json')

    return this.http.post(this._url + 'EditarFichaRegistroByPacienteId', {
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
      "tipoDiscapacidad": pTipoDiscapacidad,
      "nivelEducativoId": "string",
      "estudiaEnUnInstituto": pNivelEducativoId
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
