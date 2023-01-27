import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

@Component({
  selector: 'app-grafico-decisiones',
  templateUrl: './grafico-decisiones.component.html',
  styleUrls: ['./grafico-decisiones.component.css']
})
export class GraficoDecisionesComponent implements OnInit {

  html_MostrarTabla : boolean =false;
  @Input() inPutParametersFilter : any = [{
      outPut_RegionsId : [],
      outPut_Distritos : [],
      outPut_Ano : 0,
      outPut_EdadMinima : 0,
      outPut_EdadMaxima :  0,
      outPut_TipoViolencia : "",
      outPut_Riesgo : "" } ];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.

  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ 'Incipiente', 'En Proceso', 'Capacidad suficiente'],
    datasets: [
      { data: [ 0 ], label: 'PreTest ...Cargando' },
      { data: [ 0 ], label: 'PostTest ...Cargando' }
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
  }

  TraerDatosTomaDecisiones()
  {
    this._EstadisticaPacientesService.PostEstadisticaTomaDeDecisionesTotal(
      this.inPutParametersFilter.outPut_RegionsId,this.inPutParametersFilter.outPut_Distritos,
      this.inPutParametersFilter.outPut_Ano,this.inPutParametersFilter.outPut_EdadMinima,
      this.inPutParametersFilter.outPut_EdadMaxima,this.inPutParametersFilter.outPut_TipoViolencia,
      this.inPutParametersFilter.outPut_Riesgo
      ).subscribe(Rpta =>
      {
        this.apiRpta = Rpta;

        this.listTomaDecisionPreTest_CapacidadTomaDecision = this.apiRpta.rpta.listTomaDecisionPreTest_CapacidadTomaDecision;
        this.listTomaDecisionPostTest_CapacidadTomaDecision = this.apiRpta.rpta.listTomaDecisionPostTest_CapacidadTomaDecision;

        this.barChartData = {
          labels: [ 'Incipiente', 'En Proceso', 'Capacidad suficiente' ],
          datasets : [
          { data:
            [
              this.listTomaDecisionPreTest_CapacidadTomaDecision.filter(x => Number(x)<=17 && Number(x)<=0).length,
              this.listTomaDecisionPreTest_CapacidadTomaDecision.filter(x => Number(x)<=29 && Number(x)>=18).length,
              this.listTomaDecisionPreTest_CapacidadTomaDecision.filter(x => Number(x)<=33 && Number(x)>=30).length,
            ], label: 'PreTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' },
            { data:
              [
                this.listTomaDecisionPostTest_CapacidadTomaDecision.filter(x => Number(x)<=17 && Number(x)<=0).length,
                this.listTomaDecisionPostTest_CapacidadTomaDecision.filter(x => Number(x)<=29 && Number(x)>=18).length,
                this.listTomaDecisionPostTest_CapacidadTomaDecision.filter(x => Number(x)<=33 && Number(x)>=30).length,
              ], label: 'PostTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' }
        ]
      };

      });
  }

  apiRpta : any = {
    mnsj: "",
    rpta: {
      listTomaDecisionPreTest_CapacidadTomaDecision: [
      ],
      listTomaDecisionPostTest_CapacidadTomaDecision: [
      ],
      cantidad: 0
    }
  };

  listTomaDecisionPreTest_CapacidadTomaDecision : Array<string> = [];
  listTomaDecisionPostTest_CapacidadTomaDecision : Array<string> = [];

  RealizarEstadistica()
  {
    this.html_MostrarTabla = true;
    this.TraerDatosTomaDecisiones();
  }

}
