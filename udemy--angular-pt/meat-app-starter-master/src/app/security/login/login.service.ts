import { NavigationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../app.api';
import { User } from './user.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class LoginService {

    user: User;
    lastUrl: string;

    constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
        this.router.events.filter(e => e instanceof NavigationEnd)
                          .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    login (email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password})
                        .do(user => this.loginSuccess(user))
    }

    loginSuccess(user: User) {
        this.user = user;
        this.cookieService.deleteAll();
        this.cookieService.set('currentUser', JSON.stringify(user), 360);
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)])
    }

    logout() {
        this.cookieService.deleteAll();
        this.user = undefined;
    }
}
