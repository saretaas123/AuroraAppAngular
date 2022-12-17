import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasopacienteService {

  _url = 'https://localhost:7226/api/CasoPaciente/';

  constructor(
    private http: HttpClient
    ) {
    console.log('CasoPaciente Service working')
  }

  GetCasoPacienteByPsicologoId(PsicologoId : string)
  {
      let headers = new HttpHeaders().set('Type-content','aplication/json')

      return this.http.get(this._url + 'ObtenerCasoPacienteByPsicologoId/' +PsicologoId, { headers : headers});

  }

  public GetCasoPaciente_CasoPaciente_ByPacienteId(PacienteId : string)
  {
      let headers = new HttpHeaders().set('Type-content','aplication/json')

      return this.http.get(this._url + 'ObtenerCasoPacienteByPacienteId/' + PacienteId , { headers : headers});
  }

}
