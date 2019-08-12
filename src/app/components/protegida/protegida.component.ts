import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any = {};

  constructor(public auth: AuthService) { }

  ngOnInit() {
    console.log('this.auth', this.auth);
    this.auth.userProfile$.subscribe(profile => {
        this.profile = profile;
        console.log('profile user', this.profile);
    });
    // this.auth.getUser$((err, profile) => {
    //   this.profile = profile;
    //   console.log('profile', this.profile);
    // });
    // if (this.auth.loggedIn){
    //   this.auth.userProfile$.toPromise().then(profile => {
    //     this.profile = profile;
    //     console.log('profile user', this.profile);
    //   });
    // } else {

    // }
  }

}
