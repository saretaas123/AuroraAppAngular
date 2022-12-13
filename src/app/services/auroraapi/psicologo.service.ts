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

    async GetPsicologoFullInfoByPsicologoId(PsicologoId : string) 
    {
       // let headers = new HttpHeaders().set('Type-content','aplication/json')

      //  return this.http.get(this._url + 'ObtenerPsicologoFullInfoById/' +PsicologoId, { headers : headers});

      return {
        "mnsj": "Se encontró el Psicologo",
        "rpta": {
          "psicologoId": 1,
          "nombres": "Jordan",
          "apellidoPaterno": "Peterson",
          "apellidoMaterno": "Bernt",
          "dni": "77777777",
          "telefono": "777 777 777",
          "correo": "JordanBPeterson@gmail.com",
          "numeroDeColegiaturaDelPeru": "77777",
          "especialidad": "Psicolgia Clinica",
          "usuarioId": 2,
          "cantPacientes": 4
        }
      };

    }



}
