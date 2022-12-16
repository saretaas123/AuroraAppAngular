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
  selector: 'app-resultados-autoestima-pre',
  templateUrl: './resultados-autoestima-pre.component.html',
  styleUrls: ['./resultados-autoestima-pre.component.css']
})
export class ResultadosAutoestimaPreComponent implements OnInit {
  displayedColumns: string[] = ['totalNumerico', 'totalBaremo', 'nivel', 'siMismo','social','familiar'];
  dataSource = ELEMENT_DATA;



  constructor() { }

  ngOnInit(): void {
  }

}
