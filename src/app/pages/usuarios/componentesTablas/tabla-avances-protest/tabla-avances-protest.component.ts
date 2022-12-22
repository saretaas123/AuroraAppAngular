import { Component, Input, Output, OnInit ,ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioProtest } from 'src/app/interfaces/usuarioProTest';

var listUsuarios: UsuarioProtest[] = [
  {dni:'',nombre: ' ',
  tipoViolencia:' ',
  riesgo:' ',
   motivacionCambioE: false,
  copersmithE: false,
  nivelTomaDecisionesE: false,
  autonomiaE: false,
  info_MotiCambio : "",
  info_CoperSmith : "",
  info_TomaDeci : "",
  info_Autonomia: ""
  }
];

@Component({
  selector: 'app-tabla-avances-protest',
  templateUrl: './tabla-avances-protest.component.html',
  styleUrls: ['./tabla-avances-protest.component.css']
})
export class TablaAvancesProtestComponent implements OnInit {

  @Input() g_TablaPostTest_PsicologoId: string = '-2';
  @Input() g_TablaPostTest_TablaPaciente: any = {
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

  constructor(
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges)
  {
    if(changes['g_TablaPostTest_TablaPaciente'])
    {
      this.PintarDatosEnLaTabla(this.g_TablaPostTest_TablaPaciente);
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

        postTestAutoestima : any;
        postTestAutoestimaSiMismo : any;
        postTestAutoestimaSocial : any;
        postTestAutoestimaFamiliar : any;

        postTestSensacionDeControlPositivo: any;
        postTestSensacionDeControlNegativo: any;
        postTestDeseoDeControl: any;
        postTestControlInterno: any;
        postTestControlExterno: any;

        postTestPrecontemplacion : any;
        postTestContemplacion : any;
        postTestAccion : any;
        postTestMantenimiento : any;

        postTestCapacidadTomaDecisiones: any; }
      ) => {
        if(element.pacienteDni=== null || element.pacienteDni === ''){return;}

        console.log("element.post:",element);

        listUsuarios.push({
          dni: element.pacienteDni,
          nombre: element.pacienteNombres,
          tipoViolencia:  element.pacienteTipoViolencia,
          riesgo : element.pacienteRiesgo,
          motivacionCambioE :element.examenPostTestAutoestimaCompletado,
          copersmithE : element.examenPostTestAutonomiaCompletado,
          nivelTomaDecisionesE : element.examenPostTestMotivacionAlCambioCompletado,
          autonomiaE : element.examenPostTestTomaDecisionCompletado,
          info_MotiCambio : this.str_DatosMotivacionAlCambio(String(element.postTestSensacionDeControlNegativo),element.postTestSensacionDeControlNegativo ,element.postTestDeseoDeControl ,element.postTestControlInterno ,element.postTestControlExterno ),
          info_CoperSmith : this.str_DatosAutoestima(element.postTestAutoestima,element.postTestAutoestimaSiMismo,element.postTestAutoestimaSocial,element.postTestAutoestimaFamiliar),
          info_TomaDeci : this.str_DatosTomaDecision(element.postTestCapacidadTomaDecisiones),
          info_Autonomia : this.str_DatosAutonomiaControlshapiro(element.postTestPrecontemplacion, element.postTestContemplacion, element.postTestAccion, element.postTestMantenimiento)
        });

      //});

      this.dataSource = new MatTableDataSource(listUsuarios);

    });
  }

  str_DatosAutoestima( Autoestima : string, AutoestimaSiMismo :string, AutoestimaSocial : string, AutestimaFamilia : string )
  {
    return "Autoestima:"+Autoestima + ", "+
    "AutoestimaSiMismo:"+AutoestimaSiMismo + ", "+
    "AutoestimaSocial:"+AutoestimaSocial + ", "+
    "AutestimaFamilia:"+AutestimaFamilia + " ";
  }

  str_DatosAutonomiaControlshapiro( Precontemplacion : string, Contemplacion :string, Accion : string, Mantenimiento : string )
  {
    return "Precontemplacion:"+Precontemplacion + ", "+
    "Contemplacion:"+Contemplacion + ", "+
    "Accion:"+Accion + ", "+
    "Mantenimiento:"+Mantenimiento + " ";
  }

  str_DatosTomaDecision( CapacidadTomaDecisiones : string )
  {
    return "Autoestima:"+ CapacidadTomaDecisiones + " ";
  }

  str_DatosMotivacionAlCambio( SensacionDeControlPositivo : string, SensacionDeControlNegativo : string, DeseoDeControl :string, ControlInterno : string, ControlExterno : string )
  {
    return "CPositivo:"+SensacionDeControlPositivo + ", "+
    "CNegativo:"+SensacionDeControlNegativo + ", "+
    "Deseo Control:"+DeseoDeControl + ", "+
    "CInterno:"+ControlInterno + ", "+
    "CExterno:"+ControlExterno + " ";
  }

}
