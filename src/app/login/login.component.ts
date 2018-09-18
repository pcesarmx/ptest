import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ClientNode } from '../client-node';
// import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit/*, AfterViewInit */ {
  // @ViewChild('myForm')
  // private _myForm: NgForm;
  public loggedInUser: ClientNode;

  constructor(private _loginService: LoginService) {
    this._loginService.getLoggedInUser()
    // .map(user => {
    //     if (!user) { return; }
    //     return {
    //         displayName: user.displayName,
    //         pictureURL: user.photoURL
    //     };
    // })
    .subscribe(user => {
      this.loggedInUser = user;
    });
   }
  test = function() {
    console.log('Test OK');
    return {};
  };
  ngOnInit() {
    this._loginService.login();
  }

  // ngAfterViewInit() {
    // console.log(this._myForm);
  // }


  onSubmit = function( formValues ) {
    debugger;
    console.log(formValues);
  };
}
