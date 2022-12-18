import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';

@Component({
  selector: 'app-pretest',
  templateUrl: './pretest.component.html',
  styleUrls: ['./pretest.component.css']
})
export class PretestComponent implements OnInit {

  g_FromUser_PsicologoId: string = '1';
  g_FromUser_PacienteId: string = '1';

  private ApiFullobjPacienteFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  public objPacienteFullInfo : any = {
    apellidoMaterno : '',
    apellidoPaterno: '',
    correo : '',
    creadoEn : '',
    creadoPor : '',
    direccionUbigeo : '',
    dni : '',
    fechaNacimiento : '',
    id : '',
    nombres : '',
    siendoAtendido : '',
    telefono : '',
    tipoViolencia : '',
    riesgo : '',
    anoDeEvaluacion : '',
    entidadProblema : '',
    modalidadAdministrativo : '',
  };


  constructor(
    private route: ActivatedRoute,
    private PacienteService: PacienteService) { }

  ngOnInit(): void {
    this.g_FromUser_PacienteId = this.route.snapshot.paramMap.get("casopacienteid")??'0';
    this.ObtenerDatosPaciente();
  }

  ObtenerDatosPaciente()
  {
    this.PacienteService.GetPacienteFullInfoByCasoPacienteId(this.g_FromUser_PacienteId).subscribe(APIRpta =>
      {
        this.ApiFullobjPacienteFullInfo = APIRpta ;
        this.objPacienteFullInfo = this.ApiFullobjPacienteFullInfo.rpta;
        console.log(APIRpta);

      });
  }

}
