import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-psicologo',
  templateUrl: './crear-psicologo.component.html',
  styleUrls: ['./crear-psicologo.component.css']
})
export class CrearPsicologoComponent implements OnInit {

  g_routeparam_PsicologoId: string = '-3';


  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.route.snapshot.paramMap.get("psicologoid")??'0';
  }

  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  constructor(
    private _PsicologoService : PsicologoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  RegistrarPsicologo(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string)
  {

    this._PsicologoService.PostAgregarPsicologos(
      pNombres, pApellidoPaterno, pApellidoMaterno,
      pDni ,pTelefono , pCorreo,
      pFechaNacimiento , pDireccioUbigeo //NumeroColegiatura, Especialidad
      )
      .subscribe(APIrpta => {
        var RegistroExitoso = this.ApiFullobjPsicologoFullInfo.rpta;


        if(RegistroExitoso)
        {
          Swal.fire(
            'Registrado Correctamente',
            ' ',
            'success'
          )
        //Aca se actualize la pagina
          this.router.navigate(['/dashboard/'+this.g_routeparam_PsicologoId+'/usuarios']);

        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo registrar',

          })

      }

      })

  }

}
