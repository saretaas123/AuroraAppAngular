import { Component, OnInit,Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { CargoService} from 'src/app/services/auroraapi/cargo.service'
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service'
import Swal from 'sweetalert2';

/*interface cargo {
  value: number;
  viewValue: string;
}*/

@Component({
  selector: 'app-editar-psicologo',
  templateUrl: './editar-psicologo.component.html',
  styleUrls: ['./editar-psicologo.component.css']
})
export class EditarPsicologoComponent implements OnInit {

 /* cargos: cargo[] = [
    {value: 1, viewValue: 'PSICÓLOGA COMUNITARIA'},
    {value: 2, viewValue: 'ESPECIALISTAS SEDE CENTRAL'},
  ];*/


  g_PsicologoId : any;

  public ApiEditarRespuestaModel : any = {
    mnsj: '',
    rpta : {}
  };

  public ApiFullobjPsicologoInfo : any = {
    mnsj: "",
    rpta: {
      id: "",
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dni: "",
      correo: "",
      cargoId: "",
      ubigeoId: ""
    }
  };

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

  public p_modal_InfoPsicologo : any = {
    PsicologoId : "",
  };

  constructor(
    public dialog:MatDialog,
    private _PsicologoService : PsicologoService,
    private _CargoService : CargoService,
    private _UbigeoService : UbigeoService,
    @Inject(MAT_DIALOG_DATA) public vc_InfoPsicologo : any,
    ) { }

  ngOnInit(): void {
    this.TraerDatosPsicologo();
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

  TraerDatosPsicologo()
  {
    this.p_modal_InfoPsicologo = this.vc_InfoPsicologo;
    this._PsicologoService.GetPsicologoFullInfoByPsicologoId(this.p_modal_InfoPsicologo.PsicologoId).subscribe(Rpta =>
      {
        this.ApiFullobjPsicologoInfo = Rpta;
        console.log("ApiFullobjPsicologoInfo")
        console.log(this.ApiFullobjPsicologoInfo)
      });
  }

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

  EditarPsicologo(pNombre : string,pApePaterno : string,pApeMaterno : string, pDni : string,
    pCorreo : string,pCargo:number,pUbigeo:string,)
  {


    this.html_formEditarPsicologo_Validaciones_Esvalido(pNombre, pApePaterno,pApeMaterno,pDni,pCorreo,pCargo,pUbigeo);
    if(this.EditarPsicologo_Validacion_EsValido === false)
    {
      Swal.fire(
        'Datos incompletos',
        'Complete porfavor los datos requeridos',
        'error'
      );
      return;
    }

    var RegistroExitoso = false;
    this.p_modal_InfoPsicologo = this.vc_InfoPsicologo;
    var pPsicologoId = this.p_modal_InfoPsicologo.PsicologoId;

    this._PsicologoService.PostEditarPsicologos(Number(pPsicologoId),
      pNombre, pApePaterno, pApeMaterno,
      pDni , pCorreo,Number(pCargo),Number(pUbigeo)
      )
      .subscribe(APIrpta => {

      this.ApiEditarRespuestaModel = APIrpta;
      RegistroExitoso = this.ApiEditarRespuestaModel.rpta;

      if(RegistroExitoso)
      {
        Swal.fire(
          'Registrado Correctamente',
          ' ',
          'success'
        );
        //alert('Registrado Correctamente');

        //Aca se actualize la pagina
        this._PsicologoService.filter("EditPsicologo");
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

//#endregion
EditarPsicologo_Validacion_EsValido = false;
html_formEditarPsicologo_Validaciones_Esvalido(v_Nombre : any,v_Apellido : any, v_ApellidoMaterno : any,v_Dni : any,v_Correo : any, v_Cargo : any,v_Ubigeo : any)
{

  if(v_Nombre === null || v_Nombre === "")
  {
    this.EditarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Apellido === null || v_Apellido === "")
  {
    this.EditarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Dni === null || v_Dni === "")
  {
    this.EditarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Cargo===null)
  {
    this.EditarPsicologo_Validacion_EsValido =  false;
    return;
  }

  if(v_Ubigeo===null)
  {
    this.EditarPsicologo_Validacion_EsValido =  false;
    return;
  }

  this.EditarPsicologo_Validacion_EsValido = true;
}








}
