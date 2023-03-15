import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    _url = 'https://localhost:7226/api/Usuario/';

    constructor(
        private http: HttpClient,
        private _cookieService : CookieService
        ) {
        }

    PostLoginInterno(pUsuario : string, pContrasena : string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.post(this._url+ 'LoginInterno/', {
            "usuario": pUsuario,
            "contrasena": pContrasena
          },{ headers : headers});
    }

    GetObtenerInformacionUsuarioByPsicologoId(PsicologoId : string)
    {
      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.get(this._url + 'ObtenerInformacionUsuarioByPsicologoId/' +PsicologoId, { headers : headers});
    }

    PostEditarContrasena(pPsicologoId:number,pContrasena : string
      )
    {
      let tokenAccess = this._cookieService.get("TokenAccess");
        let headers = new HttpHeaders().set('Type-content','aplication/json')
          .set('Authorization','bearer '+tokenAccess);

        return this.http.post(this._url + 'EditarContrasenaByPsicologoId' , {
          "psicologoId": pPsicologoId,
          "contrasena": pContrasena
        }, { headers : headers});
    }




  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy : string){
    this._listeners.next(filterBy)
  }

}
