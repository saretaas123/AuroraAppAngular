import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  p5: number;
  p6: number;
  p7: number;
  p8: number;
  p9: number;
  p10: number;
  p11: number; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { p1: 1,
    p2: 2,
    p3: 3,
    p4: 3,
    p5: 3,
    p6: 2,
    p7: 2,
    p8: 3,
    p9: 3,
    p10: 3,
    p11: 1   
    }, 
];

@Component({
  selector: 'app-resultados-decisiones-pre',
  templateUrl: './resultados-decisiones-pre.component.html',
  styleUrls: ['./resultados-decisiones-pre.component.css']
})
export class ResultadosDecisionesPreComponent implements OnInit {
  displayedColumns: string[] = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
