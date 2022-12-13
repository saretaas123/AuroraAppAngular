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
                nombre:'Victor',
                apellido:'Bernedo',
                canciones:{
                    nombreCancion:'Perreito',
                    genero:'regueton',    
                    autores:[
                        {nombre:'daddy yanke'},
                        {nombre:'bad bunny',
                        premio:{
                            nombre:'el mas monce',
                            ano:2018,
                            dinero:5
                        }}
                    ]                
                },
                coloresFav:[
                    {
                        nombre:'rojo',
                        tipo:'feliz'
                    },
                    {
                        nombre:'azul',
                        tipo:'molesto',
                    },
                    {
                        nombre:'naranja',
                        tipo:'renegon'
                    }
                ]
              };
        }

 




}