import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pestana-paciente',
  templateUrl: './pestana-paciente.component.html',
  styleUrls: ['./pestana-paciente.component.css']
})
export class PestanaPacienteComponent implements OnInit {

  public out_p_PsicologoId : string = '1';

  ngOnInit(): void {

  }

  constructor() { }


}
