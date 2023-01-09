import { Component, OnInit, Inject } from '@angular/core';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  public ApiFullobjPsicologoFullInfo : any = {
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
      id: "",
      tipoViolencia : "",
      riesgo : "",
      creadoEn: null,
      creadoPor: null,
      editadoEn: null,
      editadoPor: null,
      estaEliminado: false
    }
  };

  public p_modal_InfoPaciente : any = {
    CasoPacienteId : "",
    pacienteTipoViolencia : "",
    pacienteRiesgo :""
  };

  constructor(
    public dialog:MatDialog,
    private PacienteService : PacienteService,
    @Inject(MAT_DIALOG_DATA) public vc_InfoPaciente : any,
    private _casopacienteService : CasopacienteService,
    ) { }

  ngOnInit(): void {
    this.TraerDatosPaciente();
  }

  TraerDatosPaciente()
  {
    this.p_modal_InfoPaciente = this.vc_InfoPaciente;
    this.PacienteService.GetPacienteByCasoPacienteId(this.p_modal_InfoPaciente.CasoPacienteId).subscribe(Rpta =>
      {
        console.log("this.p_modal_InfoPaciente",this.p_modal_InfoPaciente);
        this.ApiFullobjPacienteInfo = Rpta;
        this.ApiFullobjPacienteInfo.rpta.tipoViolencia = this.p_modal_InfoPaciente.pacienteTipoViolencia;
        this.ApiFullobjPacienteInfo.rpta.riesgo = this.p_modal_InfoPaciente.pacienteRiesgo;
      });
  }

  EditarPaciente(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string,pTipoViolencia : string,pRiesgo : string,pFechaDeEvaluacion : any,pEntidadProblema :string,pModalidadAdministrativo :string)
  {

    var RegistroExitoso = false;
    this.p_modal_InfoPaciente = this.vc_InfoPaciente;
    var pCasoPacienteId = this.p_modal_InfoPaciente.CasoPacienteId;

    this.PacienteService.PostEditarPaciente(
      Number(pCasoPacienteId),
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
}
