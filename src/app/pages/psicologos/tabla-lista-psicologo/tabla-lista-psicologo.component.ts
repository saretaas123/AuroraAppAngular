import { Component, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Psicologo } from 'src/app/interfaces/psicologo';
import { EditarPsicologoComponent} from '../editar-psicologo/editar-psicologo.component';
import { EditarContrasenaComponent} from '../editar-contrasena/editar-contrasena.component';
import { VerUsuarioContrasenaPsicoComponent} from '../ver-usuario-contrasena-psico/ver-usuario-contrasena-psico.component'
import { MatDialog } from '@angular/material/dialog';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { Router } from '@angular/router';

const listUsuarios: Psicologo[] = [
];

@Component({
  selector: 'app-tabla-lista-psicologo',
  templateUrl: './tabla-lista-psicologo.component.html',
  styleUrls: ['./tabla-lista-psicologo.component.css']
})
export class TablaListaPsicologoComponent implements OnInit, OnChanges {

  public ApiRptaFullTablaPsicologos : any = {
    mnsj: '',
    rpta : [{
      /*id: "0",
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dni: "",
      telefono: "",
      correo: "",
      numeroDeColegiaturaDelPeru: "",
      especialidad: "",
      usuarioId: "0",*/
      psicologoId: 0,
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dni: "",
      correo: "",
      cargoId: 0,
      ubigeoId: 0,
      usuarioId: 0,
      cantPacientes: 0
    }]
  };


  displayedColumns: string[] = ['dni','nombre', 'apellidos', 'zona','formularioPro','acciones','acciones2','acciones3'];
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

 openDialogVerUsuarioContrasena(PsicologoId : string)
 {
   this.dialog.open(VerUsuarioContrasenaPsicoComponent,
    {
      data : { PsicologoId }
    });
 }

 openDialogEditarContrasena(PsicologoId : string)
 {
   this.dialog.open(EditarContrasenaComponent,
    {
      data : { PsicologoId }
    });
 }

  ngOnInit(): void {
    this.API_TraerDatosPsicologos()
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if(changes['g_TablaPsicologoComponent_TablaPsicologo'])
    {
      this.API_TraerDatosPsicologos();
    }

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
