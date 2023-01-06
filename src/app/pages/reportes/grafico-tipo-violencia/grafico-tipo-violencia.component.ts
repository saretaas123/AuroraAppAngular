import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

@Component({
  selector: 'app-grafico-tipo-violencia',
  templateUrl: './grafico-tipo-violencia.component.html',
  styleUrls: ['./grafico-tipo-violencia.component.css']
})
export class GraficoTipoViolenciaComponent implements OnInit {

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
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  constructor(
    private _EstadisticaPacientesService : EstadisticaPacientesService) { }

  ngOnInit(): void {
    this.TraerDatosTipoViolencia();
  }

  TraerDatosTipoViolencia()
  {
    this._EstadisticaPacientesService.PostEstadisticaTipoViolenciaTotal([],[],0,0,0,"","").subscribe(Rpta =>
      {
        this.apiRpta = Rpta;
        this.listStr_TipoViolencia = this.apiRpta.rpta.listTipoViolencia;

        console.log( this.listStr_TipoViolencia);

        this.barChartData = {
          labels: [ 'Psicológico', 'Físico', 'Económico', 'Sexual' ],
          datasets : [
          { data:
            [
              this.listStr_TipoViolencia.filter(x => x==="Psicológico").length,
              this.listStr_TipoViolencia.filter(x => x==="Físico").length,
              this.listStr_TipoViolencia.filter(x => x==="Económico").length,
              this.listStr_TipoViolencia.filter(x => x==="Sexual").length,
            ], label: this.apiRpta.rpta.cantidad+' Pacientes' }
        ]
      };

        console.log( this.listStr_TipoViolencia);

      });
  }

  apiRpta : any = {
    mnsj: "",
    rpta: {
      listTipoViolencia: [
      ],
      cantidad: 6
    }
  };

  listStr_TipoViolencia : Array<string> = [];


}
