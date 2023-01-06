import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs';

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

    GetPsicologos()
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.get(this._url + '' , { headers : headers});
    }

    PostAgregarPsicologos(p_Nombres:string, p_ApellidoPaterno:string, p_ApellidoMaterno:string,
      p_Dni:string, p_Telefono:string, p_Correo:string, p_NumeroDeColegiaturaDelPeru:string,
      p_Especialidad:string)
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.post(this._url + 'AgregarPsicologo' , {
          "nombres": p_Nombres,
          "apellidoPaterno": p_ApellidoPaterno,
          "apellidoMaterno": p_ApellidoMaterno,
          "dni": p_Dni,
          "telefono": p_Telefono,
          "correo": p_Correo,
          "numeroDeColegiaturaDelPeru": p_NumeroDeColegiaturaDelPeru,
          "especialidad": p_Especialidad
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
