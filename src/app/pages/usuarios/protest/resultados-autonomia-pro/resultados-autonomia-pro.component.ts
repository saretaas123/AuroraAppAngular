import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  controlPositivo: number;
  controlNegativo: number;
  deseoControl: number;
  controlInterno: number;
  controlExterno:number;
  sensacionControl:string;
  deseo:string;
  agenteControlInterno:string;
  agenteControlExterno:string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {controlPositivo: 40, controlNegativo: 15, deseoControl: 39, controlInterno: 18,controlExterno:3,sensacionControl:'Negativo',deseo:'SI',agenteControlInterno:'SI',agenteControlExterno:'SI'},
 
];

@Component({
  selector: 'app-resultados-autonomia-pro',
  templateUrl: './resultados-autonomia-pro.component.html',
  styleUrls: ['./resultados-autonomia-pro.component.css']
})
export class ResultadosAutonomiaProComponent implements OnInit {
  displayedColumns: string[] = ['controlPositivo', 'controlNegativo', 'deseoControl', 'controlInterno','controlExterno','sensacionControl','deseo','agenteControlInterno','agenteControlExterno'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}