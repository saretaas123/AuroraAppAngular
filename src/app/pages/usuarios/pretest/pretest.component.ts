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
    nombres: '',
    apellidoMaterno:'',
    apellidoPaterno:'',
    cantPacientes : 0,
    correo : '',
    dni : '',
    especialidad : '',
    numeroDeColegiaturaDelPeru : '',
    psicologoId : 0,
    telefono : '',
    usuarioId : 0
  };


  constructor(
    private route: ActivatedRoute,
    private PsicologoService: PacienteService) { }

  ngOnInit(): void {
    this.g_FromUser_PacienteId = this.route.snapshot.paramMap.get("pacienteId")??'0';
  }

}
