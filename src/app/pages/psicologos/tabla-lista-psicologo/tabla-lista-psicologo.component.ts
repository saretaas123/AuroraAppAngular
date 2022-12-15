import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Psicologo } from 'src/app/interfaces/psicologo';

const listUsuarios: Psicologo[] = [
  {dni:85632542,nombre: 'Jordan', apellidos: 'Peterson Bernt', zona:'Cercado de lima'},
 
 
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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;   
  }


}
