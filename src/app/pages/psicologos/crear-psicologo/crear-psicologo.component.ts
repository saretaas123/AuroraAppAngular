import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { CargoService} from 'src/app/services/auroraapi/cargo.service'
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service'
import Swal from 'sweetalert2';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-psicologo',
  templateUrl: './crear-psicologo.component.html',
  styleUrls: ['./crear-psicologo.component.css']
})
export class CrearPsicologoComponent implements OnInit {

  g_routeparam_PsicologoId: string = '-3';


  ApiFullobjListarCargo : any ={
    mnsj: "",
    rpta: [
      {
        nombre: "",
        id: 0,
      },
    ]
  };

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


  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.route.snapshot.paramMap.get("psicologoid")??'0';
    this.ObtenerCargosPsicologo();
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

  constructor(
    public dialog:MatDialog,
    private _PsicologoService : PsicologoService,
    private _CargoService : CargoService,
    private _UbigeoService : UbigeoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ObtenerCargosPsicologo(){
    this._CargoService.GetCargoListar().subscribe(apiRpta => {
    this.ApiFullobjListarCargo = apiRpta;
    })
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


  RegistrarPsicologo(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pDni : string,pCorreo : string,pCargo:number,pUbigeo:string,)
  {


    this.html_formAgregarPsicologo_Validaciones_Esvalido(pNombres, pApellidoPaterno,pApellidoMaterno,pDni,pCorreo,pCargo,pUbigeo);
    if(this.AgregarPsicologo_Validacion_EsValido === false)
    {
      Swal.fire(
        'Datos incompletos',
        'Complete porfavor los datos requeridos',
        'error'
      );
      return;
    }

    this._PsicologoService.PostAgregarPsicologos(
      pNombres, pApellidoPaterno, pApellidoMaterno,
      pDni , pCorreo,pCargo,Number(pUbigeo)
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

          this._PsicologoService.filter("AddPsicologo");
          this.dialog.closeAll();

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


  //#region VALIDACIONES

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

  dni = new FormControl('', [Validators.required,Validators.maxLength(15)]);
  getErrorMessageDni() {
    return this.dni.hasError('required') ? 'DNI requerido' :
        '';
  }

  Cargo = new FormControl('', [Validators.required]);
  getErrorMessageCargo() {
    return this.Cargo.hasError('required') ? 'Cargo requerido' :
        '';
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Correo requerido' :
        this.email.hasError('email') ? 'No es un correo valido' :
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




  //#endregion

  //#region VALIDACIONES 2
AgregarPsicologo_Validacion_EsValido = false;
html_formAgregarPsicologo_Validaciones_Esvalido(v_Nombre : any,v_Apellido : any, v_ApellidoMaterno : any,v_Dni : any,
  v_Correo : any,v_Cargo : any,v_Ubigeo : any)
{

  if(v_Nombre === null || v_Nombre === "")
  {
    this.AgregarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Apellido === null || v_Apellido === "")
  {
    this.AgregarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_ApellidoMaterno === null || v_ApellidoMaterno === "")
  {
    this.AgregarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Dni === null || v_Dni === "")
  {
    this.AgregarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Correo === null || v_Correo === "")
  {
    this.AgregarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Cargo===null)
  {
    this.AgregarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Ubigeo===null)
  {
    this.AgregarPsicologo_Validacion_EsValido =  false;
    return;
  }

  this.AgregarPsicologo_Validacion_EsValido = true;
}

//#endregion
}
