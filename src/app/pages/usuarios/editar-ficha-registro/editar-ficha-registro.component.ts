import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-ficha-registro',
  templateUrl: './editar-ficha-registro.component.html',
  styleUrls: ['./editar-ficha-registro.component.css']
})
export class EditarFichaRegistroComponent implements OnInit {

  g_FromUser_PsicologoId: string = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
