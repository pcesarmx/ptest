import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardService implements CanActivate {
    private router;
    constructor(private loginService: LoginService, r: Router) {
        this.router = r;
    }

    canActivate(route: ActivatedRouteSnapshot) {
        if ( this.loginService.getLoggedInUser() === null ) {
            this.router.navigate(['landing'], {fragment: 'show-warning'});
        }
        return this.loginService.getLoggedInUser() !== null;
    }
}
