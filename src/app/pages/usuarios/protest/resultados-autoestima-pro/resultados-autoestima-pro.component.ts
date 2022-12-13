import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  totalNumerico: number;
  totalBaremo: number;
  nivel: string;
  siMismo: number;
  social:number;
  familiar:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {totalNumerico: 10, totalBaremo: 40, nivel: 'Medio bajo', siMismo: 3,social:3,familiar:5},
 
];

@Component({
  selector: 'app-resultados-autoestima-pro',
  templateUrl: './resultados-autoestima-pro.component.html',
  styleUrls: ['./resultados-autoestima-pro.component.css']
})
export class ResultadosAutoestimaProComponent implements OnInit {

  displayedColumns: string[] = ['totalNumerico', 'totalBaremo', 'nivel', 'siMismo','social','familiar'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
