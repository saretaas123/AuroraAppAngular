import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  p9: string;
  p10: string;
  p11: string;
  p12: string;
  p13: string;
  p14: string;
  p15: string;
  p16: string;
  p17: string;
  p18: string;
  p19: string;
  p20: string;
  p21: string;
  p22: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { p1: 'V',
    p2: 'V',
    p3: 'F',
    p4: 'F',
    p5: 'F',
    p6: 'V',
    p7: 'V',
    p8: 'F',
    p9: 'V',
    p10: 'V',
    p11: 'V',
    p12: 'F',
    p13: 'V',
    p14: 'V',
    p15: 'F',
    p16: 'V',
    p17: 'F',
    p18: 'V',
    p19: 'V',
    p20: 'V',
    p21: 'F',
    p22: 'V',
    }, 
];

@Component({
  selector: 'app-tabla-resultados-cuestionario',
  templateUrl: './tabla-resultados-cuestionario.component.html',
  styleUrls: ['./tabla-resultados-cuestionario.component.css']
})
export class TablaResultadosCuestionarioComponent implements OnInit {

 displayedColumns: string[] = ['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10','p11','p12','p13','p14','p15','p16','p17','p18','p19','p20','p21','p22'];
  dataSource = ELEMENT_DATA;
  constructor(
    
  ) { }

  ngOnInit(): void {

  }

}
