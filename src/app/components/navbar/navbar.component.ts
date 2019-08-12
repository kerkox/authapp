import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) {

   }

  ngOnInit() {
    this.auth.localAuthSetup();
  }

  login() {
    console.log('Login:')
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}
