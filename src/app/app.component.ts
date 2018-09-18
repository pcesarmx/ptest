import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})

// class item {
//   name: string;
// }

export class AppComponent {
  testitem: any;
  constructor(afAuth: AngularFireAuth , db: AngularFireDatabase) {
    // this.testitem = {name: 'zzz' };
    // tslint:disable-next-line:max-line-length
    const t = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTUzNjUzODU3MSwiZXhwIjoxNTM2NTQyMTcxLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1rZHhoMUBwdGVzdC13ZWIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJmaXJlYmFzZS1hZG1pbnNkay1rZHhoMUBwdGVzdC13ZWIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJ0ZXN0MSJ9.OLPsA0SvFHTi9H-Aog6_iVN3xjBWyB0YTTjioU3Elzx6bU886ofLjXrn-t7BXBhWrYQ_HHwGR07NzPHBBkRUP7OcXjum7s91v6Uzgf23UntID1QyW5ETLLXSLC7vqyT2saFEgdXZ_-3p1Wx9LrsVKpO1DWDfXAKpr-kDqgxJHeojJnEDjPxTGxcOOgbasOFAWgLF7_xsNo3o-H7zMvwvxNqVKBFp-PuSlX7mDTj-gW0dTZrkNa8tEPnjNgow1bcCjMOfagHdpwSJd9kPvDde8-eAcIAOtHK1JtbaKW1T1htxWeZnfjaSf-DcnaWJMrLM34mHdiesDtbmb-tkPTH3Ew';
    afAuth.auth.signInWithCustomToken(t).then((r) => {
      console.log(r.user.uid);
      db.object('workspaces/' + r.user.uid).valueChanges().subscribe((data) => {
        this.testitem = data;
      }, (error) => {
        alert('Error' + error);
      });
    }).catch((error: Error) => {
      console.error('FB Login Error' + error.message);
      // debugger;
    });
  }
}
