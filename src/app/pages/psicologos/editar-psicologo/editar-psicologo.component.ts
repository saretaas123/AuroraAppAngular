import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import Swal from 'sweetalert2';

interface cargo {
  value: number;
  viewValue: string;
}

interface distrito {
  value: string;
  viewValue: string;
}

interface provincia {
  value: string;
  viewValue: string;
}

interface departamento {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editar-psicologo',
  templateUrl: './editar-psicologo.component.html',
  styleUrls: ['./editar-psicologo.component.css']
})
export class EditarPsicologoComponent implements OnInit {

  cargos: cargo[] = [
    {value: 1, viewValue: 'PSICÓLOGA COMUNITARIA'},
    {value: 2, viewValue: 'ESPECIALISTAS SEDE CENTRAL'},
  ];

  distritos: distrito[] = [
    {value: '0', viewValue: 'Bagua'},
    {value: '1', viewValue: 'Chachapoyas'},
    {value: '2', viewValue: 'Huarmey'},
  ];

  provincias: provincia[] = [
    {value: '0', viewValue: 'Bagua'},
    {value: '1', viewValue: 'Chachapoyas'},
    {value: '2', viewValue: 'Huarmey'},
  ];

  departamentos: departamento[] = [
    {value: '0', viewValue: 'Amazonas'},
    {value: '1', viewValue: 'Amazonas'},
    {value: '2', viewValue: 'Anchash'},
  ];


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

  public p_modal_InfoPsicologo : any = {
    PsicologoId : "",
  };

  constructor(
    public dialog:MatDialog,
    private _PsicologoService : PsicologoService,
    @Inject(MAT_DIALOG_DATA) public vc_InfoPsicologo : any,
    ) { }

  ngOnInit(): void {
    this.TraerDatosPsicologo();
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

  EditarPsicologo()
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
