import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LandingComponent } from './landing/landing.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';

import { LoginGuardService } from './services/login-guard.service';
import { CanDeactivateService } from './services/can-deactivate-guard.service';

// import { AlertModule, ButtonsModule } from 'ngx-bootstrap';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'url1',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'room/:id',
        component: RoomComponent,
        canActivate: [LoginGuardService],
        canDeactivate: [CanDeactivateService]
    }
];

export const routedComponents = [ RoomComponent, LandingComponent, LoginComponent ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        // FormsModule, AlertModule.forRoot(), ButtonsModule.forRoot()
        FormsModule
    ],
    declarations: [
        RoomComponent,
        LandingComponent,
        LoginComponent
    ],
    providers: [
        LoginGuardService,
        CanDeactivateService
    ],
    exports: [
        RouterModule,
        routedComponents
    ]
})

export class AppRoutingModule { }
