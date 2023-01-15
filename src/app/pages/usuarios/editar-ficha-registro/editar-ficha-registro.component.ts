import { Component, OnInit,Inject } from '@angular/core';
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service';
import { FichaRegistroService} from 'src/app/services/auroraapi/ficha-registro.service';
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";

interface tipoViolencia {
  value: string;
  viewValue: string;
}

interface clasificacion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editar-ficha-registro',
  templateUrl: './editar-ficha-registro.component.html',
  styleUrls: ['./editar-ficha-registro.component.css']
})
export class EditarFichaRegistroComponent implements OnInit {


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
    {value: '0', viewValue: 'Soltera'},
    {value: '1', viewValue: 'Conviviente'},
    {value: '2', viewValue: 'Casada'},
    {value: '3', viewValue: 'Separada'},
    {value: '4', viewValue: 'Divorciada'},
    {value: '5', viewValue: 'viuda'},
  ];

  clasificaciones: clasificacion[] = [
    {value: '0', viewValue: 'No pobre'},
    {value: '1', viewValue: 'Pobre'},
    {value: '2', viewValue: 'pobre Extremo'},
  ];

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

  g_FromUser_PsicologoId: string = '1';
  g_FromUser_PacienteId: string = '1';
  g_PacienteId : any;

  public ApiFullobjPacienteFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  constructor(
    public dialog:MatDialog,
    private _UbigeoService:UbigeoService,
    private _FichaRegistroService:FichaRegistroService,
    private _PacienteService : PacienteService,
    @Inject(MAT_DIALOG_DATA) public vc_InfoPaciente : any,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.TraerDatosPaciente();
    this.ObtenerDepartamentos();
    this.ObtenerProvincia();
    this.ObtenerDistrito();
  }

  TraerDatosPaciente()
  {
    this.p_modal_InfoPaciente = this.vc_InfoPaciente;
    this._PacienteService.GetPacienteFullInfoByCasoPacienteId(this.p_modal_InfoPaciente.CasoPacienteId).subscribe(Rpta =>
      {
        this.ApiFullobjPacienteInfo = Rpta;
        //this.ApiFullobjPacienteInfo.fechaDeEvaluacion =
      });
  }

  EditarFicheroRegistro(
    pPacienteId: number, pNacionalidad : number, pEstadoCivilId : number,pClasificacionSocioEconomicaId : number,pUbigeoNacimientoDepartamentoId : number,pUbigeoNacimientoProvinciaId : number
    ,pUbigeoNacimientoDistritoId : number,pUbigeoResidenciaDepartamentoId : number,pUbigeoResidenciaProvinciaId : Number, pUbigeoResidenciaDistritoId : Number,pEstaGestando : boolean,pNumeroHijas : number,pNumeroHijos:number,pComoseConsideraId :number
    ,pLenguaMaterno : string, pPoseeDiscapacidad : boolean, pTipoDiscapacidad : string,pNivelEducativoId : number,pActualmenteEstudia : boolean, pNivelInstitucionEducativaId : number,pNombreInstitucionEducativa : string
    ,pTipoInstitucionEducativaId : boolean, pUbigeoLugarDondeEstudiaDepartamentoId : number,pUbigeoLugarDondeEstudiaProvinciaId : number, pUbigeoLugarDondeEstudiaDistritoId : number,pPoseeIngresosEconomicosPropios : boolean
    ,pNombreOcupacionLaboralPropia : string,pCuentaConDenunciaInterpuesta :boolean,pContinuaConDenunciaInterpuesta : boolean)
  {

   /* var RegistroExitoso = false;
    this.p_modal_InfoPaciente = this.vc_InfoPaciente;
    var pCasoPacienteId = this.p_modal_InfoPaciente.CasoPacienteId;

    this._FichaRegistroService.PostEditarFichaRegistro(
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
    })*/

  }

  ObtenerDepartamentos(){
    this._UbigeoService.GetDepartamentoListar().subscribe(apiRpta1 => {
      this.ApiFullobjListarDepartamento = apiRpta1
    })
  }

  ObtenerProvincia(){
    this._UbigeoService.GetProvinciaListar().subscribe(apiRpta2 => {
      this.ApiFullobjListarProvincia = apiRpta2
    })
  }

  ObtenerDistrito(){
    this._UbigeoService.GetDistritoListar().subscribe(apiRpta3 => {
      this.ApiFullobjListarDistrito = apiRpta3
    })
  }

}
