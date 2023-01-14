import { Component, Input, Output, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

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
    {value: 'Psicológico', viewValue: 'Psicológico'},
    {value: 'Físico', viewValue: 'Físico'},
    {value: 'Económico', viewValue: 'Económico'},
    {value: 'Sexual', viewValue: 'Sexual'},
  ];

  riesgos: riesgo[] = [
    {value: 'Leve', viewValue: 'Leve'},
    {value: 'Moderado', viewValue: 'Moderado'},
    {value: 'Severo', viewValue: 'Severo'},
  ];

  modalidades: modalidad[] = [
    {value: 'AUTOADMINISTRADO', viewValue: 'AUTOADMINISTRADO'},
    {value: 'ADMINISTRADO POR EL PERSONAL', viewValue: 'ADMINISTRADO POR EL PERSONAL'},
  ];

  g_routeparam_PsicologoId: string = '0';



  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.router.url.split('/')[2];
    /*this.myForm = new FormGroup({
      myName: new FormControl('', [Validators.required]),
      myAddress: new FormControl('', [Validators.required]),
      mycity: new FormControl('', [Validators.required])
      });*/
  }

   /* public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
  }*/


  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };



  constructor(
    public dialog:MatDialog,
    private PacienteService : PacienteService,
    private _casopacienteService : CasopacienteService,
    private router: Router,
    /*public myForm: FormGroup,*/
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private route: ActivatedRoute) {

    }


  RegistrarPaciente(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string,pTipoViolencia : string,pRiesgo : string,pFechaDeEvaluacion : any,pEntidadProblema :string,pModalidadAdministrativo :string)
  {
    var RegistroExitoso = false;
    var pPsicologoId = this.g_routeparam_PsicologoId;

    this.PacienteService.PostRegistrarPaciente(
      Number(pPsicologoId),
      pNombres, pApellidoPaterno, pApellidoMaterno,
      pFechaNacimiento ,pDni ,pTelefono ,
      Number(pDireccioUbigeo) ,pCorreo,pTipoViolencia,pRiesgo,pFechaDeEvaluacion,pEntidadProblema,
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
        );
        //alert('Registrado Correctamente');

        //Aca se actualize la pagina
        this._casopacienteService.filter("AddPaciente");
        this.dialog.closeAll();

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
