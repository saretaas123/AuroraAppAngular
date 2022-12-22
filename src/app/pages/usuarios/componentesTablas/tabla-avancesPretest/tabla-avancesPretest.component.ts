import { Component, Input, Output, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioPretest } from 'src/app/interfaces/usuarioPreTest';

var listUsuarios: UsuarioPretest[] = [
  {dni:' ',nombre: ' ',
  tipoViolencia:' ',
  riesgo:' ',
   motivacionCambioE: false,
  copersmithE: false,
  nivelTomaDecisionesE: false,
  autonomiaE: false,
  info_MotiCambio : '',
  info_CoperSmith : '',
  info_TomaDeci : '',
  info_Autonomia: ''
}

];

@Component({
  selector: 'app-tabla-avancesPretest',
  templateUrl: './tabla-avancesPretest.component.html',
  styleUrls: ['./tabla-avancesPretest.component.css']
})
export class TablaAvancesPretestComponent implements OnInit, OnChanges {

  @Input() g_TablaPreTest_PsicologoId: string = '-4';
  @Input() g_TablaPreTest_TablaPaciente: any = {
    mnsj: '',
    rpta : [{
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
    rpta : [{
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

  displayedColumns: string[] = ['dni','nombre', 'tipoViolencia', 'riesgo', 'motivacionCambioE','copersmithE','nivelTomaDecisionesE',
 'autonomiaE'];
  dataSource = new MatTableDataSource(listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {
    }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if(changes['g_TablaPreTest_TablaPaciente'])
    {
      this.PintarDatosEnLaTabla(this.g_TablaPreTest_TablaPaciente);
    }

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
      element: { pacienteDni: any; pacienteNombres: any; pacienteApellidoPaterno: string; pacienteApellidoMaterno: string; pacienteFechaNacimiento: any;
        examenPreTestAutoestimaCompletado: boolean; examenPreTestAutonomiaCompletado: boolean; examenPreTestMotivacionAlCambioCompletado: boolean; examenPreTestTomaDecisionCompletado: boolean;
        examenPostTestAutoestimaCompletado: boolean; examenPostTestAutonomiaCompletado: boolean; examenPostTestMotivacionAlCambioCompletado: boolean; examenPostTestTomaDecisionCompletado: boolean;
        pacienteTipoViolencia: any; pacienteRiesgo: any; pacienteAnoDeEvaluacion: string;

        preTestAutoestima : any;
        preTestAutoestimaSiMismo : any;
        preTestAutoestimaSocial : any;
        preTestAutoestimaFamiliar : any;

        preTestSensacionDeControlPositivo: any;
        preTestSensacionDeControlNegativo: any;
        preTestDeseoDeControl: any;
        preTestControlInterno: any;
        preTestControlExterno: any;

        preTestPrecontemplacion : any;
        preTestContemplacion : any;
        preTestAccion : any;
        preTestMantenimiento : any;

        preTestCapacidadTomaDecisiones: any; }
      ) => {
        if(element.pacienteDni=== null || element.pacienteDni === ''){return;}

        console.log("element:",element);
        console.log("element.PreTestSensacionDeControlPositivo:",element.preTestSensacionDeControlPositivo);

        listUsuarios.push({
          dni: element.pacienteDni,
          nombre: element.pacienteNombres,
          tipoViolencia:  element.pacienteTipoViolencia,
          riesgo : element.pacienteRiesgo,
          motivacionCambioE :element.examenPreTestMotivacionAlCambioCompletado,
          copersmithE : element.examenPreTestAutoestimaCompletado,
          nivelTomaDecisionesE : element.examenPreTestTomaDecisionCompletado,
          autonomiaE : element.examenPreTestAutonomiaCompletado,
          info_MotiCambio : this.str_DatosMotivacionAlCambio(element.preTestSensacionDeControlPositivo ,element.preTestSensacionDeControlNegativo ,element.preTestDeseoDeControl ,element.preTestControlInterno ,element.preTestControlExterno ),
          info_CoperSmith : this.str_DatosAutoestima(element.preTestAutoestima,element.preTestAutoestimaSiMismo,element.preTestAutoestimaSocial,element.preTestAutoestimaFamiliar),
          info_TomaDeci : this.str_DatosTomaDecision(element.preTestCapacidadTomaDecisiones),
          info_Autonomia : this.str_DatosAutonomiaControlshapiro(element.preTestPrecontemplacion, element.preTestContemplacion, element.preTestAccion, element.preTestMantenimiento)
        });

      });

      this.dataSource = new MatTableDataSource(listUsuarios);
  }


  str_DatosAutoestima( Autoestima : any, AutoestimaSiMismo :any, AutoestimaSocial : any, AutestimaFamilia : any )
  {
    return "Autoestima:"+String(Autoestima) + ","+
    "AutoestimaSiMismo:"+String(AutoestimaSiMismo) + ""+
    "AutoestimaSocial:"+String(AutoestimaSocial) + ""+
    "AutestimaFamilia:"+String(AutestimaFamilia) + "";
  }

  str_DatosAutonomiaControlshapiro( Precontemplacion : any, Contemplacion :any, Accion : any, Mantenimiento : any )
  {
    return "Precontemplacion:"+String(Precontemplacion) + ","+
    "Contemplacion:"+String(Contemplacion) + ","+
    "Accion:"+ String(Accion) + ","+
    "Mantenimiento:"+ String(Mantenimiento) + "";
  }

  str_DatosTomaDecision( CapacidadTomaDecisiones : any )
  {
    return "Autoestima:"+ String(CapacidadTomaDecisiones) + ",";
  }

  str_DatosMotivacionAlCambio( SensacionDeControlPositivo : any, SensacionDeControlNegativo : any, DeseoDeControl :any, ControlInterno : any, ControlExterno : any )
  {
    return "Autoestima:"+ String(SensacionDeControlPositivo) + ",<br/>"+
    "AutoestimaSiMismo:"+ String(SensacionDeControlNegativo) + ",<br/>"+
    "AutoestimaSocial:"+ String(DeseoDeControl) + ",<br/>"+
    "AutoestimaSocial:"+ String(ControlInterno) + ",<br/>"+
    "AutestimaFamilia:"+ String(ControlExterno) + "<br/>";
  }
}
