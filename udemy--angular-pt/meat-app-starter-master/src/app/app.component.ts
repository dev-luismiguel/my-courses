import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './security/login/login.service';


@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!';

  constructor(private cookieService: CookieService, private loginService: LoginService) { }

  ngOnInit() {
    if (this.cookieService.check('currentUser')) {
      this.loginService.user = JSON.parse(this.cookieService.get('currentUser'));
    }

  }

}
