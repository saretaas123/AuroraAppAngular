import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class PsicologoService {

    _url = 'https://localhost:7226/api/Psicologo/';

    constructor(
            private http: HttpClient
        ) {
            console.log('Psicologo Service Working')
        }

    GetPsicologoFullInfoByPsicologoId(PsicologoId : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + 'ObtenerPsicologoFullInfoById/' +PsicologoId, { headers : headers});

    }



}
