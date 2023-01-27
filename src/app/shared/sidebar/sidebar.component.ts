import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PsicologoService } from 'src/app/services/auroraapi/psicologo.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  g_routeparam_PsicologoId: string = '-3';
  g_cookie_CargoId : string = '';

  html_pintarOpcionAdmi = false;

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
    this.g_cookie_CargoId = this._cookieService.get("PsicologoCargo").split('y')[2];
    if(this.g_cookie_CargoId === null)
    {
      this._cookieService.deleteAll();
    }
    else if(this.g_cookie_CargoId === 'd')
    {
      this.html_pintarOpcionAdmi = false;
    }
    else if(this.g_cookie_CargoId === 'j')
    {
      this.html_pintarOpcionAdmi = true;
    }


    this.PsicologoService.GetPsicologoFullInfoByPsicologoId(this.g_routeparam_PsicologoId).subscribe(apiRpta => {
    this.ApiFullobjPsicologoFullInfo = apiRpta;
    this.objPsicologoFullInfo = this.ApiFullobjPsicologoFullInfo.rpta;
   })
  }

  constructor(
    private PsicologoService: PsicologoService,
    private route: ActivatedRoute,
    private _cookieService: CookieService
    ) {
    }



}
