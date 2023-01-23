import { Component, OnInit } from '@angular/core';
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service';
import { FichaRegistroService} from 'src/app/services/auroraapi/ficha-registro.service';
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import Swal from 'sweetalert2';


interface estadoCivil {
  value: number;
  viewValue: string;
}

interface clasificacion {
  value: number;
  viewValue: string;
}

interface nacionalidad {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-ficha-registro',
  templateUrl: './ficha-registro.component.html',
  styleUrls: ['./ficha-registro.component.css']
})
export class FichaRegistroComponent implements OnInit {

  g_FromUser_PsicologoId: string = '1';
  g_routeparam_PacienteId: string = '0';

//#region FILTRO UBIGEO
  cbo_DepartamentoSelected = null;
  cbo_ProvinciaSelected = null;
  cbo_DistritoSelected = null;
//#endregion

  public ApiFullobjPacienteFullInfo : any = {
    mnsj: '',
    rpta : {}
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

  public ApiFullobjFichaRegistroFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  estadosCiviles: estadoCivil[] = [
    {value: 0, viewValue: 'Soltera'},
    {value: 1, viewValue: 'Conviviente'},
    {value: 2, viewValue: 'Casada'},
    {value: 3, viewValue: 'Separada'},
    {value: 4, viewValue: 'Divorciada'},
    {value: 5, viewValue: 'viuda'},
  ];

  clasificaciones: clasificacion[] = [
    {value: 0, viewValue: 'No pobre'},
    {value: 1, viewValue: 'Pobre'},
    {value: 2, viewValue: 'pobre Extremo'},
  ];

  nacionalidades: nacionalidad[] = [
    {value: 0, viewValue: 'Peruana'},
    {value: 1, viewValue: 'Extranjera'},
  ];

  constructor(
    private _UbigeoService:UbigeoService,
    private _FichaRegistroService:FichaRegistroService,
    private _PacienteService : PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.g_routeparam_PacienteId = this.router.url.split('/')[2];
    this.ObtenerDepartamentos();
    this.ObtenerProvincia();
    this.ObtenerDistrito();
  }

//#region NACIMIENTO
  listDepartamentosNacimientoForFilter :
  [{
    depaId: 0,
    nombreDepa: ""
  }] = [{ depaId: 0, nombreDepa: "" }];

listProvinciasNacimientoForFilter :
  [{
    provId: 0,
    nombreProv: "",
    depaId: 0
  }] = [{ provId: 0, nombreProv: "", depaId: 0 }];

listDistritosNacimientoForFilter :
  [{
    distId: 0,
    nombreDist: "",
    provId: 0
  }] = [{ distId: 0, nombreDist: "", provId: 0 }];
  //#endregion

//#region RESIDENCIA
    listDepartamentosResidenciaForFilter :
    [{
      depaId: 0,
      nombreDepa: ""
    }] = [{ depaId: 0, nombreDepa: "" }];

  listProvinciasResidenciaForFilter :
    [{
      provId: 0,
      nombreProv: "",
      depaId: 0
    }] = [{ provId: 0, nombreProv: "", depaId: 0 }];

  listDistritosResidenciaForFilter :
    [{
      distId: 0,
      nombreDist: "",
      provId: 0
    }] = [{ distId: 0, nombreDist: "", provId: 0 }];
    //#endregion

//#region ESTUDIO
      listDepartamentosEstudioForFilter :
      [{
        depaId: 0,
        nombreDepa: ""
      }] = [{ depaId: 0, nombreDepa: "" }];

    listProvinciasEstudioForFilter :
      [{
        provId: 0,
        nombreProv: "",
        depaId: 0
      }] = [{ provId: 0, nombreProv: "", depaId: 0 }];

    listDistritosEstudioForFilter :
      [{
        distId: 0,
        nombreDist: "",
        provId: 0
      }] = [{ distId: 0, nombreDist: "", provId: 0 }];
      //#endregion


//#region OBTENER UBIGEO
  ObtenerDepartamentos(){
    this._UbigeoService.GetDepartamentoListar().subscribe(apiRpta1 => {
      this.ApiFullobjListarDepartamento = apiRpta1;

      this.listDepartamentosNacimientoForFilter = this.ApiFullobjListarDepartamento.rpta;
      this.listDepartamentosResidenciaForFilter = this.ApiFullobjListarDepartamento.rpta;
      this.listDepartamentosEstudioForFilter = this.ApiFullobjListarDepartamento.rpta;
    })
  }

  ObtenerProvincia(){
    this._UbigeoService.GetProvinciaListar().subscribe(apiRpta2 => {
      this.ApiFullobjListarProvincia = apiRpta2;

      this.listProvinciasNacimientoForFilter = this.ApiFullobjListarProvincia.rpta;
      this.listProvinciasResidenciaForFilter = this.ApiFullobjListarProvincia.rpta;
      this.listProvinciasEstudioForFilter = this.ApiFullobjListarProvincia.rpta;
    })
  }

  ObtenerDistrito(){
    this._UbigeoService.GetDistritoListar().subscribe(apiRpta3 => {
      this.ApiFullobjListarDistrito = apiRpta3;

      this.listDistritosNacimientoForFilter = this.ApiFullobjListarDistrito.rpta;
      this.listDistritosResidenciaForFilter = this.ApiFullobjListarDistrito.rpta;
      this.listDistritosEstudioForFilter = this.ApiFullobjListarDistrito.rpta;
    })
  }
//#endregion


//#region Ubigeo nacimiento
  Departamento_isChanged : number = -1;
  CBOPrinvinciaNacimientoEstaDesactivado : boolean = true;
  onChange_DepartamentoNacimientoSeleccionado(idDepartamentoSeleccionado : any){

    console.log("hola");

    if(this.Departamento_isChanged===-1){
      this.Departamento_isChanged = 0;

      this.CBOPrinvinciaNacimientoEstaDesactivado = false;
      this.CBODistritoNacimientoEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_ProvinciaNacimiento(idDepartamentoSeleccionado);
      this.listDistritosNacimientoForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===0){
      this.Departamento_isChanged = 1;

      this.CBOPrinvinciaNacimientoEstaDesactivado = false;
      this.CBODistritoNacimientoEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_ProvinciaNacimiento(idDepartamentoSeleccionado);
      this.listDistritosNacimientoForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Departamento_isChanged = 0;
    }
  }

  Provincia_isChanged : number = -1;
  CBODistritoNacimientoEstaDesactivado : boolean = true;
  onChange_ProvinciaNacimientoSeleccionado(idProvinciaSeleccionado : any){

    if(this.Provincia_isChanged===-1){
      this.Provincia_isChanged = 0;

      this.CBODistritoNacimientoEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_DistritoNacimiento(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===0){
      this.Provincia_isChanged = 1;

      this.CBODistritoNacimientoEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_DistritoNacimiento(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Provincia_isChanged = 0;
    }
  }
  //#endregion

//#region Ubigeo Residencia
  CBOPrinvinciaResidenciaEstaDesactivado : boolean = true;
  onChange_DepartamentoResidenciaSeleccionado(idDepartamentoSeleccionado : any){

    console.log("hola");

    if(this.Departamento_isChanged===-1){
      this.Departamento_isChanged = 0;

      this.CBOPrinvinciaResidenciaEstaDesactivado = false;
      this.CBODistritoResidenciaEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_ProvinciaResidencia(idDepartamentoSeleccionado);
      this.listDistritosResidenciaForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===0){
      this.Departamento_isChanged = 1;

      this.CBOPrinvinciaResidenciaEstaDesactivado = false;
      this.CBODistritoResidenciaEstaDesactivado = true;

      this.FiltrarResultados_Departamento_a_ProvinciaResidencia(idDepartamentoSeleccionado);
      this.listDistritosResidenciaForFilter = [{distId: 0,nombreDist: "",provId: 0}];
    }else if(this.Departamento_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Departamento_isChanged = 0;
    }
  }

  CBODistritoResidenciaEstaDesactivado : boolean = true;
  onChange_ProvinciaResidenciaSeleccionado(idProvinciaSeleccionado : any){

    if(this.Provincia_isChanged===-1){
      this.Provincia_isChanged = 0;

      this.CBODistritoResidenciaEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_DistritoResidencia(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===0){
      this.Provincia_isChanged = 1;

      this.CBODistritoResidenciaEstaDesactivado = false;
      this.FiltrarResultados_Provincia_a_DistritoResidencia(idProvinciaSeleccionado);
      this.cbo_DistritoSelected = null;
    }else if(this.Provincia_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Provincia_isChanged = 0;
    }
  }
  //#endregion

//#region Ubigeo Estudio
   CBOPrinvinciaEstudioEstaDesactivado : boolean = true;
   onChange_DepartamentoEstudioSeleccionado(idDepartamentoSeleccionado : any){

     console.log("hola");

     if(this.Departamento_isChanged===-1){
       this.Departamento_isChanged = 0;

       this.CBOPrinvinciaEstudioEstaDesactivado = false;
       this.CBODistritoEstudioEstaDesactivado = true;

       this.FiltrarResultados_Departamento_a_ProvinciaEstudio(idDepartamentoSeleccionado);
       this.listDistritosEstudioForFilter = [{distId: 0,nombreDist: "",provId: 0}];
     }else if(this.Departamento_isChanged===0){
       this.Departamento_isChanged = 1;

       this.CBOPrinvinciaEstudioEstaDesactivado = false;
       this.CBODistritoEstudioEstaDesactivado = true;

       this.FiltrarResultados_Departamento_a_ProvinciaEstudio(idDepartamentoSeleccionado);
       this.listDistritosEstudioForFilter = [{distId: 0,nombreDist: "",provId: 0}];
     }else if(this.Departamento_isChanged===1){
       //Sirve para corregir la seleccion ciclica > NO ELIMINAR
       this.Departamento_isChanged = 0;
     }
   }

   CBODistritoEstudioEstaDesactivado : boolean = true;
   onChange_ProvinciaEstudioSeleccionado(idProvinciaSeleccionado : any){

     if(this.Provincia_isChanged===-1){
       this.Provincia_isChanged = 0;

       this.CBODistritoEstudioEstaDesactivado = false;
       this.FiltrarResultados_Provincia_a_DistritoEstudio(idProvinciaSeleccionado);
       this.cbo_DistritoSelected = null;
     }else if(this.Provincia_isChanged===0){
       this.Provincia_isChanged = 1;

       this.CBODistritoEstudioEstaDesactivado = false;
       this.FiltrarResultados_Provincia_a_DistritoEstudio(idProvinciaSeleccionado);
       this.cbo_DistritoSelected = null;
     }else if(this.Provincia_isChanged===1){
       //Sirve para corregir la seleccion ciclica > NO ELIMINAR
       this.Provincia_isChanged = 0;
     }
   }
   //#endregion



//#region NACIMIENTO
  FiltrarResultados_Departamento_a_ProvinciaNacimiento(idDepartamentoSeleccionado : any)
  {
    this.listProvinciasNacimientoForFilter = this.ApiFullobjListarProvincia.rpta.filter(
        (x:
          {
            provId: 0,
            nombreProv: "",
            depaId: 0
          }) => x.depaId === idDepartamentoSeleccionado);
  }

  FiltrarResultados_Provincia_a_DistritoNacimiento(idProvinciaSeleccionado : any)
  {
    this.listDistritosNacimientoForFilter = this.ApiFullobjListarDistrito.rpta.filter(
        (x:
          {
            distId: 0,
            nombreDist: "",
            provId: 0
          }) => x.provId === idProvinciaSeleccionado);
  }
//#endregion

//#region RESIDENCIA
  FiltrarResultados_Departamento_a_ProvinciaResidencia(idDepartamentoSeleccionado : any)
  {
    this.listProvinciasResidenciaForFilter = this.ApiFullobjListarProvincia.rpta.filter(
        (x:
          {
            provId: 0,
            nombreProv: "",
            depaId: 0
          }) => x.depaId === idDepartamentoSeleccionado);
  }

  FiltrarResultados_Provincia_a_DistritoResidencia(idProvinciaSeleccionado : any)
  {
    this.listDistritosResidenciaForFilter = this.ApiFullobjListarDistrito.rpta.filter(
        (x:
          {
            distId: 0,
            nombreDist: "",
            provId: 0
          }) => x.provId === idProvinciaSeleccionado);
  }
//#endregion

//#region ESTUDIO
FiltrarResultados_Departamento_a_ProvinciaEstudio(idDepartamentoSeleccionado : any)
{
  this.listProvinciasEstudioForFilter = this.ApiFullobjListarProvincia.rpta.filter(
      (x:
        {
          provId: 0,
          nombreProv: "",
          depaId: 0
        }) => x.depaId === idDepartamentoSeleccionado);
}

FiltrarResultados_Provincia_a_DistritoEstudio(idProvinciaSeleccionado : any)
{
  this.listDistritosEstudioForFilter = this.ApiFullobjListarDistrito.rpta.filter(
      (x:
        {
          distId: 0,
          nombreDist: "",
          provId: 0
        }) => x.provId === idProvinciaSeleccionado);
}
//#endregion



//#region REGISTRAR FICHA REGISTRO
  RegistrarFichaRegistro(
    pNacionalidad : string,
    pEstadoCivilId : string,
    pUbigeoNacimientoDepartamentoId : number,
    pUbigeoNacimientoProvinciaId : number,
    pUbigeoNacimientoDistritoId : number,
    pUbigeoResidenciaDepartamentoId : number,
    pUbigeoResidenciaProvinciaId : Number,
    pUbigeoResidenciaDistritoId : Number,
    pEstaGestando : string,
    pNumeroHijas : string,
    pNumeroHijos:string,
    pComoseConsideraId :string,
    pLenguaMaterno : string,
    pPoseeDiscapacidad : string,
    pTipoDiscapacidad : string,
    pNivelEducativoId : string,
    pActualmenteEstudia : string,
    pNivelInstitucionEducativaId : string,
    pNombreInstitucionEducativa : string,
    pTipoInstitucionEducativaId : string,
    pUbigeoLugarDondeEstudiaDepartamentoId : number,
    pUbigeoLugarDondeEstudiaProvinciaId : number,
    pUbigeoLugarDondeEstudiaDistritoId : number,
    pPoseeIngresosEconomicosPropios : string,
    pNombreOcupacionLaboralPropia : string,
    pCuentaConDenunciaInterpuesta :string,
    pContinuaConDenunciaInterpuesta : string )
  {
    var RegistroExitoso = false;
    var pPacienteId = this.g_routeparam_PacienteId;

    this._FichaRegistroService.PostRegistrarFichaRegistro(
      Number(pPacienteId),
      Number(pNacionalidad),
      Number(pEstadoCivilId),
      -1,
      pUbigeoNacimientoDepartamentoId ,
      pUbigeoNacimientoProvinciaId ,
      pUbigeoNacimientoDistritoId,
      pUbigeoResidenciaDepartamentoId ,
      pUbigeoResidenciaProvinciaId,
      pUbigeoResidenciaDistritoId,
      pEstaGestando ==="1"?true:false,
      Number(pNumeroHijas),
      Number(pNumeroHijos),
      Number(pComoseConsideraId),
      pLenguaMaterno,
      pPoseeDiscapacidad ==="1"?true:false,
      pTipoDiscapacidad,
      Number(pNivelEducativoId),
      pActualmenteEstudia ==="1"?true:false,
      Number(pNivelInstitucionEducativaId),
      pNombreInstitucionEducativa,
      pTipoInstitucionEducativaId ==="1"?true:false,
      pUbigeoLugarDondeEstudiaDepartamentoId,
      pUbigeoLugarDondeEstudiaProvinciaId,
      pUbigeoLugarDondeEstudiaDistritoId,
      pPoseeIngresosEconomicosPropios ==="1"?true:false,
      pNombreOcupacionLaboralPropia,
      pCuentaConDenunciaInterpuesta  ==="1"?true:false,
      pContinuaConDenunciaInterpuesta ==="1"?true:false)
      .subscribe(APIrpta => {

        console.log(APIrpta);

      this.ApiFullobjFichaRegistroFullInfo = APIrpta;
      RegistroExitoso = this.ApiFullobjFichaRegistroFullInfo.rpta;
      console.log(this.ApiFullobjFichaRegistroFullInfo.mnsj);

      if(RegistroExitoso)
      {
        Swal.fire(
          'Registrado Correctamente',
          ' ',
          'success'
        );
        //alert('Registrado Correctamente');

        //Aca se actualize la pagina
        this._FichaRegistroService.filter("AddFichaRegistro");


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
  //#endregion



}
