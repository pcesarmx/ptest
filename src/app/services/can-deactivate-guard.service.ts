import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginService } from './login.service';

export interface ICanDeativate {
    canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateService implements CanDeactivate<ICanDeativate> {
    canDeactivate(component: ICanDeativate ) {
        if ( component.canDeactivate) {
            return component.canDeactivate();
        }
        return true;
    }

}

