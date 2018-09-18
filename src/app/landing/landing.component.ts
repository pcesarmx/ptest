import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ICanDeativate } from '../services/can-deactivate-guard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, ICanDeativate {
  private isDeactivate: boolean;
  private showWarning: boolean;
  constructor(private loginService: LoginService, private activeRoute: ActivatedRoute) {
      this.showWarning = false;
   }

  canDeactivate() {
    return this.isDeactivate;
  }

  ngOnInit() {
    console.log(this.activeRoute);
    this.showWarning = false;
    // debugger;
    // if ( this.activeRoute.snapshot.fragment !== null && this.activeRoute.snapshot.fragment.toString() === "show-warning" ) {
    //   debugger;
    //   this.showWarning = true;
    // }
    let _this = this;
    this.activeRoute.fragment.subscribe( params => {
      _this.showWarning = params === "show-warning";
    } );

  }

}
