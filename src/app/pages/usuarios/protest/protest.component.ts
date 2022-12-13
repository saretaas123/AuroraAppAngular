import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-protest',
  templateUrl: './protest.component.html',
  styleUrls: ['./protest.component.css']
})
export class ProtestComponent implements OnInit {

  g_FromUser_PsicologoId: string = '1';
  g_FromUser_PacienteId: string = '1';

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.g_FromUser_PacienteId = this.route.snapshot.paramMap.get("pacienteId")??'0';

  }

}
