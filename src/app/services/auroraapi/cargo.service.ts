import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  _url = 'https://localhost:7226/api/Cargo/';

  constructor(
    private http: HttpClient,
    private _cookieService : CookieService
  ) {

  }

  GetCargoListar()
  {
    let tokenAccess = this._cookieService.get("TokenAccess");
      let headers = new HttpHeaders().set('Type-content','aplication/json')
        .set('Authorization','bearer '+tokenAccess);

      return this.http.get<any>(this._url + 'ObtenerCargos/', { headers });

  }
}
