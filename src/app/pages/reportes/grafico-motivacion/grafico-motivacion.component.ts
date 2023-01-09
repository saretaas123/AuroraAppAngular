import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafico-motivacion',
  templateUrl: './grafico-motivacion.component.html',
  styleUrls: ['./grafico-motivacion.component.css']
})
export class GraficoMotivacionComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ 'PreContemplativo', 'Contemplantivo', 'Accion', 'Mantenimiento'],
    datasets: [
      { data: [ 65, 59, 80, 81 ], label: 'PreTest' },
      { data: [ 28, 48, 40, 19 ], label: 'PostTest' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  /*public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
