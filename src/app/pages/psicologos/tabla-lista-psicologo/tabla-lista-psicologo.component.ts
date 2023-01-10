import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Psicologo } from 'src/app/interfaces/psicologo';
import { EditarPsicologoComponent} from '../editar-psicologo/editar-psicologo.component'
import { MatDialog } from '@angular/material/dialog';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { Router } from '@angular/router';

const listUsuarios: Psicologo[] = [
  {dni:85632542,nombre: 'Jordan', apellidos: 'Peterson Bernt', zona:'Cercado de lima'},
  {dni:85632542,nombre: 'Melisa', apellidos: 'Peterson Bernt', zona:'Cercado de lima'},
  {dni:85632542,nombre: 'Julia', apellidos: 'Peterson Bernt', zona:'Cercado de lima'},
  {dni:85632542,nombre: 'Carla', apellidos: 'Peterson Bernt', zona:'Cercado de lima'},


];

@Component({
  selector: 'app-tabla-lista-psicologo',
  templateUrl: './tabla-lista-psicologo.component.html',
  styleUrls: ['./tabla-lista-psicologo.component.css']
})
export class TablaListaPsicologoComponent implements OnInit {

  public ApiRptaFullTablaPsicologos : any = {
    mnsj: '',
    rpta : [{
      id: "0",
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dni: "",
      telefono: "",
      correo: "",
      numeroDeColegiaturaDelPeru: "",
      especialidad: "",
      usuarioId: "0"
    }]
  };


  displayedColumns: string[] = ['dni','nombre', 'apellidos', 'zona','formularioPro','acciones','acciones2'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog:MatDialog,
    private _PsicologoService : PsicologoService,
    private router: Router) {

      this._PsicologoService.listen().subscribe((m:any) => {
        this.API_TraerDatosPsicologos();
      })

    }


 //Modal de editar paciente
 openDialog(PsicologoId : string)
 {
   this.dialog.open(EditarPsicologoComponent,
    {
      data : { PsicologoId }
    });
 }

  ngOnInit(): void {
    this.API_TraerDatosPsicologos()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  API_TraerDatosPsicologos()
  {
    this._PsicologoService.GetPsicologos().subscribe(APIrpta => {
      this.ApiRptaFullTablaPsicologos = APIrpta;
    });
  }


  RedireccionarALaPaginaDePacientes(PsicologoId : any)
  {
    this.router.navigate(['/dashboard/'+PsicologoId+'/listaPacienteXPsicologo']);
    //redirect to dashboard/1/listaPacienteXPsicologo
  }

}
