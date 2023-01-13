import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { UsuarioService} from 'src/app/services/auroraapi/usuario.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-contrasena',
  templateUrl: './editar-contrasena.component.html',
  styleUrls: ['./editar-contrasena.component.css']
})
export class EditarContrasenaComponent implements OnInit {
  g_PsicologoId : any;


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

  public ApiFullobjContrasenaUsuarioInfo : any = {
    mnsj: "",
    rpta: {
    codigoUsuario:"",
    contrasena: "",
    psicologoId: 0,
    }
  };

  public p_modal_InfoPsicologo : any = {
    id : "",
  };

  constructor(
    public dialog:MatDialog,
    private _PsicologoService : PsicologoService,
    private _Usuario : UsuarioService,
    @Inject(MAT_DIALOG_DATA) public vc_InfoPsicologo : any,
  ) { }

  ngOnInit(): void {
    this.TraerDatosPsicologo();
    this.PintarDatosUsuarioContrasena();
  }

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

  PintarDatosUsuarioContrasena()
  {
    this.p_modal_InfoPsicologo = this.vc_InfoPsicologo;
    this._Usuario.GetObtenerInformacionUsuarioByPsicologoId(this.p_modal_InfoPsicologo.PsicologoId).subscribe(Rpta =>
      {
        this.ApiFullobjContrasenaUsuarioInfo = Rpta;
        console.log("ApiFullobjPsicologoInfo")
        console.log(this.ApiFullobjContrasenaUsuarioInfo)
      });
  }

  EditarContrasena()
  {

    Swal.fire(
      'Registrado Correctamente',
      ' ',
      'success'
    )

    this._PsicologoService.filter("AddPsicologo");
    this.dialog.closeAll();

  }

}
