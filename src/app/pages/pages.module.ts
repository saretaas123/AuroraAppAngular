import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { PretestComponent } from './usuarios/pretest/pretest.component';
import { ProtestComponent } from './usuarios/protest/protest.component';
import { MotivacionComponent } from './usuarios/cuestionarios/motivacion/motivacion.component';
import { AutoestimaComponent } from './usuarios/cuestionarios/autoestima/autoestima.component';
import { AutonomiaComponent } from './usuarios/cuestionarios/autonomia/autonomia.component';
import { DecisionesComponent } from './usuarios/cuestionarios/decisiones/decisiones.component';
import { TablaAvancesPretestComponent } from './usuarios/componentesTablas/tabla-avancesPretest/tabla-avancesPretest.component';
import { TablaPacienteComponent } from './usuarios/componentesTablas/tabla-paciente/tabla-paciente.component';
import { PestanaPacienteComponent } from './usuarios/pestana-paciente/pestana-paciente.component';
import { TablaAvancesProtestComponent } from './usuarios/componentesTablas/tabla-avances-protest/tabla-avances-protest.component';
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

import { TablaResultadosCuestionarioComponent } from './usuarios/pretest/resultados-autoestima-pre/tabla-resultados-cuestionario/tabla-resultados-cuestionario.component';
import { TablaResultadosCuestionarioAutonomiaPreComponent } from './usuarios/pretest/resultados-autonomia-pre/tabla-resultados-cuestionario-autonomia-pre/tabla-resultados-cuestionario-autonomia-pre.component';
import { PsicologosComponent } from './psicologos/psicologos.component';
import { VerResumenComponent } from './usuarios/ver-resumen/ver-resumen.component';

//ANGULAR MATERIAL
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

//WEB SERVICES
import { CookieService } from 'ngx-cookie-service';

//GRAFICOS
import { NgChartsModule } from 'ng2-charts';

//HTTP
import { HttpClientModule } from '@angular/common/http';
import { TablaListaPsicologoComponent } from './psicologos/tabla-lista-psicologo/tabla-lista-psicologo.component';
import { VerPacienteXPsicologoComponent } from './psicologos/ver-paciente-xpsicologo/ver-paciente-xpsicologo.component';
import { CrearPsicologoComponent } from './psicologos/crear-psicologo/crear-psicologo.component';
import { TablaResultadosProAutoComponent } from './usuarios/protest/resultados-autoestima-pro/tabla-resultados-pro-auto/tabla-resultados-pro-auto.component';
import { TablaResultadosProAutonomiaComponent } from './usuarios/protest/resultados-autonomia-pro/tabla-resultados-pro-autonomia/tabla-resultados-pro-autonomia.component';
import { ResultadosMotivacionPreComponent } from './usuarios/pretest/resultados-motivacion-pre/resultados-motivacion-pre.component';
import { ResultadosDecisionesPreComponent } from './usuarios/pretest/resultados-decisiones-pre/resultados-decisiones-pre.component';
import { ResultadosDecisionesProComponent } from './usuarios/protest/resultados-decisiones-pro/resultados-decisiones-pro.component';
import { ResultadosMotivacionProComponent } from './usuarios/protest/resultados-motivacion-pro/resultados-motivacion-pro.component';
import { EditarPacienteComponent } from './usuarios/componentesTablas/editar-paciente/editar-paciente.component';
import { EditarPsicologoComponent } from './psicologos/editar-psicologo/editar-psicologo.component';
import { AutoestimaPreComponent } from './usuarios/cuestionarios/autoestima/autoestima-pre/autoestima-pre.component';
import { AutonomiaPreComponent } from './usuarios/cuestionarios/autonomia/autonomia-pre/autonomia-pre.component';
import { DecisionesPreComponent } from './usuarios/cuestionarios/decisiones/decisiones-pre/decisiones-pre.component';
import { MotivacionPreComponent } from './usuarios/cuestionarios/motivacion/motivacion-pre/motivacion-pre.component';
import { MotivacionPostComponent } from './usuarios/cuestionarios/motivacion/motivacion-post/motivacion-post.component';
import { AutonomiaPostComponent } from './usuarios/cuestionarios/autonomia/autonomia-post/autonomia-post.component';
import { DecisionesPostComponent } from './usuarios/cuestionarios/decisiones/decisiones-post/decisiones-post.component';
import { AutoestimaPostComponent } from './usuarios/cuestionarios/autoestima/autoestima-post/autoestima-post.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { FichaRegistroComponent } from './usuarios/ficha-registro/ficha-registro.component';
import { FichaRegistroComponent } from './usuarios/ficha-registro/ficha-registro.component';
import { EditarFichaRegistroComponent } from './usuarios/editar-ficha-registro/editar-ficha-registro.component';
import { VerUsuarioContrasenaPsicoComponent } from './psicologos/ver-usuario-contrasena-psico/ver-usuario-contrasena-psico.component';
import { EditarContrasenaComponent } from './psicologos/editar-contrasena/editar-contrasena.component';
import { FormsModule } from '@angular/forms';






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
    TablaResultadosCuestionarioComponent,
    TablaResultadosCuestionarioAutonomiaPreComponent,
    PsicologosComponent,
    TablaListaPsicologoComponent,
    VerPacienteXPsicologoComponent,
    CrearPsicologoComponent,
    TablaResultadosProAutoComponent,
    TablaResultadosProAutonomiaComponent,
    ResultadosMotivacionPreComponent,
    ResultadosDecisionesPreComponent,
    ResultadosDecisionesProComponent,
    ResultadosMotivacionProComponent,
    EditarPacienteComponent,
    EditarPsicologoComponent,
    VerResumenComponent,
    AutoestimaPreComponent,
    AutonomiaPreComponent,
    DecisionesPreComponent,
    MotivacionPreComponent,
    MotivacionPostComponent,
    AutonomiaPostComponent,
    DecisionesPostComponent,
    AutoestimaPostComponent,
    FichaRegistroComponent,
    EditarFichaRegistroComponent,
    VerUsuarioContrasenaPsicoComponent,
    EditarContrasenaComponent,
  ],
  entryComponents:[EditarPacienteComponent],
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
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule



  ],
  providers:[
    CookieService
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
