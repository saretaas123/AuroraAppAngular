import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class EstadisticaPacientesService {

    _url = 'https://localhost:7226/api/EstadisticaResultados/';

    constructor(
            private http: HttpClient
        ) {

        }

  PostEstadisticaTipoViolenciaTotal(pRegionsId: Array<number>, pDistritosId: Array<number>, pAno : number, pEdadMinima : number,
      pEdadMaxima : number, pTipoViolencia : string, pRiesgo : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.post(this._url + 'ObtenerEstadisticaTipoViolenciaTotal', {
            "regionsId" : pRegionsId,
            "distritosId": pDistritosId,
            "ano": pAno,
            "edadMinima": pEdadMinima,
            "edadMaxima": pEdadMaxima,
            "tipoViolencia": pTipoViolencia,
            "riesgo": pRiesgo
          } , { headers : headers});

    }

    PostEstadisticaNivelRiesgoTotal(pRegionsId: Array<number>, pDistritosId: Array<number>, pAno : number, pEdadMinima : number,
      pEdadMaxima : number, pTipoViolencia : string, pRiesgo : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.post(this._url + 'ObtenerEstadisticaNivelDeRiesgoTotal', {
            "regionsId" : pRegionsId,
            "distritosId": pDistritosId,
            "ano": pAno,
            "edadMinima": pEdadMinima,
            "edadMaxima": pEdadMaxima,
            "tipoViolencia": pTipoViolencia,
            "riesgo": pRiesgo
          } , { headers : headers});

    }





}
