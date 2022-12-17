import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Psicologo } from 'src/app/interfaces/psicologo';
import { EditarPsicologoComponent} from '../editar-psicologo/editar-psicologo.component'
import { MatDialog } from '@angular/material/dialog';

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

  displayedColumns: string[] = ['dni','nombre', 'apellidos', 'zona','formularioPro','acciones'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog:MatDialog) { }

  
 //Modal de editar paciente
 openDialog()
 {
   this.dialog.open(EditarPsicologoComponent);
 }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;   
  }


}
