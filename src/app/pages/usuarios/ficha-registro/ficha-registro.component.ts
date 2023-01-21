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

  /*------FILTRO DE UBIGEO--------*/
  cbo_DepartamentoSelected = null;
  cbo_ProvinciaSelected = null;
  cbo_DistritoSelected = null;


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

  g_FromUser_PsicologoId: string = '1';
  g_routeparam_PacienteId: string = '0';

  public ApiFullobjPacienteFullInfo : any = {
    mnsj: '',
    rpta : {}
  };


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

    console.log("hola");

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



  RegistrarFichaRegistro(
    pNacionalidad : string, pEstadoCivilId : string,pUbigeoNacimientoDepartamentoId : number,pUbigeoNacimientoProvinciaId : number
    ,pUbigeoNacimientoDistritoId : number,pUbigeoResidenciaDepartamentoId : number,pUbigeoResidenciaProvinciaId : Number, pUbigeoResidenciaDistritoId : Number,pEstaGestando : boolean,pNumeroHijas : number,pNumeroHijos:number,pComoseConsideraId :number
    ,pLenguaMaterno : string, pPoseeDiscapacidad : boolean, pTipoDiscapacidad : string,pNivelEducativoId : number,pActualmenteEstudia : boolean, pNivelInstitucionEducativaId : number,pNombreInstitucionEducativa : string
    ,pTipoInstitucionEducativaId : boolean, pUbigeoLugarDondeEstudiaDepartamentoId : number,pUbigeoLugarDondeEstudiaProvinciaId : number, pUbigeoLugarDondeEstudiaDistritoId : number,pPoseeIngresosEconomicosPropios : boolean
    ,pNombreOcupacionLaboralPropia : string,pCuentaConDenunciaInterpuesta :boolean,pContinuaConDenunciaInterpuesta : boolean )
  {
    var RegistroExitoso = false;
    var pPacienteId = this.g_routeparam_PacienteId;

    this._FichaRegistroService.PostRegistrarFichaRegistro(
      Number(pPacienteId),Number(pNacionalidad), Number(pEstadoCivilId),-1,pUbigeoNacimientoDepartamentoId ,pUbigeoNacimientoProvinciaId ,
      pUbigeoNacimientoDistritoId,pUbigeoResidenciaDepartamentoId ,pUbigeoResidenciaProvinciaId,pUbigeoResidenciaDistritoId,pEstaGestando,pNumeroHijas,pNumeroHijos,pComoseConsideraId,
      pLenguaMaterno,pPoseeDiscapacidad,pTipoDiscapacidad,pNivelEducativoId,pActualmenteEstudia,pNivelInstitucionEducativaId,pNombreInstitucionEducativa,
      pTipoInstitucionEducativaId,pUbigeoLugarDondeEstudiaDepartamentoId,pUbigeoLugarDondeEstudiaProvinciaId,pUbigeoLugarDondeEstudiaDistritoId,pPoseeIngresosEconomicosPropios,
      pNombreOcupacionLaboralPropia,pCuentaConDenunciaInterpuesta,pContinuaConDenunciaInterpuesta)
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



}
