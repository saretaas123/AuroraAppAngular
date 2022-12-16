import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class EstadisticaPacienteService {

    _url = 'https://localhost:7226/api/Paciente/';

    constructor(
            private http: HttpClient
        ) {
            console.log('Estado Paciente oki')
        }

        peloncito(){           
            return {
                totalNumerico:10,
                totalBaremo:40,
                nivel:'nivel',
                siMismo:3,
                social:3,
                familiar:5,       
             
              };
        }

 




}