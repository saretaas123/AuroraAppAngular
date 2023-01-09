import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import Swal from 'sweetalert2';

interface cargo {
  value: string;
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
    {value: '0', viewValue: 'PSICÓLOGA COMUNITARIA'},
    {value: '1', viewValue: 'ESPECIALISTAS SEDE CENTRAL'},
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

  constructor(
    private _PsicologoService : PsicologoService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
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
