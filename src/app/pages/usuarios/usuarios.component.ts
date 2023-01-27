import { Component, OnInit,Inject} from '@angular/core';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { CrearUsuarioComponent} from './crear-usuario/crear-usuario.component';
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UbigeoService } from 'src/app/services/auroraapi/ubigeo.service';



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

  temp_listdistritoEncontrado : any = [
    {
      distId: 0,
      nombreDist: "",
      provId: 0
    }];

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

  public objPsicologoFullInfo : any = {
   /* nombres: '',
    apellidoMaterno:'',
    apellidoPaterno:'',
    cantPacientes : 0,
    correo : '',
    dni : '',
    especialidad : '',
    numeroDeColegiaturaDelPeru : '',
    psicologoId : 0,
    telefono : '',
    usuarioId : 0,*/
    psicologoId: 0,
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dni: "",
    correo: "",
    cargoId: 0,
    ubigeoId: 0,
    ubigeoNombre : "",
    usuarioId: 0,
    cantPacientes: 0
  };

  ngOnInit(): void {
    this.g_FromUser_PsicologoId = this.router.url.split('/')[2];
    this.TraerPsicologo();

  }

  constructor(
    private PsicologoService: PsicologoService,
    private router: Router,
    public dialog:MatDialog,
    private route: ActivatedRoute
  ){

  }

  TraerPsicologo(){

    this.PsicologoService.GetPsicologoFullInfoByPsicologoId(this.g_FromUser_PsicologoId+"").subscribe(apiRpta => {
      this.ApiFullobjPsicologoFullInfo = apiRpta;
      console.log("RPTA:",this.ApiFullobjPsicologoFullInfo.rpta);
      this.objPsicologoFullInfo = this.ApiFullobjPsicologoFullInfo.rpta;
    })
  }

  openDialog()
  {
    this.dialog.open(CrearUsuarioComponent);
  }

}
