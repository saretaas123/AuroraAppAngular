import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { EstadisticaPacienteService } from 'src/app/services/auroraapi/estadisticaPaciente.service';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { UsuarioService } from 'src/app/services/auroraapi/usuario.service';


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

    console.log('ver verService:');
    console.log(verService);   

    this.imprimiendo=this.EstadisticaPacienteService.peloncito();
  }

  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
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
    console.log("Usuario:"+p_Usuario +" | "+ "Contrasena:"+p_Contrasena);
    this.UsuarioService.PostLoginInterno(p_Usuario,p_Contrasena).subscribe(APIrpta => {

      this.ApiFullobjPsicologoFullInfo = APIrpta;
      LogeoExitoso = this.ApiFullobjPsicologoFullInfo.rpta;
      console.log(this.ApiFullobjPsicologoFullInfo.mnsj);
      if(LogeoExitoso)
      {
        alert('Credenciales correctas');
        this.router.navigate(['/dashboard/1']);
      }
      else{
        alert('Credenciales incorrectas');
      }

    })


  }


}
