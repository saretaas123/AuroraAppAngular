import { Component, Input, Output, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import Swal from 'sweetalert2';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

interface tipoViolencia {
  value: string;
  viewValue: string;
}

interface riesgo {
  value: string;
  viewValue: string;
}

interface modalidad {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  tiposViolencia: tipoViolencia[] = [
    {value: '0', viewValue: 'Psicológico'},
    {value: '1', viewValue: 'Físico'},
    {value: '2', viewValue: 'Económico'},
    {value: '2', viewValue: 'Sexual'},
  ];

  riesgos: riesgo[] = [
    {value: '0', viewValue: 'Leve'},
    {value: '1', viewValue: 'Moderado'},
    {value: '2', viewValue: 'Severo'},
  ];

  modalidades: modalidad[] = [
    {value: '0', viewValue: 'AUTOADMINISTRADO'},
    {value: '1', viewValue: 'ADMINISTRADO POR EL PERSONAL'},
  ];

  g_routeparam_PsicologoId: string = '0';

  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.router.url.split('/')[2];
    console.log(this.editData);
  }



  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  constructor(
    private PacienteService : PacienteService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private route: ActivatedRoute) { }




  RegistrarPaciente(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string,pTipoViolencia : string,pRiesgo : string,pAnoDeEvaluacion : string,pEntidadProblema :string,pModalidadAdministrativo :string)
  {
    var RegistroExitoso = false;
    var pPsicologoId = this.g_routeparam_PsicologoId;

    this.PacienteService.PostRegistrarPaciente(
      Number(pPsicologoId),
      pNombres, pApellidoPaterno, pApellidoMaterno,
      pFechaNacimiento ,pDni ,pTelefono ,
      pDireccioUbigeo ,pCorreo,pTipoViolencia,pRiesgo,pAnoDeEvaluacion,pEntidadProblema,
      pModalidadAdministrativo
      )
      .subscribe(APIrpta => {

        console.log(APIrpta);

      this.ApiFullobjPsicologoFullInfo = APIrpta;
      RegistroExitoso = this.ApiFullobjPsicologoFullInfo.rpta;
      console.log(this.ApiFullobjPsicologoFullInfo.mnsj);

      if(RegistroExitoso)
      {
        Swal.fire(
          'Registrado Correctamente',
          ' ',
          'success'
        )
        //alert('Registrado Correctamente');

        //Aca se actualize la pagina
        this.router.navigate(['/dashboard/'+this.g_routeparam_PsicologoId+'/usuarios']);

      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo registrar',

        })
        //alert('No se pudo registrar');

      }


    })
  }



}
