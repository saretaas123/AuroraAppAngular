import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasopacienteService } from 'src/app/services/auroraapi/casopaciente.service';

@Component({
  selector: 'app-ver-resumen',
  templateUrl: './ver-resumen.component.html',
  styleUrls: ['./ver-resumen.component.css']
})
export class VerResumenComponent implements OnInit {

  g_routeparam_PacienteId: string = '0';

  objAPIRpta_Full : any =
  {
    msnj : '',
    rpta : {}
  };

  objAPIRpta_objPacienteFullInfo : any =
  {
    examenPreTestAutoestimaCompletado : false,
    examenPreTestAutonomiaCompletado : false,
    examenPreTestMotivacionAlCambioCompletado : false,
    examenPreTestTomaDecisionCompletado : false,
    examenPostTestAutoestimaCompletado : false,
    examenPostTestAutonomiaCompletado : false,
    examenPostTestMotivacionAlCambioCompletado : false,
    examenPostTestTomaDecisionCompletado : false,
    pacienteAnoDeEvaluacion : '',
    pacienteApellidoMaterno : '',
    pacienteApellidoPaterno : '',
    pacienteCorreo : '',
    pacienteDireccion : '',
    pacienteDni : '',
    pacienteFechaNacimiento : '',
    pacienteId : '',
    pacienteNombres : '',
    pacienteRiesgo : '',
    pacienteTipoViolencia : '',
    pacienteTelefono : '',
    psicologoId : '',
  };

  ngOnInit(): void {
    this.g_routeparam_PacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.PintarLosDatosDelPacienteEnLaPantallaPrincipal(this.g_routeparam_PacienteId);
  }

  constructor(
    private CasoPacienteService : CasopacienteService,
    private route: ActivatedRoute
  ) {

  }

  PintarLosDatosDelPacienteEnLaPantallaPrincipal(p_PacienteId : string)
  {
      this.CasoPacienteService.GetCasoPacienteById(p_PacienteId)
      .subscribe( APIRpta => {
        this.objAPIRpta_Full = APIRpta;
        this.objAPIRpta_objPacienteFullInfo = this.objAPIRpta_Full.rpta;
      });
  }

}
