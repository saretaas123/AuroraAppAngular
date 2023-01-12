import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

@Component({
  selector: 'app-grafico-nivel-riesgo',
  templateUrl: './grafico-nivel-riesgo.component.html',
  styleUrls: ['./grafico-nivel-riesgo.component.css']
})
export class GraficoNivelRiesgoComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ '...Cargando' ],
    datasets: [
      { data: [ 0 ], label: '...Cargando' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }

  constructor(
    private _EstadisticaPacientesService : EstadisticaPacientesService) { }

  ngOnInit(): void {
    this.TraerDatosNivelRiesgo();
  }

  TraerDatosNivelRiesgo()
  {
    this._EstadisticaPacientesService.PostEstadisticaNivelRiesgoTotal([],[],0,0,0,"","").subscribe(Rpta =>
      {
        this.apiRpta = Rpta;
        this.listStr_NivelRiesgo = this.apiRpta.rpta.listNivelRiesgo;

        this.barChartData = {
          labels: [ 'Leve', 'Moderado', 'Severo' ],
          datasets : [
          { data:
            [
              this.listStr_NivelRiesgo.filter(x => x==="Leve").length,
              this.listStr_NivelRiesgo.filter(x => x==="Moderado").length,
              this.listStr_NivelRiesgo.filter(x => x==="Severo").length
            ], label: this.apiRpta.rpta.cantidad+' Pacientes' }
        ]
      };

      });
  }

  apiRpta : any = {
    mnsj: "",
    rpta: {
      listNivelRiesgo: [
      ],
      cantidad: 6
    }
  };

  listStr_NivelRiesgo : Array<string> = [];

}
