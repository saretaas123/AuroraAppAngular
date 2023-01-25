import { Component, Input, Output, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditarPacienteComponent } from '../editar-paciente/editar-paciente.component';
import { CrearUsuarioComponent } from '../../crear-usuario/crear-usuario.component';
import { EditarFichaRegistroComponent} from '../../editar-ficha-registro/editar-ficha-registro.component';
import * as XLSX from 'xlsx';

var listUsuarios: any [] = [
  {dni:'',nombre: '', apellidos: '', edad: 0, preTest: 'Incompleto',proTest: 'Incompleto', casoPacienteId: '0',pacienteTipoViolencia:'',pacienteRiesgo:'', poseeFichaRegistro : '0'}
];

@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.css']
})
export class TablaPacienteComponent implements OnInit, OnChanges {

  @Input() g_TablaPacienteComponent_PsicologoId: string = '-2';
  @Input() g_TablaPacienteComponent_TablaPaciente: any = {
    mnsj: '',
    rpta : [{
      casoPacienteId : '0',
      pacienteId : '0',
      poseeFichaRegistro : 0,
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
      pacienteNombres : '',
      pacienteTipoViolencia : '',
      pacienteRiesgo : '',
      pacienteAnoDeEvaluacion : '',
      postTestAccion : "0",
      postTestAutoestima : "0",
      postTestAutoestimaFamiliar : "0",
      postTestAutoestimaSiMismo : "0",
      postTestAutoestimaSocial : "0",
      postTestCapacidadTomaDecisiones : "0",
      postTestContemplacion : "0",
      postTestControlExterno : "0",
      postTestControlInterno : "0",
      postTestDeseoDeControl : "0",
      postTestMantenimiento : "0",
      postTestPrecontemplacion : "0",
      postTestSensacionDeControlNegativo : "0",
      postTestSensacionDeControlPositivo : "0",
      preTestAccion : "0",
      preTestAutoestima : "0",
      preTestAutoestimaFamiliar : "0",
      preTestAutoestimaSiMismo : "0",
      preTestAutoestimaSocial : "0",
      preTestCapacidadTomaDecisiones : "0",
      preTestContemplacion : "0",
      preTestControlExterno : "0",
      preTestControlInterno : "0",
      preTestDeseoDeControl : "0",
      preTestMantenimiento : "0",
      preTestPrecontemplacion : "0",
      preTestSensacionDeControlNegativo : "0",
      preTestSensacionDeControlPositivo : "0"
    }]
  };

  public ApiFullTablaPacientes : any = {
    mnsj: '',
    rpta : [{}]
  };

  public objTablaPacientes : any = [{
    casoPacienteId : '0',
    pacienteId : '0',
    poseeFichaRegistro : 0,
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
    pacienteNombres : '',
    pacienteTipoViolencia : '',
    pacienteRiesgo : '',
    pacienteAnoDeEvaluacion : '',
    postTestAccion : "0",
    postTestAutoestima : "0",
    postTestAutoestimaFamiliar : "0",
    postTestAutoestimaSiMismo : "0",
    postTestAutoestimaSocial : "0",
    postTestCapacidadTomaDecisiones : "0",
    postTestContemplacion : "0",
    postTestControlExterno : "0",
    postTestControlInterno : "0",
    postTestDeseoDeControl : "0",
    postTestMantenimiento : "0",
    postTestPrecontemplacion : "0",
    postTestSensacionDeControlNegativo : "0",
    postTestSensacionDeControlPositivo : "0",
    preTestAccion : "0",
    preTestAutoestima : "0",
    preTestAutoestimaFamiliar : "0",
    preTestAutoestimaSiMismo : "0",
    preTestAutoestimaSocial : "0",
    preTestCapacidadTomaDecisiones : "0",
    preTestContemplacion : "0",
    preTestControlExterno : "0",
    preTestControlInterno : "0",
    preTestDeseoDeControl : "0",
    preTestMantenimiento : "0",
    preTestPrecontemplacion : "0",
    preTestSensacionDeControlNegativo : "0",
    preTestSensacionDeControlPositivo : "0"
  }];

  ngOnInit(): void {
    listUsuarios = [];
  }

  fechapipe = new DatePipe('en-US');

  displayedColumns: string[] = ['dni','nombre', 'apellidos', 'edad', 'preTest','proTest','formularioPre','formularioPro','resumen','acciones','acciones2'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //SE AGREGO PUBLIC DIALOG:MATDIALOG PARA EL MODAL
  constructor(private CasopacienteService : CasopacienteService,public dialog:MatDialog ) {
   }

   editarUsuario(){
    this,this.dialog.open(CrearUsuarioComponent,{

    })
   }


 //Modal de editar paciente
   openDialog(CasoPacienteId : any)
{
  this.dialog.open(EditarPacienteComponent,{
    data : {CasoPacienteId }
  }).afterClosed().subscribe(val=>{
    if(val ==='Guardar'){
      this.ngOnInit;
    }

  })
}


   actualizarTabla()
   {

   }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if(changes['g_TablaPacienteComponent_TablaPaciente'])
    {
      this.PintarDatosEnLaTabla(this.g_TablaPacienteComponent_TablaPaciente);
    }

  }

  CalcularEdadSegunNacimiento(fechaNacimiento : any, fechaHoy : any)
  {
    var temp_Añoedad =Number(this.fechapipe.transform(fechaNacimiento, 'yyyy'));
    var temp_Añohoy =Number(this.fechapipe.transform(fechaHoy, 'yyyy'));
    var temp_diferenciaDeEdad = temp_Añohoy - temp_Añoedad;

    var temp_Mesedad =Number(this.fechapipe.transform(fechaNacimiento, 'MM'));
    var temp_Meshoy =Number(this.fechapipe.transform(fechaHoy, 'MM'));

    if( temp_Meshoy < temp_Mesedad )
    {
      temp_diferenciaDeEdad = temp_diferenciaDeEdad - 1 ;

    }else if(temp_Meshoy === temp_Mesedad)
    {
      var temp_Diaedad =Number(this.fechapipe.transform(fechaNacimiento, 'dd'));
      var temp_Diahoy =Number(this.fechapipe.transform(fechaHoy, 'dd'));

      if(temp_Diahoy <= temp_Diaedad)
      {
        temp_diferenciaDeEdad = temp_diferenciaDeEdad- 1 ;
      }
    }

    return temp_diferenciaDeEdad;
  }

  PintarDatosEnLaTabla(p_ApiFullTabla : any)
  {

    if(p_ApiFullTabla.rpta===null || p_ApiFullTabla.rpta===undefined ){
      this.dataSource = new MatTableDataSource(listUsuarios);
      return;
    }

    p_ApiFullTabla.rpta.forEach((itemTabla: any) => {
      this.objTablaPacientes.push(itemTabla);
    });

    this.objTablaPacientes.forEach(
      (
        element: { pacienteDni: any; pacienteNombres: any; pacienteApellidoPaterno: string; pacienteApellidoMaterno: string; pacienteFechaNacimiento: any; casoPacienteId: any;
          examenPreTestAutoestimaCompletado: boolean; examenPreTestAutonomiaCompletado: boolean; examenPreTestMotivacionAlCambioCompletado: boolean; examenPreTestTomaDecisionCompletado: boolean;
          examenPostTestAutoestimaCompletado: boolean; examenPostTestAutonomiaCompletado: boolean; examenPostTestMotivacionAlCambioCompletado: boolean; examenPostTestTomaDecisionCompletado: boolean;
          pacienteTipoViolencia : string, pacienteRiesgo :string , poseeFichaRegistro : any         }
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

          var temp_diferenciaDeEdad = this.CalcularEdadSegunNacimiento(element.pacienteFechaNacimiento, fechaHoy);

          console.log("Tabla paciente element:",element);

          listUsuarios.push({
            dni: element.pacienteDni,
            nombre: element.pacienteNombres,
            apellidos: element.pacienteApellidoPaterno+ ' ' + element.pacienteApellidoMaterno,
            edad : temp_diferenciaDeEdad,
            preTest : temp_preTestStr,
            proTest : temp_postTestStr,
            casoPacienteId : element.casoPacienteId,
            pacienteTipoViolencia : element.pacienteTipoViolencia,
            pacienteRiesgo : element.pacienteRiesgo,
            poseeFichaRegistro : element.poseeFichaRegistro});

    this.dataSource = new MatTableDataSource(listUsuarios);
  });

  }

  DescargarExcel_PacientesOfPsicologo()
  {
    var Title = "PacienteData";
    var FileName = "PacienteData.xlsx";

    let element = document.getElementById('excel-PacienteTable');
    const ws:XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.g_TablaPacienteComponent_TablaPaciente.rpta);

    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, Title);

    XLSX.writeFile(wb, FileName);
  }


}
