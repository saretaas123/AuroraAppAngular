import { Component, OnInit } from '@angular/core';
import { UbigeoService} from 'src/app/services/auroraapi/ubigeo.service';
import { FichaRegistroService} from 'src/app/services/auroraapi/ficha-registro.service';
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import { Router } from '@angular/router';
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
  selector: 'app-ficha-registro',
  templateUrl: './ficha-registro.component.html',
  styleUrls: ['./ficha-registro.component.css']
})
export class FichaRegistroComponent implements OnInit {

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

  g_FromUser_PsicologoId: string = '1';
  g_FromUser_PacienteId: string = '1';

  public ApiFullobjPacienteFullInfo : any = {
    mnsj: '',
    rpta : {}
  };


  constructor(
    private _UbigeoService:UbigeoService,
    private _FichaRegistroService:FichaRegistroService,
    private _PacienteService : PacienteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ObtenerDepartamentos();
    this.ObtenerProvincia();
    this.ObtenerDistrito();
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

  RegistrarFichaRegistro(
    pNacionalidad : number, pEstadoCivilId : number,pClasificacionSocioEconomicaId : number,pUbigeoNacimientoDepartamentoId : number,pUbigeoNacimientoProvinciaId : number
    ,pUbigeoNacimientoDistritoId : number,pUbigeoResidenciaDepartamentoId : number,pUbigeoResidenciaProvinciaId : Number, pUbigeoResidenciaDistritoId : Number,pEstaGestando : boolean,pNumeroHijas : number,pNumeroHijos:number,pComoseConsideraId :number
    ,pLenguaMaterno : string, pPoseeDiscapacidad : boolean, pTipoDiscapacidad : string,pNivelEducativoId : number,pActualmenteEstudia : boolean, pNivelInstitucionEducativaId : number,pNombreInstitucionEducativa : string
    ,pTipoInstitucionEducativaId : boolean, pUbigeoLugarDondeEstudiaDepartamentoId : number,pUbigeoLugarDondeEstudiaProvinciaId : number, pUbigeoLugarDondeEstudiaDistritoId : number,pPoseeIngresosEconomicosPropios : boolean
    ,pNombreOcupacionLaboralPropia : string,pCuentaConDenunciaInterpuesta :boolean,pContinuaConDenunciaInterpuesta : boolean )
  {/*
    var RegistroExitoso = false;
    var pPacienteId = this.g_FromUser_PacienteId;

    this._FichaRegistroService.PostRegistrarFichaRegistro(
      Number(pPacienteId),
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


    })*/
  }



}
