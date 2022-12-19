import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearPsicologoComponent } from './crear-psicologo/crear-psicologo.component';

@Component({
  selector: 'app-psicologos',
  templateUrl: './psicologos.component.html',
  styleUrls: ['./psicologos.component.css']
})
export class PsicologosComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog()
  {
    this.dialog.open(CrearPsicologoComponent);
  }

}
