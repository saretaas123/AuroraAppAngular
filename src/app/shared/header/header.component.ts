import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private _cookieService : CookieService
  ) { }

  ngOnInit(): void {
  }

  LogOut()
  {
    console.log("Ejecuto el logout")
    this._cookieService.deleteAll();
    this._cookieService.delete("PsicologoId");
    this._cookieService.delete("UsuarioId");
    this._cookieService.delete("PsicologoCargo");

    this.router.navigate(['/login']);
  }
}
