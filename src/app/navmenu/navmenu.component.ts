import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable  } from 'rxjs';
import { LoginService } from '../services/login.service';

interface INavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavmenuComponent implements OnInit {
  private menuItems: INavItem[];
  private loggedIn;
  // private menuItem: INavItem;
  public items: Observable<any[]>;
  private lservice;

  constructor(db: AngularFireDatabase, private loginService: LoginService) {
    // db.list('GEEKWISE/MENU2/').subscribe(value => {
    //     this.menuItems = value;
    // });
    let _this2 = this;
    this.menuItems = [];
    db.list('rooms').valueChanges().subscribe(value => {
        value.map(item  => {
          let item2: INavItem;
          item2 = item as INavItem;
          _this2.menuItems.push({
            label: item2.label,
            link: 'landing'
          });
        });
        // this.menuItems = value;

    });
  }

  loginAction() {
    this.loginService.login();
  }

  logoutAction() {
    this.loginService.logout();
  }

  test() {
    console.log('TEst ');
    return {'test': false};
  }

  ngOnInit() {
    this.loggedIn = false;

    // this.menuItems = [{
    //   label: 'Home ',
    //   link: 'url1'
    // }, {
    //   label: 'Link 2 => ID 100',
    //   link: 'url2/100'
    // }, {
    //   label: 'Link 2 => ID 200',
    //   link: 'url2/200'
    // }, {
    //   label: 'Link 3',
    //   link: 'url3'
    // }];
  }

}
