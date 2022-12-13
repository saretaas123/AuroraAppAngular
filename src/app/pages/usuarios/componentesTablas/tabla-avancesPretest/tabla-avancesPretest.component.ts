import { Component, Input, Output, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioPretest } from 'src/app/interfaces/usuarioPreTest';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';

var listUsuarios: UsuarioPretest[] = [
  {dni:' ',nombre: ' ',
  tipoViolencia:' ',
  riesgo:' ',
   motivacionCambioE:' ',
  copersmithE:' ',
  nivelTomaDecisionesE:' ',
  autonomiaE:' '}

];

@Component({
  selector: 'app-tabla-avancesPretest',
  templateUrl: './tabla-avancesPretest.component.html',
  styleUrls: ['./tabla-avancesPretest.component.css']
})
export class TablaAvancesPretestComponent implements OnInit {

  @Input() g_TablaPreTest_PsicologoId: string = '-4';

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

    this.CasopacienteService.GetCasoPacienteByPsicologoId(this.g_TablaPreTest_PsicologoId).subscribe(APIrpta => {
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

          if( element.examenPreTestMotivacionAlCambioCompletado === false)
          {
            temp_str_motivacionCambioE = 'No realizado';
          }
          if( element.examenPreTestAutoestimaCompletado === false)
          {
            temp_str_copersmithE = 'No realizado';
          }
          if( element.examenPreTestTomaDecisionCompletado === false)
          {
            temp_str_nivelTomaDecisionesE = 'No realizado';
          }
          if( element.examenPreTestAutonomiaCompletado === false)
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
