import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICanDeativate } from '../services/can-deactivate-guard.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, ICanDeativate {
  private roomID;
  private isDeactivate: boolean;

  constructor(private activeRoute: ActivatedRoute) {
    this.isDeactivate = true;
   }

  toggleDeactivate() {
    this.isDeactivate = !this.isDeactivate;
  }

  canDeactivate() {
    return this.isDeactivate;
  }

  ngOnInit() {
    const _this = this;
    this.activeRoute.paramMap.subscribe((parameters: ParamMap) => {
      // console.log("ParamMap", parameters.get("id"));
      _this.roomID = parameters.get("id");
    });

  }

}
