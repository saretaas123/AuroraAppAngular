import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service';
import { transform } from 'html2canvas/dist/types/css/property-descriptors/transform';

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
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {


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

  g_PacienteId : any;


  public ApiEditarRespuestaModel : any = {
    mnsj: '',
    rpta : {}
  };

  public ApiFullobjPacienteInfo : any = {
    mnsj: "",
    rpta: {
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      fechaNacimiento: "",
      dni: "",
      telefono: "",
      direccionUbigeo: "",
      correo: "",
      siendoAtentido: false,
      tipoViolencia : "",
      riesgo : "",
      fechaDeEvaluacion: "",
      entidadProblema: "",
      modalidadAdministrativo: "",
    }
  };

  public p_modal_InfoPaciente : any = {
    CasoPacienteId : "",
  };

  //#region FILTAR DEPARTAMENTOS
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
//#endregion


  constructor(
    public dialog:MatDialog,
    private PacienteService : PacienteService,
    @Inject(MAT_DIALOG_DATA) public vc_InfoPaciente : any,
    private _UbigeoService:UbigeoService,
    private _casopacienteService : CasopacienteService,
    ) { }

  ngOnInit(): void {
    this.TraerDatosPaciente();
  }

//#region FILTRAR DEPARTAMENTOS
  cbo_DepartamentoSelected : any = null;
  cbo_ProvinciaSelected : any = null;
  cbo_DistritoSelected : any = null;

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
    this.CBODepartamentoEstaDesactivado=true;
    this._UbigeoService.GetDepartamentoListar().subscribe(apiRpta1 => {
      this.ApiFullobjListarDepartamento = apiRpta1;

      this.listDepartamentosForFilter = this.ApiFullobjListarDepartamento.rpta;

      this.listProvinciasForFilter.forEach(itemProvincia => {
        if(itemProvincia.provId === this.cbo_ProvinciaSelected)
        {
          this.cbo_DepartamentoSelected = itemProvincia.depaId;
          console.log("Encontro el departamento")
        }

      });
      console.log("this.cbo_DepartamentoSelected:",this.cbo_DepartamentoSelected);
      this.CBODepartamentoEstaDesactivado=false;
    })
  }

  ObtenerProvincia(){
    let temp_distritoEncontrado : any = "";
    this._UbigeoService.GetProvinciaListar().subscribe(apiRpta2 => {
      this.ApiFullobjListarProvincia = apiRpta2;

      this.listProvinciasForFilter = this.ApiFullobjListarProvincia.rpta;

      this.listDistritosForFilter.forEach(itemDitristro => {
        if(itemDitristro.distId === this.cbo_DistritoSelected)
        {
          this.cbo_ProvinciaSelected = Number(itemDitristro.provId);
          console.log("Encontro la provincia")
        }
      });
      console.log("this.cbo_ProvinciaSelected:",this.cbo_ProvinciaSelected);

      //this.cbo_DistritoSelected = temp_distritoEncontrado.distId;
      this.cbo_ProvinciaSelected = temp_distritoEncontrado.provId;

      this.ObtenerDepartamentos();
      this.CBOPrinvinciaEstaDesactivado = false;
    })
  }

  ObtenerDistrito(){
    this._UbigeoService.GetDistritoListar().subscribe(apiRpta3 => {
      this.ApiFullobjListarDistrito = apiRpta3;

      this.listDistritosForFilter = this.ApiFullobjListarDistrito.rpta;

      this.ObtenerProvincia();
      this.CBODistritoEstaDesactivado = false;
    })
  }
//#endregion



  TraerDatosPaciente()
  {
    this.p_modal_InfoPaciente = this.vc_InfoPaciente;
    this.PacienteService.GetPacienteFullInfoByCasoPacienteId(this.p_modal_InfoPaciente.CasoPacienteId).subscribe(Rpta =>
      {
        this.ApiFullobjPacienteInfo = Rpta;

        var pipe = new DatePipe('en-US');
        this.ApiFullobjPacienteInfo.rpta.fechaNacimiento =  pipe.transform(this.ApiFullobjPacienteInfo.rpta.fechaNacimiento, 'yyyy-MM-dd');
        this.ApiFullobjPacienteInfo.rpta.fechaDeEvaluacion =  pipe.transform(this.ApiFullobjPacienteInfo.rpta.fechaDeEvaluacion, 'yyyy-MM-dd');
        this.cbo_DistritoSelected = this.ApiFullobjPacienteInfo.rpta.direccionUbigeo;

        this.ObtenerDistrito();
      });
  }

  EditarPaciente(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string,pTipoViolencia : string,pRiesgo : string,pFechaDeEvaluacion : any,pEntidadProblema :string,pModalidadAdministrativo :string)
  {
    this.html_formEditarPaciente_Validaciones_Esvalido(pNombres, pApellidoPaterno,pApellidoMaterno,pFechaNacimiento,pDni,pDireccioUbigeo,pTelefono,pCorreo,pFechaDeEvaluacion,pEntidadProblema,pModalidadAdministrativo);
    if(this.EditarPaciente_Validacion_EsValido === false)
    {
      Swal.fire(
        'Datos incompletos',
        'Complete porfavor los datos requeridos',
        'error'
      );
      return;
    }

    var RegistroExitoso = false;
    this.p_modal_InfoPaciente = this.vc_InfoPaciente;
    var pCasoPacienteId = this.p_modal_InfoPaciente.CasoPacienteId;

    //alert("llamara a la api");

    this.PacienteService.PostEditarPaciente(
      Number(pCasoPacienteId),
      pNombres, pApellidoPaterno, pApellidoMaterno,
      pFechaNacimiento ,pDni ,pTelefono ,
      Number(pDireccioUbigeo) ,pCorreo,pTipoViolencia,pRiesgo,pFechaDeEvaluacion,pEntidadProblema,
      pModalidadAdministrativo
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
        this._casopacienteService.filter("EditPaciente");
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

  //#region FILTRAR DEPARTAMENTOS
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

  Distrito_isChanged : number = -1;
  CBODepartamentoEstaDesactivado : boolean = false;
  onChange_DistritoSeleccionado(idProvinciaSeleccionado : any){

    if(this.Distrito_isChanged===-1){
      this.Distrito_isChanged = 0;

      this.cbo_DistritoSelected = idProvinciaSeleccionado;
    }else if(this.Distrito_isChanged===0){
      this.Provincia_isChanged = 1;

      this.cbo_DistritoSelected = idProvinciaSeleccionado;
    }else if(this.Distrito_isChanged===1){
      //Sirve para corregir la seleccion ciclica > NO ELIMINAR
      this.Distrito_isChanged = 0;
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

  //#region VALIDACIONES
  EditarPaciente_Validacion_EsValido = false;
  html_formEditarPaciente_Validaciones_Esvalido(v_Nombre : any,v_Apellido : any, v_ApellidoMaterno : any,v_FechaNacimiento : any,v_Dni : any, v_direccionUbigeo : any,v_Telefono : any,
    v_Correo : any, v_FechaEvaluacion : any,v_EntidadProblema : any,v_Modalidad : any)
  {

    if(v_Nombre === null || v_Nombre === "")
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Apellido === null || v_Apellido === "")
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_direccionUbigeo===null)
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_ApellidoMaterno === null || v_ApellidoMaterno === "")
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_FechaNacimiento===null)
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Dni === null || v_Dni === "")
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Telefono === null || v_Telefono === "")
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Correo === null || v_Correo === "")
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_FechaEvaluacion===null)
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_EntidadProblema === null || v_EntidadProblema === "")
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    if(v_Modalidad===null)
    {
      this.EditarPaciente_Validacion_EsValido =  false;
      return;
    }

    this.EditarPaciente_Validacion_EsValido = true;
  }
//#endregion

}
