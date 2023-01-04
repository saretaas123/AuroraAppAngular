import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { EstadisticaPacienteService } from 'src/app/services/auroraapi/estadisticaPaciente.service';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { UsuarioService } from 'src/app/services/auroraapi/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login-i',
  templateUrl: './login-i.component.html',
  styleUrls: ['./login-i.component.css']
})
export class LoginIComponent  implements OnInit {

  public imprimiendo:any={
    nombre:'',
    apellido:'',
    canciones:{
      nombreCancion:'',
      genero:'',
      autores:[
        {nombre:''},
        {nombre:'',
        premio:{
            nombre:'',
            ano:'',
            dinero:''
        }}
    ]
    },
    coloresFav:[
      {
          nombre:'',
          tipo:''
      },
      {
          nombre:'',
          tipo:'',
      },
      {
          nombre:'',
          tipo:''
      }
  ]
  };





  ngOnInit(): void {
    var verService=this.EstadisticaPacienteService.peloncito();

    this.imprimiendo=this.EstadisticaPacienteService.peloncito();
  }

  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {
      rpta : false,
      usuarioId : 0,
      psicologoId : 0
    }
  };

  public objPsicologoFullInfo : any = {
    nombres: '',
    apellidoMaterno:'',
    apellidoPaterno:'',
    cantPacientes : 0,
    correo : '',
    dni : '',
    especialidad : '',
    numeroDeColegiaturaDelPeru : '',
    psicologoId : 0,
    telefono : '',
    usuarioId : 0
  };

  constructor(
    private UsuarioService: UsuarioService,
    private EstadisticaPacienteService:EstadisticaPacienteService,
    private router: Router
  ) {


   }

  Logearse(p_Usuario : string, p_Contrasena : string)
  {
    var LogeoExitoso = false;

    this.UsuarioService.PostLoginInterno(p_Usuario,p_Contrasena).subscribe(APIrpta => {
      this.ApiFullobjPsicologoFullInfo = APIrpta;
      LogeoExitoso = this.ApiFullobjPsicologoFullInfo.rpta.rpta;
      console.log(APIrpta);
      console.log(APIrpta);
      if(LogeoExitoso)
      {

        Swal.fire(
          'Credenciales correctas',
          'Bienvenida ',
          'success'
        )

        //alert('Credenciales correctas');
        this.router.navigate(['/dashboard/'+this.ApiFullobjPsicologoFullInfo.rpta.psicologoId]);
      }
      else{

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Credenciales incorrectas',

        })
        //alert('Credenciales incorrectas');
      }

    })


  }


}
