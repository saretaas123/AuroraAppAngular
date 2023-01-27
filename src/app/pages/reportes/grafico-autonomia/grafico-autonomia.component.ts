import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

@Component({
  selector: 'app-grafico-autonomia',
  templateUrl: './grafico-autonomia.component.html',
  styleUrls: ['./grafico-autonomia.component.css']
})
export class GraficoAutonomiaComponent implements OnInit {

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
    labels: [ 'Control positiva', 'Control negativa', 'Deseo de control', 'Control interno', 'Control externo'],
    datasets: [
      { data: [ 0 ], label: 'PreTest (...Cargando)' },
      { data: [ 0 ], label: 'PostTest (...Cargando)' }
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

  TraerDatosAutonomia()
  {
    this._EstadisticaPacientesService.PostEstadisticaAutonomiaPersonaTotal(
      this.inPutParametersFilter.outPut_RegionsId,this.inPutParametersFilter.outPut_Distritos,
      this.inPutParametersFilter.outPut_Ano,this.inPutParametersFilter.outPut_EdadMinima,
      this.inPutParametersFilter.outPut_EdadMaxima,this.inPutParametersFilter.outPut_TipoViolencia,
      this.inPutParametersFilter.outPut_Riesgo
      ).subscribe(Rpta =>
      {
        this.apiRpta = Rpta;

        this.listPreTestSensacionDeControlPositivo = this.apiRpta.rpta.listPreTestSensacionDeControlPositivo;
        this.listPreTestSensacionDeControlNegativo = this.apiRpta.rpta.listPreTestSensacionDeControlNegativo;
        this.listPreTestDeseoDeControl = this.apiRpta.rpta.listPreTestDeseoDeControl;
        this.listPreTestControlInterno = this.apiRpta.rpta.listPreTestControlInterno;
        this.listPreTestControlExterno = this.apiRpta.rpta.listPreTestControlExterno;
        this.listPostTestSensacionDeControlPositivo = this.apiRpta.rpta.listPostTestSensacionDeControlPositivo;
        this.listPostTestSensacionDeControlNegativo = this.apiRpta.rpta.listPostTestSensacionDeControlNegativo;
        this.listPostTestDeseoDeControl = this.apiRpta.rpta.listPostTestDeseoDeControl;
        this.listPostTestControlInterno = this.apiRpta.rpta.listPostTestControlInterno;
        this.listPostTestControlExterno = this.apiRpta.rpta.listPostTestControlExterno;

        this.barChartData = {
          labels: [ 'Control positiva', 'Control negativa', 'Deseo de control', 'Control interno', 'Control externo' ],
          datasets : [
          { data:
            [
              this.listPreTestSensacionDeControlPositivo.filter(x => Number(x)<=55 && Number(x)>=45).length,
                this.listPreTestSensacionDeControlNegativo.filter(x => Number(x)<=5 && Number(x)>=1).length,
                this.listPreTestDeseoDeControl.filter(x => Number(x)<=55 && Number(x)>=45).length,
                this.listPreTestControlInterno.filter(x => Number(x)>=4 && Number(x)<=5).length,
                this.listPreTestControlExterno.filter(x => Number(x)>=1 || Number(x)<=2).length,
            ], label: 'PreTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' },
            { data:
              [
                this.listPostTestSensacionDeControlPositivo.filter(x => Number(x)<=55 && Number(x)>=45).length,
                this.listPostTestSensacionDeControlNegativo.filter(x => Number(x)<=5 && Number(x)>=1).length,
                this.listPostTestDeseoDeControl.filter(x => Number(x)<=55 && Number(x)>=45).length,
                this.listPostTestControlInterno.filter(x => Number(x)>=4 && Number(x)<=5).length,
                this.listPostTestControlExterno.filter(x => Number(x)>=1 || Number(x)<=2).length,
              ], label: 'PostTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' }
        ]
      };

      });
  }

  apiRpta : any = {
    mnsj: "",
    rpta: {
      listPreTestSensacionDeControlPositivo: [
      ],
      listPreTestSensacionDeControlNegativo: [
      ],
      listPreTestDeseoDeControl: [
      ],
      listPreTestControlInterno: [
      ],
      listPreTestControlExterno: [
      ],
      listPostTestSensacionDeControlPositivo: [
      ],
      listPostTestSensacionDeControlNegativo: [
      ],
      listPostTestDeseoDeControl: [
      ],
      listPostTestControlInterno: [
      ],
      listPostTestControlExterno: [
      ],
      cantidad: 0
    }
  };

  listPreTestSensacionDeControlPositivo : Array<string> = [];
  listPreTestSensacionDeControlNegativo : Array<string> = [];
  listPreTestDeseoDeControl : Array<string> = [];
  listPreTestControlInterno : Array<string> = [];
  listPreTestControlExterno : Array<string> = [];
  listPostTestSensacionDeControlPositivo : Array<string> = [];
  listPostTestSensacionDeControlNegativo : Array<string> = [];
  listPostTestDeseoDeControl : Array<string> = [];
  listPostTestControlInterno : Array<string> = [];
  listPostTestControlExterno : Array<string> = [];

  RealizarEstadistica()
  {
    this.TraerDatosAutonomia();
  }

}
