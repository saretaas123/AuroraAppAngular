import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  g_routeparam_PsicologoId: string = '-3';

  public ApiFullobjPsicologoFullInfo : any = {
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
