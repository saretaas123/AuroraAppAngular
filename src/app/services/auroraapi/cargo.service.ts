import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  _url = 'https://localhost:7226/api/Cargo/';

  constructor(
    private http: HttpClient
  ) {
    console.log('Cargo Service Working')
  }

  GetCargoListar()
  {
      let headers = new HttpHeaders().set('Type-content','aplication/json')

      return this.http.get<any>(this._url + 'ObtenerCargos/');

  }
}
