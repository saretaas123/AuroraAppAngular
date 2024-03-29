import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

@Component({
  selector: 'app-grafico-autoestima',
  templateUrl: './grafico-autoestima.component.html',
  styleUrls: ['./grafico-autoestima.component.css']
})
export class GraficoAutoestimaComponent implements OnInit {

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

  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ 'Bajo', 'Medio Bajo', 'Medio Alto', 'Alto' ],
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

  RealizarEstadistica()
  {
    this.html_MostrarTabla = true;
    this.TraerDatosAutoestima();
  }

  public TraerDatosAutoestima()
  {
    this._EstadisticaPacientesService.PostEstadisticaAutoestimaTotal(
      this.inPutParametersFilter.outPut_RegionsId,this.inPutParametersFilter.outPut_Distritos,
      this.inPutParametersFilter.outPut_Ano,this.inPutParametersFilter.outPut_EdadMinima,
      this.inPutParametersFilter.outPut_EdadMaxima,this.inPutParametersFilter.outPut_TipoViolencia,
      this.inPutParametersFilter.outPut_Riesgo
      ).subscribe(Rpta =>
      {
        this.apiRpta = Rpta;

        this.listAutoestimaPreTest_Autoestima = this.apiRpta.rpta.listAutoestimaPreTest_Autoestima;
        this.listAutoestimaPostTest_Autoestima = this.apiRpta.rpta.listAutoestimaPostTest_Autoestima;


        this.barChartData = {
          labels: [ 'Bajo', 'Medio Bajo', 'Medio Alto', 'Alto' ],
          datasets : [
          { data:
            [
              this.listAutoestimaPreTest_Autoestima.filter(x => Number(x)<=35).length,
              this.listAutoestimaPreTest_Autoestima.filter(x => Number(x)<=60 && Number(x)>=36).length,
              this.listAutoestimaPreTest_Autoestima.filter(x => Number(x)<=68 && Number(x)>=61).length,
              this.listAutoestimaPreTest_Autoestima.filter(x => Number(x)<=84 && Number(x)>=69).length,
            ], label: 'PreTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' },
            { data:
              [
                this.listAutoestimaPostTest_Autoestima.filter(x => Number(x)<=35).length,
                this.listAutoestimaPostTest_Autoestima.filter(x => Number(x)<=60 && Number(x)>=36).length,
                this.listAutoestimaPostTest_Autoestima.filter(x => Number(x)<=68 && Number(x)>=61).length,
                this.listAutoestimaPostTest_Autoestima.filter(x => Number(x)<=84 && Number(x)>=69).length,
              ], label: 'PostTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' }
        ]
      };

      });
  }

  apiRpta : any = {
    mnsj: "",
    rpta: {
      listAutoestimaPreTest_Autoestima: [
      ],
      listAutoestimaPostTest_Autoestima: [
      ],
      cantidad: 0
    }
  };

  listAutoestimaPreTest_Autoestima : Array<string> = [];
  listAutoestimaPostTest_Autoestima : Array<string> = [];



}
