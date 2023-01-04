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
import { VerResumenComponent} from './usuarios/ver-resumen/ver-resumen.component';
import { FichaRegistroComponent } from './usuarios/ficha-registro/ficha-registro.component';
import { EditarFichaRegistroComponent } from './usuarios/editar-ficha-registro/editar-ficha-registro.component';
//import { FichaRegistroComponent} from './usuarios/ficha-registro/ficha-registro.component'
//Cuestionarios
import { AutoestimaPreComponent } from './usuarios/cuestionarios/autoestima/autoestima-pre/autoestima-pre.component';
import { AutoestimaPostComponent } from './usuarios/cuestionarios/autoestima/autoestima-post/autoestima-post.component';
import { AutonomiaPreComponent } from './usuarios/cuestionarios/autonomia/autonomia-pre/autonomia-pre.component';
import { AutonomiaPostComponent } from './usuarios/cuestionarios/autonomia/autonomia-post/autonomia-post.component';
import { DecisionesPreComponent } from './usuarios/cuestionarios/decisiones/decisiones-pre/decisiones-pre.component';
import { DecisionesPostComponent } from './usuarios/cuestionarios/decisiones/decisiones-post/decisiones-post.component';
import { MotivacionPreComponent } from './usuarios/cuestionarios/motivacion/motivacion-pre/motivacion-pre.component';
import { MotivacionPostComponent } from './usuarios/cuestionarios/motivacion/motivacion-post/motivacion-post.component';


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
    {path:'pretest/:casopacienteid',component:PretestComponent},
    {path:'protest/:casopacienteid',component:ProtestComponent},
    {path:'autoestima/:casopacienteid',component:AutoestimaComponent},
    {path:'autoestima-pre/:casopacienteid',component:AutoestimaPreComponent},
    {path:'autoestima-post/:casopacienteid',component:AutoestimaPostComponent},
    {path:'autonomia/:casopacienteid',component:AutonomiaComponent},
    {path:'autonomia-pre/:casopacienteid',component:AutonomiaPreComponent},
    {path:'autonomia-post/:casopacienteid',component:AutonomiaPostComponent},
    {path:'decisiones/:casopacienteid',component:DecisionesComponent},
    {path:'decisiones-pre/:casopacienteid',component:DecisionesPreComponent},
    {path:'decisiones-post/:casopacienteid',component:DecisionesPostComponent},
    {path:'motivacion/:casopacienteid',component:MotivacionComponent},
    {path:'motivacion-pre/:casopacienteid',component:MotivacionPreComponent},
    {path:'motivacion-post/:casopacienteid',component:MotivacionPostComponent},
    {path:'resultados-autoestima-pre/:casopacienteid',component:ResultadosAutoestimaPreComponent},
    {path:'resultados-autonomia-pre/:casopacienteid',component:ResultadosAutonomiaPreComponent},
    {path:'resultados-motivacion-pre/:casopacienteid',component:ResultadosMotivacionPreComponent},
    {path:'resultados-decisiones-pre/:casopacienteid',component:ResultadosDecisionesPreComponent},
    {path:'resultados-autoestima-pro/:casopacienteid',component:ResultadosAutoestimaProComponent},
    {path:'resultados-autonomia-pro/:casopacienteid',component:ResultadosAutonomiaProComponent},
    {path: 'resultados-decisiones-pro/:casopacienteid',component:ResultadosDecisionesProComponent},
    {path:'resultados-motivacion-pro/:casopacienteid',component:ResultadosMotivacionProComponent},
    //agregado recientemente
    {path:'ver-resultados/:casopacienteid',component:VerResumenComponent},
    {path:'agregar-ficha-registro/:casopacienteid',component:FichaRegistroComponent},
    {path:'editar-ficha-registro/:casopacienteid',component:EditarFichaRegistroComponent},

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
