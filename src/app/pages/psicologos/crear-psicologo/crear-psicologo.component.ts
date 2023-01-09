import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import Swal from 'sweetalert2';

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

interface cargo {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-crear-psicologo',
  templateUrl: './crear-psicologo.component.html',
  styleUrls: ['./crear-psicologo.component.css']
})
export class CrearPsicologoComponent implements OnInit {

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

  cargos: cargo[] = [
    {value: '0', viewValue: 'PSICÓLOGA COMUNITARIA'},
    {value: '1', viewValue: 'ESPECIALISTAS SEDE CENTRAL'},
  ];


  g_routeparam_PsicologoId: string = '-3';


  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.route.snapshot.paramMap.get("psicologoid")??'0';
  }

  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  constructor(
    public dialog:MatDialog,
    private _PsicologoService : PsicologoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }




  RegistrarPsicologo(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pDni : string,pCorreo : string,pCargo:number,pUbigeo:string,)
  {

    this._PsicologoService.PostAgregarPsicologos(
      pNombres, pApellidoPaterno, pApellidoMaterno,
      pDni , pCorreo,pCargo,pUbigeo
      )
      .subscribe(APIrpta => {
        var RegistroExitoso = this.ApiFullobjPsicologoFullInfo.rpta;


        if(RegistroExitoso)
        {
          Swal.fire(
            'Registrado Correctamente',
            ' ',
            'success'
          )

          this._PsicologoService.filter("AddPsicologo");
          this.dialog.closeAll();

        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo registrar',

          })

      }

      })

  }

}
