import { Component, OnInit,Inject} from '@angular/core';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { CrearUsuarioComponent} from './crear-usuario/crear-usuario.component';
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-usuarios',
  templateUrl: 'usuarios.component.html',
  styleUrls: ['usuarios.component.css']
})

export class UsuariosComponent implements OnInit {


  g_FromUser_PsicologoId: any = 1;

  private ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  public objPsicologoFullInfo : any = {
    nombres: '',
    apellidoMaterno:'',
    apellidoPaterno:'',
    cantPacientes : 0,
    correo : '',
    dni : '',
    especialidad : '',
    numeroDeColegiaturaDelPeru : '',
    psicologoId : 0,
    telefono : '',
    usuarioId : 0
  };

  ngOnInit(): void {
    this.g_FromUser_PsicologoId = this.router.url.split('/')[2];

    this.PsicologoService.GetPsicologoFullInfoByPsicologoId(this.g_FromUser_PsicologoId+"").subscribe(apiRpta => {
    this.ApiFullobjPsicologoFullInfo = apiRpta;
    console.log(this.ApiFullobjPsicologoFullInfo.mnsj);
    this.objPsicologoFullInfo = this.ApiFullobjPsicologoFullInfo.rpta;
  })
  }

  constructor(
    private PsicologoService: PsicologoService,
    private router: Router,
    public dialog:MatDialog,
    private route: ActivatedRoute
  ){

  }

  openDialog()
  {
    this.dialog.open(CrearUsuarioComponent);
  }

}
