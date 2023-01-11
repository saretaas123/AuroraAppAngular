import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  _url = 'https://localhost:7226/api/Ubigeo/';

  constructor(
    private http: HttpClient
  ) {
    console.log('Ubigeo Service Working')
  }

  GetDepListar()
  {
      let headers = new HttpHeaders().set('Type-content','aplication/json')

      return this.http.get<any>(this._url + 'ObtenerUbigeoDepartamentos/');

  }
}
