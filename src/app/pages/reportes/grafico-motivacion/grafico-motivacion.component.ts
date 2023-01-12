import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { EstadisticaPacientesService } from 'src/app/services/auroraapi/estadisticaPacientes.service';

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
    this.TraerDatosMotivacionAlCambio();
  }

  TraerDatosMotivacionAlCambio()
  {
    this._EstadisticaPacientesService.PostEstadisticaMotivacionAlCambioTotal([],[],0,0,0,"","").subscribe(Rpta =>
      {
        this.apiRpta = Rpta;
        console.log("apiRpta > Rpta:", this.apiRpta);

        this.listPreTestPrecontemplacion = this.apiRpta.rpta.listPreTestPrecontemplacion;
        this.listPreTestContemplacion = this.apiRpta.rpta.listPreTestContemplacion;
        this.listPreTestAccion = this.apiRpta.rpta.listPreTestAccion;
        this.listPreTestMantenimiento = this.apiRpta.rpta.listPreTestMantenimiento;
        this.listPostTestPrecontemplacion = this.apiRpta.rpta.listPostTestPrecontemplacion;
        this.listPostTestContemplacion = this.apiRpta.rpta.listPostTestContemplacion;
        this.listPostTestAccion = this.apiRpta.rpta.listPostTestAccion;
        this.listPostTestMantenimiento = this.apiRpta.rpta.listPostTestMantenimiento;

        this.barChartData = {
          labels: [ 'Control positiva', 'Control negativa', 'Deseo de control', 'Control interno', 'Control externo' ],
          datasets : [
          { data:
            [
              this.listPreTestPrecontemplacion.filter(x => Number(x)>=21).length,
                this.listPreTestContemplacion.filter(x => Number(x)>=21).length,
                this.listPreTestAccion.filter(x => Number(x)>=21).length,
                this.listPreTestMantenimiento.filter(x => Number(x)>=21).length,
            ], label: 'PreTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' },
            { data:
              [
                this.listPostTestPrecontemplacion.filter(x => Number(x)>=21).length,
                this.listPostTestContemplacion.filter(x => Number(x)>=21).length,
                this.listPostTestAccion.filter(x => Number(x)>=21).length,
                this.listPostTestMantenimiento.filter(x => Number(x)>=21).length,
              ], label: 'PostTest (Cant Total Pacientes: '+this.apiRpta.rpta.cantidad+')' }
        ]
      };

      });
  }

  apiRpta : any = {
    mnsj: "",
    rpta: {
      listPreTestPrecontemplacion: [
      ],
      listPreTestContemplacion: [
      ],
      listPreTestAccion: [
      ],
      listPreTestMantenimiento: [
      ],
      listPostTestPrecontemplacion: [
      ],
      listPostTestContemplacion: [
      ],
      listPostTestAccion: [
      ],
      listPostTestMantenimiento: [
      ],
      cantidad: 0
    }
  };

  listPreTestPrecontemplacion : Array<string> = [];
  listPreTestContemplacion : Array<string> = [];
  listPreTestAccion : Array<string> = [];
  listPreTestMantenimiento : Array<string> = [];
  listPostTestPrecontemplacion : Array<string> = [];
  listPostTestContemplacion : Array<string> = [];
  listPostTestAccion : Array<string> = [];
  listPostTestMantenimiento : Array<string> = [];

}
