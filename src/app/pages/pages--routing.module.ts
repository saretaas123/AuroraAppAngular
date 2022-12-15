import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { PretestComponent } from './usuarios/pretest/pretest.component';
import { ProtestComponent } from './usuarios/protest/protest.component';
import { AutoestimaComponent } from './usuarios/cuestionarios/autoestima/autoestima.component';
import { AutonomiaComponent } from './usuarios/cuestionarios/autonomia/autonomia.component';
import { DecisionesComponent } from './usuarios/cuestionarios/decisiones/decisiones.component';
import { MotivacionComponent } from './usuarios/cuestionarios/motivacion/motivacion.component';
import { ResultadosAutoestimaPreComponent } from './usuarios/pretest/resultados-autoestima-pre/resultados-autoestima-pre.component';
import { ResultadosAutonomiaPreComponent } from './usuarios/pretest/resultados-autonomia-pre/resultados-autonomia-pre.component';
import { ResultadosMotivacionPreComponent} from './usuarios/pretest/resultados-motivacion-pre/resultados-motivacion-pre.component';
import { ResultadosDecisionesPreComponent} from './usuarios/pretest/resultados-decisiones-pre/resultados-decisiones-pre.component';
import { ResultadosAutonomiaProComponent } from './usuarios/protest/resultados-autonomia-pro/resultados-autonomia-pro.component';
import { ResultadosAutoestimaProComponent } from './usuarios/protest/resultados-autoestima-pro/resultados-autoestima-pro.component';
import { ResultadosMotivacionProComponent} from './usuarios/protest/resultados-motivacion-pro/resultados-motivacion-pro.component';
import { ResultadosDecisionesProComponent} from './usuarios/protest/resultados-decisiones-pro/resultados-decisiones-pro.component';

import { PsicologosComponent } from './psicologos/psicologos.component';
import { VerPacienteXPsicologoComponent} from './psicologos/ver-paciente-xpsicologo/ver-paciente-xpsicologo.component';
import { CrearPsicologoComponent} from './psicologos/crear-psicologo/crear-psicologo.component'

import { PruebaComponent } from './prueba/prueba.component';
import { LoginIComponent } from './login-i/login-i.component';


const routes:Routes=[
  {path:'dashboard/:psicologoid', component:PagesComponent,
   children:[
    {path:'',component:DashboardComponent},
    {path:'usuarios',component:UsuariosComponent},
    {path:'reportes',component:ReportesComponent},
    {path:'crear-usuario/:psicologoid',component:CrearUsuarioComponent},
    {path:'pretest/:pacienteid',component:PretestComponent},
    {path:'protest/:pacienteid',component:ProtestComponent},
    {path:'autoestima/:pacienteid',component:AutoestimaComponent},
    {path:'autonomia/:pacienteid',component:AutonomiaComponent},
    {path:'decisiones/:pacienteid',component:DecisionesComponent},
    {path:'motivacion/:pacienteid',component:MotivacionComponent},
    {path:'resultados-autoestima-pre/:pacienteid',component:ResultadosAutoestimaPreComponent},
    {path:'resultados-autonomia-pre/:pacienteid',component:ResultadosAutonomiaPreComponent},
    {path:'resultados-motivacion-pre/:pacienteid',component:ResultadosMotivacionPreComponent},
    {path:'resultados-decisiones-pre/:pacienteid',component:ResultadosDecisionesPreComponent},
    {path:'resultados-autoestima-pro/:pacienteid',component:ResultadosAutoestimaProComponent},
    {path:'resultados-autonomia-pro/:pacienteid',component:ResultadosAutonomiaProComponent},
    {path: 'resultados-decisiones-pro/:pacienteid',component:ResultadosDecisionesProComponent},
    {path:'resultados-motivacion-pro/:pacienteid',component:ResultadosMotivacionProComponent},

    //agregado recientemente
    {path:'listapsicologo',component:PsicologosComponent},
    {path:'listaPacienteXPsicologo',component:VerPacienteXPsicologoComponent},
    {path:'crear-psicologo',component:CrearPsicologoComponent}

   ]
  },
  {path:'prueba',component:PruebaComponent},
  {path:'login',component:LoginIComponent}

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
