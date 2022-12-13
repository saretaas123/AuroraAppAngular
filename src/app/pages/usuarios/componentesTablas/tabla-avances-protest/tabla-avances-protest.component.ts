import { Component, Input, Output, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioProtest } from 'src/app/interfaces/usuarioProTest';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';

var listUsuarios: UsuarioProtest[] = [
  {dni:'',nombre: ' ',
  tipoViolencia:' ',
  riesgo:' ',
   motivacionCambioE:' ',
  copersmithE:' ',
  nivelTomaDecisionesE:' ',
  autonomiaE:' '}
];

@Component({
  selector: 'app-tabla-avances-protest',
  templateUrl: './tabla-avances-protest.component.html',
  styleUrls: ['./tabla-avances-protest.component.css']
})
export class TablaAvancesProtestComponent implements OnInit {

  @Input() g_TablaPostTest_PsicologoId: string = '-2';

  public ApiFullTablaPacientes : any = {
    mnsj: '',
    rpta : [{}]
  };

  public objTablaPacientes : any = [{
    examenPreTestAutoestimaCompletado: false,
    examenPreTestAutonomiaCompletado: false,
    examenPreTestMotivacionAlCambioCompletado: false,
    examenPreTestTomaDecisionCompletado: false,
    examenPostTestAutoestimaCompletado: false,
    examenPostTestAutonomiaCompletado: false,
    examenPostTestMotivacionAlCambioCompletado: false,
    examenPostTestTomaDecisionCompletado: false,
    pacienteApellidoMaterno: '',
    pacienteApellidoPaterno:'',
    pacienteDni:'',
    pacienteFechaNacimiento : 0,
    pacienteNombres : ''
  }];


  ngOnInit(): void {

    this.CasopacienteService.GetCasoPacienteByPsicologoId(this.g_TablaPostTest_PsicologoId).subscribe(APIrpta => {
      console.log(APIrpta);
      listUsuarios = [];

      this.ApiFullTablaPacientes = APIrpta;
      if(this.ApiFullTablaPacientes.rpta===null || this.ApiFullTablaPacientes.rpta===undefined ){
        this.dataSource = new MatTableDataSource(listUsuarios);
        return;
      }

      this.ApiFullTablaPacientes.rpta.forEach((itemTabla: any) => {
        this.objTablaPacientes.push(itemTabla);
      });


    this.objTablaPacientes.forEach(
      (
        element: { pacienteDni: any; pacienteNombres: any; pacienteApellidoPaterno: string; pacienteApellidoMaterno: string; pacienteFechaNacimiento: any;
          examenPreTestAutoestimaCompletado: boolean; examenPreTestAutonomiaCompletado: boolean; examenPreTestMotivacionAlCambioCompletado: boolean; examenPreTestTomaDecisionCompletado: boolean;
          examenPostTestAutoestimaCompletado: boolean; examenPostTestAutonomiaCompletado: boolean; examenPostTestMotivacionAlCambioCompletado: boolean; examenPostTestTomaDecisionCompletado: boolean;           }
        ) => {
          if(element.pacienteDni=== null || element.pacienteDni === ''){return;}

          var temp_str_motivacionCambioE = '';
          var temp_str_copersmithE = '';
          var temp_str_nivelTomaDecisionesE = '';
          var temp_str_autonomiaE = '';

          if( element.examenPostTestAutoestimaCompletado === false)
          {
            temp_str_motivacionCambioE = 'No realizado';
          }
          if( element.examenPostTestAutonomiaCompletado === false)
          {
            temp_str_copersmithE = 'No realizado';
          }
          if( element.examenPostTestMotivacionAlCambioCompletado === false)
          {
            temp_str_nivelTomaDecisionesE = 'No realizado';
          }
          if( element.examenPostTestTomaDecisionCompletado === false)
          {
            temp_str_autonomiaE = 'No realizado';
          }

          listUsuarios.push({
            dni: element.pacienteDni,
            nombre: element.pacienteNombres,
            tipoViolencia:  'Sin Registrar',
            riesgo : 'Sin Registrar',
            motivacionCambioE :temp_str_motivacionCambioE,
            copersmithE : temp_str_copersmithE,
            nivelTomaDecisionesE : temp_str_nivelTomaDecisionesE,
            autonomiaE : temp_str_autonomiaE
          });

        });

        this.dataSource = new MatTableDataSource(listUsuarios);

    });
  }
  displayedColumns: string[] = ['dni','nombre', 'tipoViolencia', 'riesgo', 'motivacionCambioE','copersmithE','nivelTomaDecisionesE',
  'autonomiaE'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private CasopacienteService : CasopacienteService
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
