import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  g_routeparam_PsicologoId: string = '-3';

  public ApiFullobjPsicologoFullInfo : any = {
    mnsj: '',
    rpta : {}
  };

  public objPsicologoFullInfo : any = {
    psicologoId: 0,
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dni: "",
    correo: "",
    cargoId: 0,
    ubigeoId: 0,
    usuarioId: 0,
    cantPacientes: 0
  };

  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.route.snapshot.paramMap.get("psicologoid")??'0';

    this.PsicologoService.GetPsicologoFullInfoByPsicologoId(this.g_routeparam_PsicologoId).subscribe(apiRpta => {
    this.ApiFullobjPsicologoFullInfo = apiRpta;
    console.log(this.ApiFullobjPsicologoFullInfo.mnsj);
    this.objPsicologoFullInfo = this.ApiFullobjPsicologoFullInfo.rpta;
   })
  }

  constructor(
    private PsicologoService: PsicologoService,
    private route: ActivatedRoute,
    ) {
    }

}
