import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs'; // Import map, y otras funciones
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ClientNode } from '../client-node';

@Injectable()
export class LoginService {
    private _loggedInUser: Observable<ClientNode>;

    constructor() { }

    public getLoggedInUser(): Observable<ClientNode> {
        return this._loggedInUser;
    }

    public login() {
        // hacer http req
        return true;
        // this._authService.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).
        //     catch(error => alert(error.message));
    }
    public logout() {
        return true; // this._authService.auth.signOut();
    }

    /*
    constructor() {
        this._loggedInUser = null;
    }

    public login() {
        this._loggedInUser = {
            name: 'Paulo Ruvalcaba'
        };
    }

    public logout() {
        this._loggedInUser = null;
    }

    getLoggedInUser() {
        return this._loggedInUser ? Object.assign({}, this._loggedInUser) : null;
    }*/
}
