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
      p_Dni:string, p_Correo:string,p_Cargo:number,p_Ubigeo:number
      )
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.post(this._url + 'AgregarPsicologo' , {
          "nombres": p_Nombres,
          "apellidoPaterno": p_ApellidoPaterno,
          "apellidoMaterno": p_ApellidoMaterno,
          "dni": p_Dni,
          "correo": p_Correo,
          "cargoId": p_Cargo,
          "ubigeoId": p_Ubigeo
        }, { headers : headers});
    }

    PostEditarPsicologos(p_id:number,p_Nombres:string, p_ApellidoPaterno:string, p_ApellidoMaterno:string,
      p_Dni:string, p_Correo:string,p_Cargo:number,p_Ubigeo:Number
      )
    {
        let headers = new HttpHeaders().set('Type-content','aplication/json')

        return this.http.put(this._url + 'EditarPsicologo' , {
          "id": p_id,
          "nombres": p_Nombres,
          "apellidoPaterno": p_ApellidoPaterno,
          "apellidoMaterno": p_ApellidoMaterno,
          "dni": p_Dni,
          "correo": p_Correo,
          "cargoId": p_Cargo,
          "ubigeoId": p_Ubigeo
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
