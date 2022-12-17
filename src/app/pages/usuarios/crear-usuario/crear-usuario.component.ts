import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  g_routeparam_PsicologoId: string = '0';

  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.route.snapshot.paramMap.get("psicologoid")??'0';
  }

  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  constructor(
    private PacienteService : PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  RegistrarPaciente(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string)
  {
    var RegistroExitoso = false;
    var pPsicologoId = this.g_routeparam_PsicologoId;

    console.log("pPsicologoId:"+pPsicologoId);

    this.PacienteService.PostRegistrarPaciente(
      Number(pPsicologoId),
      pNombres, pApellidoPaterno, pApellidoMaterno,
      pFechaNacimiento ,pDni ,pTelefono ,
      pDireccioUbigeo ,pCorreo
      )
      .subscribe(APIrpta => {

      this.ApiFullobjPsicologoFullInfo = APIrpta;
      RegistroExitoso = this.ApiFullobjPsicologoFullInfo.rpta;
      console.log(this.ApiFullobjPsicologoFullInfo.mnsj);

      if(RegistroExitoso)
      {
        alert('Registrado Correctamente');
      //this.router.navigate(['/dashboard/usuarios']);
      }
      else{
        alert('No se pudo registrar');
      }
    })


  }

}
