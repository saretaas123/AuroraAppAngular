import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  _url = 'https://localhost:7226/api/Ubigeo/';

  constructor(
    private http: HttpClient,
    private _cookieService : CookieService
  ) {
  }

  GetDepartamentoListar()
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get<any>(this._url + 'ObtenerUbigeoDepartamentos/', { headers });

  }

  GetProvinciaListar()
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get<any>(this._url + 'ObtenerUbigeoProvincias/', { headers });

  }

  GetDistritoListar()
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get<any>(this._url + 'ObtenerUbigeoDistritos/', { headers });

  }

}
