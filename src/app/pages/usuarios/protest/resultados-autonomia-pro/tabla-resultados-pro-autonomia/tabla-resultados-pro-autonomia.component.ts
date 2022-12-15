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
  p12: number;
  p13: number;
  p14: number;
  p15: number;
  p16: number;
  p17: number;
  p18: number;
  p19: number;
  p20: number;
  p21: number;
  p22: number;
  p23: number;
  p24: number;
  p25: number;
  p26: number;
  p27: number;
  p28: number;
  p29: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { p1: 2,
    p2: 3,
    p3: 4,
    p4: 1,
    p5: 3,
    p6: 2,
    p7: 1,
    p8: 3,
    p9: 4,
    p10: 3,
    p11: 4,
    p12: 1,
    p13: 3,
    p14: 4,
    p15: 3,
    p16: 2,
    p17: 3,
    p18: 3,
    p19: 1,
    p20: 3,
    p21: 4,
    p22: 3,
    p23: 2,
    p24: 3,
    p25: 3,
    p26: 4,
    p27: 2,
    p28: 2,
    p29: 3,
    }, 
];

@Component({
  selector: 'app-tabla-resultados-pro-autonomia',
  templateUrl: './tabla-resultados-pro-autonomia.component.html',
  styleUrls: ['./tabla-resultados-pro-autonomia.component.css']
})
export class TablaResultadosProAutonomiaComponent implements OnInit {
  displayedColumns: string[] = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16','p17','p18','p19','p20','p21','p22','p23','p24','p25','p26','p27','p28','p21'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
