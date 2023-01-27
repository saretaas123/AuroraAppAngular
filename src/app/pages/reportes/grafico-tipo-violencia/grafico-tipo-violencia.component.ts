import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

@Component({
  selector: 'app-grafico-tipo-violencia',
  templateUrl: './grafico-tipo-violencia.component.html',
  styleUrls: ['./grafico-tipo-violencia.component.css']
})
export class GraficoTipoViolenciaComponent implements OnInit {

  html_MostrarTabla : boolean =false;
  @Input() inPutParametersFilter :any = [{
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

  TraerDatosTipoViolencia()
  {
    //#region Parsear Lista de Distritos Filtro
    let temp_listDistrito : Array<number> = [];
    this.inPutParametersFilter.outPut_Distritos.forEach((numeroDistrito : number)=> {
      temp_listDistrito.push(numeroDistrito);
    });
    //#endregion



    console.log("this.inPutParametersFilter:",this.inPutParametersFilter);
    this._EstadisticaPacientesService.PostEstadisticaTipoViolenciaTotal(
      /*this.inPutParametersFilter.outPut_RegionsId*/[],temp_listDistrito,
      Number(this.inPutParametersFilter.outPut_Ano),Number(this.inPutParametersFilter.outPut_EdadMinima),
      Number(this.inPutParametersFilter.outPut_EdadMaxima),String(this.inPutParametersFilter.outPut_TipoViolencia),
      String(this.inPutParametersFilter.outPut_Riesgo)
      ).subscribe(Rpta =>
      {
        this.apiRpta = Rpta;
        this.listStr_TipoViolencia = this.apiRpta.rpta.listTipoViolencia;

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

      });
  }

  apiRpta : any = {
    mnsj: "",
    rpta: {
      listTipoViolencia: [
      ],
      cantidad: 0
    }
  };

  listStr_TipoViolencia : Array<string> = [];


  RealizarEstadistica()
  {
    this.html_MostrarTabla = true;
    this.TraerDatosTipoViolencia();
  }
}
