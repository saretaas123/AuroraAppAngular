import { Component, Input, Output, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditarPacienteComponent } from '../editar-paciente/editar-paciente.component';

var listUsuarios: any [] = [
  {dni:'',nombre: '', apellidos: '', edad: 0, preTest: 'Incompleto',proTest: 'Incompleto', casoPacienteId: '0'}
];

@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.css']
})
export class TablaPacienteComponent implements OnInit {

  @Input() g_TablaPacienteComponent_PsicologoId: string = '-2';

  public ApiFullTablaPacientes : any = {
    mnsj: '',
    rpta : [{}]
  };

  public objTablaPacientes : any = [{
    casoPacienteId : '0',
    pacienteId : '0',
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

    this.CasopacienteService.GetCasoPacienteByPsicologoId(this.g_TablaPacienteComponent_PsicologoId).subscribe(APIrpta => {
    listUsuarios = [];

    this.ApiFullTablaPacientes = APIrpta;
    if(this.ApiFullTablaPacientes.rpta===null || this.ApiFullTablaPacientes.rpta===undefined ){
      this.dataSource = new MatTableDataSource(listUsuarios);
      return;
    }


    this.ApiFullTablaPacientes.rpta.forEach((itemTabla: any) => {
      this.objTablaPacientes.push(itemTabla);
    });

    console.log(this.ApiFullTablaPacientes.mnsj);

    this.objTablaPacientes.forEach(
      (
        element: { pacienteDni: any; pacienteNombres: any; pacienteApellidoPaterno: string; pacienteApellidoMaterno: string; pacienteFechaNacimiento: any; casoPacienteId: any;
          examenPreTestAutoestimaCompletado: boolean; examenPreTestAutonomiaCompletado: boolean; examenPreTestMotivacionAlCambioCompletado: boolean; examenPreTestTomaDecisionCompletado: boolean;
          examenPostTestAutoestimaCompletado: boolean; examenPostTestAutonomiaCompletado: boolean; examenPostTestMotivacionAlCambioCompletado: boolean; examenPostTestTomaDecisionCompletado: boolean;           }
        ) => {

          if(element.pacienteDni=== null || element.pacienteDni === ''){return;}

          var temp_preTestStr = 'Incompleto';
          var temp_postTestStr = 'Incompleto';

          if(element.examenPreTestAutoestimaCompletado === true && element.examenPreTestAutonomiaCompletado === true
            && element.examenPreTestMotivacionAlCambioCompletado === true  && element.examenPreTestTomaDecisionCompletado === true )
            {
              temp_preTestStr = 'Completo';
            }

          if(element.examenPostTestAutoestimaCompletado === true && element.examenPostTestAutonomiaCompletado === true
            && element.examenPostTestMotivacionAlCambioCompletado === true  && element.examenPostTestTomaDecisionCompletado === true )
            {
              temp_postTestStr = 'Completo';
            }

            var fechaHoy = Date.now();

            var temp_Añoedad =Number(this.fechapipe.transform(element.pacienteFechaNacimiento, 'yyyy'));
            var temp_Añohoy =Number(this.fechapipe.transform(fechaHoy, 'yyyy'));
            var temp_diferenciaDeEdad = temp_Añohoy - temp_Añoedad;

            var temp_Mesedad =Number(this.fechapipe.transform(element.pacienteFechaNacimiento, 'MM'));
            var temp_Meshoy =Number(this.fechapipe.transform(fechaHoy, 'MM'));

            if( temp_Meshoy < temp_Mesedad )
            {
              temp_diferenciaDeEdad = temp_diferenciaDeEdad - 1 ;

            }else if(temp_Meshoy === temp_Mesedad)
            {
              var temp_Diaedad =Number(this.fechapipe.transform(element.pacienteFechaNacimiento, 'dd'));
              var temp_Diahoy =Number(this.fechapipe.transform(fechaHoy, 'dd'));

              if(temp_Diahoy <= temp_Diaedad)
              {
                temp_diferenciaDeEdad = temp_diferenciaDeEdad- 1 ;
              }
            }


          listUsuarios.push({
            dni: element.pacienteDni,
            nombre: element.pacienteNombres,
            apellidos: element.pacienteApellidoPaterno+ ' ' + element.pacienteApellidoMaterno,
            edad : temp_diferenciaDeEdad,
            preTest : temp_preTestStr,
            proTest : temp_postTestStr,
            casoPacienteId : element.casoPacienteId});
    });

    this.dataSource = new MatTableDataSource(listUsuarios);
  });
  }

  fechapipe = new DatePipe('en-US');

  displayedColumns: string[] = ['dni','nombre', 'apellidos', 'edad', 'preTest','proTest','formularioPre','formularioPro','resumen','acciones'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //SE AGREGO PUBLIC DIALOG:MATDIALOG PARA EL MODAL
  constructor(private CasopacienteService : CasopacienteService,public dialog:MatDialog ) {
   }


 //Modal de editar paciente
   openDialog()
{
  this.dialog.open(EditarPacienteComponent);
}


   actualizarTabla()
   {

   }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
