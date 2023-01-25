import { Component, Input, Output, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service'
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



  ApiFullobjListarDepartamento : any ={
    mnsj: "",
    rpta: [
      {
      depaId: 0,
      nombreDepa: ""
      },
    ]
  };

  ApiFullobjListarProvincia : any ={
    mnsj: "",
    rpta: [
      {
        provId: 0,
        nombreProv: "",
        depaId: 0
      },
    ]
  };

  ApiFullobjListarDistrito : any ={
    mnsj: "",
    rpta: [
      {
        distId: 0,
        nombreDist: "",
        provId: 0
      },
    ]
  };



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

  constructor(
    public dialog:MatDialog,
    private PacienteService : PacienteService,
    private _casopacienteService : CasopacienteService,
    private router: Router,
    private _UbigeoService:UbigeoService,
    /*public myForm: FormGroup,*/
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private route: ActivatedRoute) {

    }


  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.router.url.split('/')[2];
    this.ObtenerDepartamentos();
    this.ObtenerProvincia();
    this.ObtenerDistrito();

  }


  cbo_DepartamentoSelected = null;
  cbo_ProvinciaSelected = null;
  cbo_DistritoSelected = null;

  listDepartamentosForFilter :
  [{
    depaId: 0,
    nombreDepa: ""
  }] = [{ depaId: 0, nombreDepa: "" }];

listProvinciasForFilter :
  [{
    provId: 0,
    nombreProv: "",
    depaId: 0
  }] = [{ provId: 0, nombreProv: "", depaId: 0 }];

listDistritosForFilter :
  [{
    distId: 0,
    nombreDist: "",
    provId: 0
  }] = [{ distId: 0, nombreDist: "", provId: 0 }];


  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  ObtenerDepartamentos(){
    this._UbigeoService.GetDepartamentoListar().subscribe(apiRpta1 => {
      this.ApiFullobjListarDepartamento = apiRpta1;

      this.listDepartamentosForFilter = this.ApiFullobjListarDepartamento.rpta;
    })
  }

  ObtenerProvincia(){
    this._UbigeoService.GetProvinciaListar().subscribe(apiRpta2 => {
      this.ApiFullobjListarProvincia = apiRpta2;

      this.listProvinciasForFilter = this.ApiFullobjListarProvincia.rpta;
    })
  }

  ObtenerDistrito(){
    this._UbigeoService.GetDistritoListar().subscribe(apiRpta3 => {
      this.ApiFullobjListarDistrito = apiRpta3;

      this.listDistritosForFilter = this.ApiFullobjListarDistrito.rpta;
    })
  }

  Departamento_isChanged : number = -1;
  CBOPrinvinciaEstaDesactivado : boolean = true;
  onChange_DepartamentoSeleccionado(idDepartamentoSeleccionado : any){

    if(this.Departamento_isChanged===-1){
      this.Departamento_isChanged = 0;

      this.CBOPrinvinciaEstaDesactivado = false;
      this.CBODistritoEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_Provincia(idDepartamentoSeleccionado);
      this.listDistritosForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===0){
      this.Departamento_isChanged = 1;

      this.CBOPrinvinciaEstaDesactivado = false;
      this.CBODistritoEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_Provincia(idDepartamentoSeleccionado);
      this.listDistritosForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Departamento_isChanged = 0;
    }
  }

  Provincia_isChanged : number = -1;
  CBODistritoEstaDesactivado : boolean = true;
  onChange_ProvinciaSeleccionado(idProvinciaSeleccionado : any){

    if(this.Provincia_isChanged===-1){
      this.Provincia_isChanged = 0;

      this.CBODistritoEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_Distrito(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===0){
      this.Provincia_isChanged = 1;

      this.CBODistritoEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_Distrito(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Provincia_isChanged = 0;
    }
  }

  FiltrarResultados_Departamento_a_Provincia(idDepartamentoSeleccionado : any)
  {
    this.listProvinciasForFilter = this.ApiFullobjListarProvincia.rpta.filter(
        (x:
          {
            provId: 0,
            nombreProv: "",
            depaId: 0
          }) => x.depaId === idDepartamentoSeleccionado);
  }

  FiltrarResultados_Provincia_a_Distrito(idProvinciaSeleccionado : any)
  {
    this.listDistritosForFilter = this.ApiFullobjListarDistrito.rpta.filter(
        (x:
          {
            distId: 0,
            nombreDist: "",
            provId: 0
          }) => x.provId === idProvinciaSeleccionado);
  }

  RegistrarPaciente(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string,pTipoViolencia : string,pRiesgo : string,pFechaDeEvaluacion : any,pEntidadProblema :string,pModalidadAdministrativo :string)
  {

    console.log("Valor de distrito cuando no esta seleccionado:",pDireccioUbigeo)
    this.html_formAgregarPaciente_Validaciones_Esvalido(pNombres, pApellidoPaterno,pApellidoMaterno,pFechaNacimiento,pDni,pDireccioUbigeo,pTelefono,pCorreo,pTipoViolencia,pRiesgo,pFechaDeEvaluacion,pEntidadProblema,pModalidadAdministrativo);
    if(this.AgregarPaciente_Validacion_EsValido === false)
    {
      Swal.fire(
        'Datos incompletos',
        'Complete porfavor los datos requeridos',
        'error'
      );
      return;
    }




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

//#region Validaciones
 /* formvalidation_string_EsNecesario_Activado = false;
  formvalidation_string_EsNecesario(strValue : string, EsNecesario : boolean)
  {
    if(EsNecesario)
    {
      if(strValue.length > 0)
        this.formvalidation_string_EsNecesario_Activado = true;

      if(strValue.length === 0 && this.formvalidation_string_EsNecesario_Activado ===true)
       return true;
    }

    return false;
  }

  formvalidation_string_TamanoMax(strValue : string, tamañoMaximo : number)
  {
    if(strValue.length > tamañoMaximo)
      return true;

    return false;
  }*/



  Nombre = new FormControl('', [Validators.required,Validators.maxLength(32)]);
  getErrorMessageNombre() {
    return this.Nombre.hasError('required') ? 'Nombre requerido' :
        '';
  }

  ApellidoPaterno = new FormControl('', [Validators.required,Validators.maxLength(32)]);
  getErrorMessageApellidoPaterno() {
    return this.ApellidoPaterno.hasError('required') ? 'Apellido Paterno requerido' :
        '';
  }

  ApellidoMaterno = new FormControl('', [Validators.required,Validators.maxLength(32)]);
  getErrorMessageApellidoMaterno() {
    return this.ApellidoMaterno.hasError('required') ? 'Apellido Materno requerido' :
        '';
  }

  FechaNacimiento = new FormControl('', [Validators.required]);
  getErrorMessageFechaNacimiento() {
    return this.FechaNacimiento.hasError('required') ? 'Fecha nacimiento requerido' :
        '';
  }

  dni = new FormControl('', [Validators.required,Validators.maxLength(15)]);
  getErrorMessageDni() {
    return this.dni.hasError('required') ? 'DNI requerido' :
        '';
  }


  Departamento = new FormControl('', [Validators.required]);
  getErrorMessageDepartamento() {
    return this.Departamento.hasError('required') ? 'Departamento requerido' :
        '';
  }

  Provincia = new FormControl('', [Validators.required]);
  getErrorMessageProvincia() {
    return this.Provincia.hasError('required') ? 'Provincia requerido' :
        '';
  }

  Distrito = new FormControl('', [Validators.required]);
  getErrorMessageDistrito() {
    return this.Distrito.hasError('required') ? 'Distrito requerido' :
        '';
  }

  Telefono = new FormControl('', [Validators.required,Validators.maxLength(9)]);
  getErrorMessageTelefono() {
    return this.Telefono.hasError('required') ? 'Telefono requerido' :
        '';
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Correo requerido' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }

  TipoViolencia = new FormControl('', [Validators.required]);
  getErrorMessageTipoViolencia() {
    return this.TipoViolencia.hasError('required') ? 'Tipo Violencia requerido' :
        '';
  }

  Riesgo = new FormControl('', [Validators.required]);
  getErrorMessageRiesgo() {
    return this.Riesgo.hasError('required') ? 'Riesgo requerido' :
        '';
  }

  AnoEvaluacion = new FormControl('', [Validators.required]);
  getErrorMessageAnoEvaluacion() {
    return this.AnoEvaluacion.hasError('required') ? 'Año de Evaluacion requerido' :
        '';
  }

  EntidadProblema = new FormControl('', [Validators.required,Validators.maxLength(32)]);
  getErrorMessageEntidadProblema() {
    return this.EntidadProblema.hasError('required') ? 'Campo requerido' :
        '';
  }

  Modalidad = new FormControl('', [Validators.required]);
  getErrorMessageModalidad() {
    return this.Modalidad.hasError('required') ? 'Modalidad requerido' :
        '';
  }
//#endregion

//#region VALIDACIONES 2
AgregarPaciente_Validacion_EsValido = false;
  html_formAgregarPaciente_Validaciones_Esvalido(v_Nombre : any,v_Apellido : any, v_ApellidoMaterno : any,v_FechaNacimiento : any,v_Dni : any, v_direccionUbigeo : any,v_Telefono : any,
    v_Correo : any,v_TipoViolencia : any,v_Riesgo : any, v_FechaEvaluacion : any,v_EntidadProblema : any,v_Modalidad : any)
  {

    if(v_Nombre === null || v_Nombre === "")
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Apellido === null || v_Apellido === "")
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_direccionUbigeo===null)
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_ApellidoMaterno === null || v_ApellidoMaterno === "")
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_FechaNacimiento===null)
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Dni === null || v_Dni === "")
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Telefono === null || v_Telefono === "")
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Correo === null || v_Correo === "")
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_TipoViolencia===null)
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Riesgo===null)
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_FechaEvaluacion===null)
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_EntidadProblema === null || v_EntidadProblema === "")
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Modalidad===null)
    {
      this.AgregarPaciente_Validacion_EsValido =  false;
      return;
    }

    this.AgregarPaciente_Validacion_EsValido = true;
  }

  //#endregion


}
