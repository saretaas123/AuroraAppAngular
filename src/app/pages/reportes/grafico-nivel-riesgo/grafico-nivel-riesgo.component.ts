import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

@Component({
  selector: 'app-grafico-nivel-riesgo',
  templateUrl: './grafico-nivel-riesgo.component.html',
  styleUrls: ['./grafico-nivel-riesgo.component.css']
})
export class GraficoNivelRiesgoComponent implements OnInit {

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
  }

  TraerDatosNivelRiesgo()
  {
    this._EstadisticaPacientesService.PostEstadisticaNivelRiesgoTotal(
      this.inPutParametersFilter.outPut_RegionsId,this.inPutParametersFilter.outPut_Distritos,
      this.inPutParametersFilter.outPut_Ano,this.inPutParametersFilter.outPut_EdadMinima,
      this.inPutParametersFilter.outPut_EdadMaxima,this.inPutParametersFilter.outPut_TipoViolencia,
      this.inPutParametersFilter.outPut_Riesgo
      ).subscribe(Rpta =>
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


  RealizarEstadistica()
  {
    this.html_MostrarTabla = true;
    this.TraerDatosNivelRiesgo();
  }
}
