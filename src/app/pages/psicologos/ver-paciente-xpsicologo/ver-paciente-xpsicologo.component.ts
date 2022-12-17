import { Component, OnInit } from '@angular/core';
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';

@Component({
  selector: 'app-ver-paciente-xpsicologo',
  templateUrl: './ver-paciente-xpsicologo.component.html',
  styleUrls: ['./ver-paciente-xpsicologo.component.css']
})
export class VerPacienteXPsicologoComponent implements OnInit {

  g_FromUser_PsicologoId: number = 1;

  private ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  public objPsicologoFullInfo : any = {
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

  ngOnInit(): void {
    this.PsicologoService.GetPsicologoFullInfoByPsicologoId(this.g_FromUser_PsicologoId+"")
    .subscribe(apiRpta => {
      this.ApiFullobjPsicologoFullInfo = apiRpta;
      console.log(this.ApiFullobjPsicologoFullInfo.mnsj);
      this.objPsicologoFullInfo = this.ApiFullobjPsicologoFullInfo.rpta;
    })
  }

  constructor(
    private PsicologoService: PsicologoService
    ) {

    }



}
