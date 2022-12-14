import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

//ANGULAR MATERIAL
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReportesComponent } from './reportes/reportes.component';
import {MatInputModule} from '@angular/material/input';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { PretestComponent } from './usuarios/pretest/pretest.component';
import { ProtestComponent } from './usuarios/protest/protest.component';
import { MotivacionComponent } from './usuarios/cuestionarios/motivacion/motivacion.component';
import { AutoestimaComponent } from './usuarios/cuestionarios/autoestima/autoestima.component';
import { AutonomiaComponent } from './usuarios/cuestionarios/autonomia/autonomia.component';
import { DecisionesComponent } from './usuarios/cuestionarios/decisiones/decisiones.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { TablaAvancesPretestComponent } from './usuarios/componentesTablas/tabla-avancesPretest/tabla-avancesPretest.component';
import { TablaPacienteComponent } from './usuarios/componentesTablas/tabla-paciente/tabla-paciente.component';
import { PestanaPacienteComponent } from './usuarios/pestana-paciente/pestana-paciente.component';

import {MatTabsModule} from '@angular/material/tabs';
import { TablaAvancesProtestComponent } from './usuarios/componentesTablas/tabla-avances-protest/tabla-avances-protest.component';

//GRAFICOS
import { NgChartsModule } from 'ng2-charts';
import { GraficoTipoViolenciaComponent } from './reportes/grafico-tipo-violencia/grafico-tipo-violencia.component';
import { GraficoAutoestimaComponent } from './reportes/grafico-autoestima/grafico-autoestima.component';
import { GraficoNivelRiesgoComponent } from './reportes/grafico-nivel-riesgo/grafico-nivel-riesgo.component';
import { GraficoDecisionesComponent } from './reportes/grafico-decisiones/grafico-decisiones.component';
import { GraficoMotivacionComponent } from './reportes/grafico-motivacion/grafico-motivacion.component';
import { GraficoAutonomiaComponent } from './reportes/grafico-autonomia/grafico-autonomia.component';
import { PruebaComponent } from './prueba/prueba.component';
import { LoginIComponent } from './login-i/login-i.component';
import { ResultadosAutoestimaPreComponent } from './usuarios/pretest/resultados-autoestima-pre/resultados-autoestima-pre.component';
import { ResultadosAutonomiaPreComponent } from './usuarios/pretest/resultados-autonomia-pre/resultados-autonomia-pre.component';
import { ResultadosAutonomiaProComponent } from './usuarios/protest/resultados-autonomia-pro/resultados-autonomia-pro.component';
import { ResultadosAutoestimaProComponent } from './usuarios/protest/resultados-autoestima-pro/resultados-autoestima-pro.component';









@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
    ReportesComponent,
    CrearUsuarioComponent,
    PretestComponent,
    ProtestComponent,
    MotivacionComponent,
    AutoestimaComponent,
    AutonomiaComponent,
    DecisionesComponent,
    TablaAvancesPretestComponent,
    TablaPacienteComponent,
    PestanaPacienteComponent,
    TablaAvancesProtestComponent,
    GraficoTipoViolenciaComponent,
    GraficoAutoestimaComponent,
    GraficoNivelRiesgoComponent,
    GraficoDecisionesComponent,
    GraficoMotivacionComponent,
    GraficoAutonomiaComponent,
    PruebaComponent,
    LoginIComponent,
    ResultadosAutoestimaPreComponent,
    ResultadosAutonomiaPreComponent,
    ResultadosAutonomiaProComponent,
    ResultadosAutoestimaProComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    NgChartsModule,

    HttpClientModule

  ],
  exports:[
    DashboardComponent,
    UsuariosComponent,
    MatTableModule,
    ReportesComponent,
    MatFormFieldModule,
    MatInputModule,


  ]
})
export class PagesModule { }
