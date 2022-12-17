import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { PacienteService } from 'src/app/services/auroraapi/paciente.service';


@Component({
  selector: 'app-crear-psicologo',
  templateUrl: './crear-psicologo.component.html',
  styleUrls: ['./crear-psicologo.component.css']
})
export class CrearPsicologoComponent implements OnInit {

  g_routeparam_PsicologoId: string = '-3';
 

  ngOnInit(): void {
    this.g_routeparam_PsicologoId = this.route.snapshot.paramMap.get("psicologoid")??'0';
  }

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

  constructor(
    private PacienteService : PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  RegistrarPaciente(
    pNombres : string, pApellidoPaterno : string,pApellidoMaterno : string,
    pFechaNacimiento : string,pDni : string,pTelefono : string,
    pDireccioUbigeo : string,pCorreo : string)
  {
    var RegistroExitoso = false;
    var pPsicologoId = this.g_routeparam_PsicologoId;

    console.log("pPsicologoId:"+pPsicologoId);

  


  }

}
